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
var fs = require('fs');
/**
 * Find order by id
 * Note: This is called every time that the parameter :orderId is used in a URL.
 * Its purpose is to preload the order on the req object then call the next function.
 */

exports.order = function(req, res, next, id) {
    console.log('id => ' + id);
    db.Order.find({where: {id: id}, include: [
        {
            model:db.Outlet,
            attributes:['id', 'outletCode', 'outletName', 'outletNameKh', 'outletSubtype', 'perfectStoreType', 'address']
        },
        {
            model:db.Product,
            attributes:['id', 'inventoryCode', 'name', 'nameKh', 'pieces', 'price']
        },
        {
            model:db.User,
            attributes:['id', 'name']
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

/**
 * Create a order
 */
exports.create = function(req, res) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var day = moment().format("DD");
    var month = moment().format("MM");
    var year = moment().format("YYYY");
    // save and return and instance of order on the res object.
    sequelize.query('INSERT INTO Orders (amount, orderDate, orderDay, orderMonth, orderYear, createdAt, updatedAt, OutletId, ProductId, UserId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                     { replacements: [
                        req.body.amount,
                        req.body.orderDate,
                        day,
                        month,
                        year,
                        now,
                        now,
                        req.body.OutletId,
                        req.body.ProductId,
                        req.body.UserId],
                        type:sequelize.QueryTypes.INSERT})
        .then(function(orders) {
        return res.jsonp(orders);
    });
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

exports.export = function(req, res){
    fs.writeFile('file.txt', 'hello world', function(err) {
        if (err) throw err;
        res.jsonp({id: '1', name: 'a'});
        console.log('file saved');
    });
}

exports.reports = function(req, res) {

    var currentPage = req.body.currentPage;
    var limit = 10;
    var offset = (currentPage - 1) * limit;
    var params = {};
    var queryType = req.body.queryType
    var userIds = req.body.spIds;
    var distributorIds = req.body.distributorIds;
    var productIds = req.body.productIds;
    // var userIds;
    // var distributorIds;
    // var productIds;

    var userModel = {
        model:db.User,
        attributes: ['id', 'username', 'name']
    };

    if (userIds.length){
        userModel.where = {
            id: {
                $in: userIds
            }
        }
    }

    var distributorModel = {
        model: db.Distributor,
        attributes: ['id', 'dtCode', 'dtName']
    };

    if (distributorIds.length){
        distributorModel.where = {
            id: {
                $in: distributorIds
            }
        }
    }

    var outletModel = {
        model:db.Outlet, 
        attributes: ['id', 'outletCode', 'outletName', 'outletNameKh', 'outletSubtype', 'perfectStoreType', 'address'],
        include: [
            distributorModel
        ]
    };

    var productModel = {
        model:db.Product,
        attributes:['id', 'inventoryCode', 'name', 'nameKh', 'pieces', 'price', 'freeInQty']
    }

    if (productIds.length){
        productModel.where = {
            id: {
                $in: productIds
            }
        }
    }

    var includeArr = [
        userModel,
        outletModel,
        productModel  
    ];


    if (queryType == 'page'){
        params = {
            attributes: {
                include: [
                    ['amount', 'amount']
                ],
                exclude: [
                    'orderDay',
                    'orderMonth',
                    'orderYear',
                    'createdAt',
                    'updatedAt'
                ]
            },
            include: includeArr,
            offset: offset, 
            limit: limit
        };
    }
    else{
        params = {
            attributes: {
                include: [
                    ['amount', 'amount']
                ],
                exclude: [
                    'orderDay',
                    'orderMonth',
                    'orderYear',
                    'createdAt',
                    'updatedAt'
                ]
            },
            include: includeArr
        };
    }

    var startDate = req.body.startDate;
    var endDate = req.body.endDate;

    if (startDate || endDate){
        params.where = {};
        params.where.orderDate = {};
    }
    if (endDate){
        endDate = new Date(endDate);
        endDate.setDate(endDate.getDate() + 1);
        params.where.orderDate.$lt = endDate;
    }
    if (startDate){
        params.where.orderDate.$gt = new Date(startDate);
        // params.where.orderDate.$gte = moment.utc(startDate).format('YYYY-MM-DD');
    }
    params.order = [['orderDate', 'DESC'], ['amount', 'DESC']]; 

    console.log('PARAMS ---> ', params);

    db.Order.findAndCountAll(params).then(function(orders){
        var output = {
            results: orders.rows,
            total: orders.count,
            totalPages: Math.ceil(orders.count/limit),
            currentPage: parseInt(currentPage),
            pageSize: limit
        }
        return res.jsonp(output);
        // db.Order.count({include: includeArr}).then(function(total){
        // });
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
 * List of Orders
 */
exports.all = function(req, res) {
    db.Order.findAll({include: [
        {model:db.User, attributes: ['id', 'username']},
        {model:db.Outlet, attributes: ['id', 'outletCode', 'outletName', 'outletNameKh', 'outletSubtype', 'perfectStoreType', 'address']},
        {model:db.Product, attributes:['id', 'inventoryCode', 'name', 'nameKh', 'pieces', 'price']}
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
 * Order authorizations routing middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.order.User.id !== req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
};
