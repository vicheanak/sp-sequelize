'use strict';

/**
 * Module dependencies.
 */
var StandardError = require('standard-error');
var db = require('../../config/sequelize');
var jwt  = require('jwt-simple');
var bcrypt = require('bcrypt');
var uuid = require('uuid');
var secret = require('../config/secret');

/**
 * Find sp by id
 * Note: This is called every time that the parameter :spId is used in a URL.
 * Its purpose is to preload the sp on the req object then call the next function.
 */
exports.sp = function(req, res, next, id) {
    console.log('id => ' + id);
    db.User.find({where: {id: id}}).then(function(sp){
        if(!sp) {
            return next(new Error('Failed to load sp ' + id));
        } else {
            req.sp = sp;
            return next();
        }
    }).catch(function(err){
        return next(err);
    });
};

/**
 * Create a sp
 */
exports.create = function(req, res){
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.sp.password, salt, function (err, hash) {

            req.body.sp.password = hash;
            var token = jwt.encode(uuid.v4(), secret);
            req.body.sp.token = token;
            db.User.create({
                name: req.body.sp.name,
                username:req.body.sp.username,
                password:req.body.sp.password,
                active: req.body.sp.active,
                token: req.body.sp.token,
                role: 'sp'
            }).then(function(sp){
                var spId = sp.dataValues.id;
                var monthlyOrders = []; 
                for (var p = 0; p < req.body.products.length; p ++){
                    monthlyOrders.push({
                        ProductId: req.body.products[p].id,
                        UserId: spId,// GET RETUR ID,
                        amount: req.body.products[p].amount ? req.body.products[p].amount : 0,
                    });
                }

                var outletUsers = [];
                for (var o = 0; o < req.body.outlets.length; o ++){
                    if (req.body.outlets[o].checked){
                        outletUsers.push({
                            OutletId: req.body.outlets[o].id,
                            UserId: spId
                        });
                    }
                }

                db.MonthlyOrder.bulkCreate(monthlyOrders).then(function(monthlyOrders){
                    db.UserOutlet.bulkCreate(outletUsers).then(function(outletUsers){
                        res.jsonp(spId);
                    });
                });
            }).catch(function(err){
                res.jsonp(err);
            });
        });
    });
}

/**
 * Update a sp
 */
exports.update = function(req, res) {

    // create a new variable to hold the sp that was placed on the req object.
    var sp = req.sp;

    for (var p = 0; p < req.body.products.length; p ++){
        db.MonthlyOrder.upsert({
            ProductId: req.body.products[p].id,
            UserId: req.body.sp.id,
            amount: req.body.products[p].amount ? req.body.products[p].amount : 0,
        }).then(function(updatedData){
            console.log('Monthly Order', updatedData);
        });
    }

    for (var o = 0; o < req.body.outlets.length; o ++){
        //Delete if check is not true
        if (req.body.outlets[o].checked){
            db.UserOutlet.upsert({
                OutletId: req.body.outlets[o].id,
                UserId: req.body.sp.id
            }).then(function(updatedData){
                console.log('Upsert UserOutlet', updatedData);
            })
        }
        else{
            db.UserOutlet.destroy({
                where: {
                    OutletId: req.body.outlets[o].id,
                    UserId: req.body.sp.id
                }
            }).then(function(updatedData){
                console.log('Delete UserOutlet', updatedData);
            });
        }
    }

    if (req.body.sp.password){
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.sp.password, salt, function (err, hash) {
                req.body.sp.password = hash;
                var token = jwt.encode(uuid.v4(), secret);
                req.body.token = token;
                sp.updateAttributes({
                    name: req.body.sp.name,
                    username: req.body.sp.username,
                    active: req.body.sp.active,
                    password: req.body.sp.password
                }).then(function(a){
                    return res.jsonp(a);
                }).catch(function(err){
                    db.User.find({
                        where: {
                            id: sp.id
                        }
                    }).then(function(user){
                        var error = {
                            error: err,
                            data: user
                        }
                        return res.jsonp(error);
                    });
                });
            });
        });
    }
    else{
        sp.updateAttributes({
            name: req.body.sp.name,
            username: req.body.sp.username,
            active: req.body.sp.active
        }).then(function(a){
            return res.jsonp(a);
        }).catch(function(err){
            db.User.find({
                where: {
                    id: sp.id
                }
            }).then(function(user){
                console.log('====> DUPLICATE USERNAME');
                var error = {
                    error: err,
                    data: user
                }
                return res.jsonp(error);
            });
        });
    }

};

/**
 * Delete an sp
 */
// exports.destroy = function(req, res) {

//     // create a new variable to hold the sp that was placed on the req object.
//     var sp = req.sp;

//     sp.destroy().then(function(){
//         return res.jsonp(sp);
//     }).catch(function(err){
//         return res.render('error', {
//             error: err,
//             status: 500
//         });
//     });
// };

/**
 * Show an sp
 */
exports.show = function(req, res) {
    // Sending down the sp that was just preloaded by the sps.sp function
    // and saves sp on the req object.
    return res.jsonp(req.sp);
};

/**
 * List of Users
 */
exports.all = function(req, res) {
    db.User.findAll({
        where: {
            role: 'sp',
        }
    }).then(function(sps){
        return res.jsonp(sps);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * User authorizations routing middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.sp.User.id !== req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
};
