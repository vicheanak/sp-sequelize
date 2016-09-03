'use strict';

/**
 * Module dependencies.
 */
var StandardError = require('standard-error');
var db = require('../../config/sequelize');
var moment = require('moment');
var Sequelize = require('sequelize');
var config = require('../config/config.json');
var sequelize = new Sequelize(config.development.database, config.development.username, config.development.password);
/**
 * Find order by id
 * Note: This is called every time that the parameter :orderId is used in a URL.
 * Its purpose is to preload the order on the req object then call the next function.
 */

exports.userOutlet = function(req, res, next, id) {
    console.log('id => ' + id);
    db.UserOutlet.find({where: {id: id}, include: [
        {
            model:db.Outlet,
            attributes:['id', 'outletCode', 'outletName', 'outletNameKh', 'outletSubtype', 'perfectStoreType', 'address']
        },
        {
            model:db.User,
            attributes:['id', 'name', 'role']
        }
        ]}).then(function(order){
        if(!order) {
            return next(new Error('Failed to load order ' + id));
        } else {
            req.order = order;
            return next();
        }
    }).catch(function(err){
        return next(err);
    });
};

exports.byUser = function(req, res){
    var userId = req.params.userId;
    db.UserOutlet.findAll({include: [
        {
            model:db.User, 
            where: {id: userId},
            attributes: ['id', 'username']
        },
        {
            model:db.Outlet,
            where: {
                 active: true
            },
            attributes: ['id', 'outletCode', 'outletName', 'outletNameKh', 'outletSubtype', 'perfectStoreType', 'address', 'DistributorId'],
            include: [
                {
                    model: db.Distributor
                }
            ]
        }
    ]}).then(function(orders){
        return res.jsonp(orders);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
}

/**
 * Create a order
 */
exports.create = function(req, res) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var day = moment().format("DD");
    var month = moment().format("MM");
    var year = moment().format("YYYY");
    // save and return and instance of order on the res object.
};
/**
 * Update a order
 */
exports.update = function(req, res) {

    // create a new variable to hold the order that was placed on the req object.
    var order = req.order;

    order.updateAttributes({
        amount: req.body.amount
    }).then(function(a){
        return res.jsonp(a);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Delete an order
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the order that was placed on the req object.
    var order = req.order;

    order.destroy().then(function(){
        return res.jsonp(order);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};


/**
 * Show an order
 */
exports.show = function(req, res) {
    // Sending down the order that was just preloaded by the orders.order function
    // and saves order on the req object.
    return res.jsonp(req.order);
};

/**
 * List of UserOutlets
 */
exports.all = function(req, res) {
    db.UserOutlet.findAll({include: [
        {model:db.User, attributes: ['id', 'username']},
        {model:db.Outlet, attributes: ['id', 'outletCode', 'outletName', 'outletNameKh', 'outletSubtype', 'perfectStoreType', 'address']}
        ]}).then(function(orders){
        return res.jsonp(orders);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * UserOutlet authorizations routing middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.order.User.id !== req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
};
