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

exports.monthlyOrder = function(req, res, next, id) {
    console.log('id => ' + id);
    db.MonthlyOrder.find({where: {id: id}, include: [
        {
            model:db.Product,
            attributes:['id', 'inventoryCode', 'name', 'nameKh', 'pieces', 'price']
        },
        {
            model:db.User,
            attributes:['id', 'name']
        }
        ]}).then(function(monthlyOrder){
        if(!monthlyOrder) {
            return next(new Error('Failed to load monthlyOrder ' + id));
        } else {
            req.monthlyOrder = monthlyOrder;
            return next();
        }
    }).catch(function(err){
        return next(err);
    });
};

exports.byUser = function(req, res, next){
    console.log('userId => ', req.params.userId);
    var userId = req.params.userId;
    db.MonthlyOrder.findAll({
        include: [
        {
            model:db.Product,
            attributes:['id', 'inventoryCode', 'name', 'nameKh', 'pieces', 'price']
        },
        {
            model:db.User,
            where: {
                 id: userId
            },
            attributes:['id', 'name']
        }
    ]}).then(function(monthlyOrder){
        if(!monthlyOrder) {
            res.jsonp(new Error('Failed to load monthlyOrder ' + userId));
        } else {
            res.jsonp(monthlyOrder);
        }
    }).catch(function(err){
        return next(err);
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
    var monthlyOrder = req.monthlyOrder;

    monthlyOrder.updateAttributes({
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
 * Delete an monthlyOrder
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the order that was placed on the req object.
    var monthlyOrder = req.monthlyOrder;

    monthlyOrder.destroy().then(function(){
        return res.jsonp(monthlyOrder);
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
    // Sending down the order that was just preloaded by the monthlyOrders.order function
    // and saves order on the req object.
    return res.jsonp(req.monthlyOrder);
};

/**
 * List of Orders
 */
exports.all = function(req, res) {
    db.MonthlyOrder.findAll({include: [
        {model:db.User, attributes: ['id', 'username']},
        {model:db.Product, attributes:['id', 'inventoryCode', 'name', 'nameKh', 'monthlyCaseTarget', 'pieces', 'price']}
        ]}).then(function(monthlyOrders){
        return res.jsonp(monthlyOrders);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * MonthlyOrder authorizations routing middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.order.User.id !== req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
};
