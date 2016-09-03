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
 * Find viewer by id
 * Note: This is called every time that the parameter :viewerId is used in a URL.
 * Its purpose is to preload the viewer on the req object then call the next function.
 */
exports.viewer = function(req, res, next, id) {
    console.log('id => ' + id);
    db.User.find({where: {id: id}}).then(function(viewer){
        if(!viewer) {
            return next(new Error('Failed to load viewer ' + id));
        } else {
            req.viewer = viewer;
            return next();
        }
    }).catch(function(err){
        return next(err);
    });
};

/**
 * Create a viewer
 */
exports.create = function(req, res){
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {

        req.body.password = hash;
        var token = jwt.encode(uuid.v4(), secret);
        req.body.token = token;
        db.User.create({
          name: req.body.name,
          username:req.body.username,
          password:req.body.password,
          active: req.body.active,
          token: req.body.token,
          role: 'viewer'
        }).then(function(viewer){
            return res.jsonp(viewer);
        }).catch(function(err){
            return res.jsonp(err);
        });
      });
    });
}

/**
 * Update a viewer
 */
exports.update = function(req, res) {

    // create a new variable to hold the viewer that was placed on the req object.
    var viewer = req.viewer;

    if (req.body.password){
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                req.body.password = hash;
                var token = jwt.encode(uuid.v4(), secret);
                req.body.token = token;
                viewer.updateAttributes({
                    name: req.body.name,
                    username: req.body.username,
                    active: req.body.active,
                    password: req.body.password
                }).then(function(a){
                    return res.jsonp(a);
                }).catch(function(err){
                    db.User.find({
                        where: {
                            id: viewer.id
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
        viewer.updateAttributes({
            name: req.body.name,
            username: req.body.username,
            active: req.body.active,
        }).then(function(a){
            return res.jsonp(a);
        }).catch(function(err){
            db.User.find({
                where: {
                    id: viewer.id
                }
            }).then(function(user){
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
 * Delete an viewer
 */
// exports.destroy = function(req, res) {

//     // create a new variable to hold the viewer that was placed on the req object.
//     var viewer = req.viewer;

//     viewer.destroy().then(function(){
//         return res.jsonp(viewer);
//     }).catch(function(err){
//         return res.render('error', {
//             error: err,
//             status: 500
//         });
//     });
// };

/**
 * Show an viewer
 */
exports.show = function(req, res) {
    // Sending down the viewer that was just preloaded by the viewers.viewer function
    // and saves viewer on the req object.
    return res.jsonp(req.viewer);
};

/**
 * List of Users
 */
exports.all = function(req, res) {
    db.User.findAll({
        where: {
            role: 'viewer',
        }
    }).then(function(viewers){
        return res.jsonp(viewers);
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
    if (req.viewer.User.id !== req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
};
