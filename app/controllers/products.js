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
 * Find product by id
 * Note: This is called every time that the parameter :productId is used in a URL.
 * Its purpose is to preload the product on the req object then call the next function.
 */
exports.product = function(req, res, next, id) {
    db.Product.find({where: {id: id}, include: [{model:db.Category, attributes:['id', 'name']}]}).then(function(product){
        if(!product) {
            return next(new Error('Failed to load product ' + id));
        } else {
            req.product = product;
            return next();
        }
    }).catch(function(err){
        return next(err);
    });
};


exports.thisMonthOrders = function(req, res){
    console.log('this month order');
    var userId = req.params.userId;
    sequelize.query(`SELECT p.id,
                    p.name,
                    p.nameKh,
                    p.unitKh,
                    mo.amount as monthlyCaseTarget,
                    p.pieces,
                    p.star,
                    SUM(o.amount)/p.pieces AS totalSale, 
                    mo.amount - (SUM(o.amount)/p.pieces) AS remainingSale
                    FROM Products AS p
                    INNER JOIN Orders AS o ON o.ProductId = p.id
                    INNER JOIN MonthlyOrders AS mo ON mo.ProductId = p.id AND mo.UserId = ${userId}
                    WHERE o.UserId = ${userId} AND o.orderMonth = MONTH(curdate()) AND o.orderYear = YEAR(curdate())
                    GROUP BY p.id, mo.amount
                    `, { type: sequelize.QueryTypes.SELECT})
                    .then(function(orders) {
                        return res.jsonp(orders);
                    });
}

exports.todayOrders = function(req, res){
    var userId = req.params.userId;
    var today = moment().format("YYYY-MM-DD");
    var date = moment().date();
    var month = moment().month() + 1;
    var year = moment().year();
    sequelize.query(`SELECT p.id,
                    p.name,
                    p.nameKh,
                    p.unitKh,
                    mo.amount as monthlyCaseTarget,
                    p.pieces,
                    p.star,
                    mo.amount/DAY(LAST_DAY(now())) as dailyCaseTarget,
                    (((mo.amount * p.pieces)/DAY(LAST_DAY(now())) ) * ${date} - (SELECT COALESCE(SUM(o1.amount), 0) FROM Orders AS o1 WHERE o1.ProductId = p.id AND DATE(o1.orderDate) < '${today}' AND o1.orderMonth = ${month} AND o1.orderYear = ${year})) as dailyPieceTarget,
                        SUM(o.amount) AS todaySale,
                    ((mo.amount * p.pieces) / DAY(LAST_DAY(now())) ) - SUM(o.amount) AS remainingSale
                    FROM Products AS p
                    INNER JOIN Orders AS o ON o.ProductId = p.id
                    INNER JOIN MonthlyOrders AS mo ON mo.ProductId = p.id AND mo.UserId = ${userId}
                    WHERE o.orderDay = ${date} AND o.orderMonth = ${month} AND o.orderYear = ${year} AND o.UserId = ${userId}
                    GROUP BY p.id, mo.amount
                    `, { type: sequelize.QueryTypes.SELECT})
                    .then(function(orders) {
                        console.log('todayOrders ==> ', orders);
                        return res.jsonp(orders);
                    });
    // sequelize.query(`SELECT p.id,
    //                 p.name,
    //                 p.nameKh,
    //                 p.unitKh,
    //                 mo.amount as monthlyCaseTarget,
    //                 p.pieces,
    //                 p.star,
    //                 mo.amount/DAY(LAST_DAY(now())) as dailyCaseTarget,
    //                 (((mo.amount * p.pieces)/DAY(LAST_DAY(now())) ) * DAY(curdate()) - (SELECT COALESCE(SUM(o1.amount), 0) FROM Orders AS o1 WHERE o1.ProductId = p.id AND DATE(o1.orderDate) < curdate() AND o1.orderMonth = MONTH(curdate()) AND o1.orderYear = YEAR(curdate()))) as dailyPieceTarget,
    //                     SUM(o.amount) AS todaySale,
    //                 ((mo.amount * p.pieces) / DAY(LAST_DAY(now())) ) - SUM(o.amount) AS remainingSale
    //                 FROM Products AS p
    //                 INNER JOIN Orders AS o ON o.ProductId = p.id
    //                 INNER JOIN MonthlyOrders AS mo ON mo.ProductId = p.id AND mo.UserId = ${userId}
    //                 WHERE DATE(o.orderDate) = curdate() AND o.UserId = ${userId}
    //                 GROUP BY p.id, mo.amount
    //                 `, { type: sequelize.QueryTypes.SELECT})
    //                 .then(function(orders) {
    //                     return res.jsonp(orders);
    //                 });
    // sequelize.query(`SELECT p.id,
    //                 p.name,
    //                 p.nameKh,
    //                 p.unitKh,
    //                 mo.amount as monthlyCaseTarget,
    //                 p.pieces,
    //                 CAST(ROUND(mo.amount/DAY(LAST_DAY(now())), 2) AS decimal(10, 2)) as dailyCaseTarget,
    //                 (((mo.amount * p.pieces)/DAY(LAST_DAY(now()))) * DAY(curdate()) - (SELECT SUM(o1.amount) FROM Orders AS o1 WHERE o1.ProductId = p.id AND DATE(o1.orderDate) < curdate() AND o1.orderMonth = MONTH(curdate()) AND o1.orderYear = YEAR(curdate()))) as dailyPieceTarget,
    //                     CAST(ROUND(SUM(o.amount), 2) AS decimal(10, 2)) AS todaySale,
    //                 CEIL(((mo.amount * p.pieces) / DAY(LAST_DAY(now()))) - SUM(o.amount)) AS remainingSale
    //                 FROM Products AS p
    //                 INNER JOIN Orders AS o ON o.ProductId = p.id
    //                 INNER JOIN MonthlyOrders AS mo ON mo.ProductId = p.id AND mo.UserId = ${userId}
    //                 WHERE DATE(o.orderDate) = curdate()
    //                 GROUP BY p.id, mo.amount
    //                 `, { type: sequelize.QueryTypes.SELECT})
    //                 .then(function(orders) {
    //                     return res.jsonp(orders);
    //                 });
}

/**
 * Create a product
 */
exports.create = function(req, res) {

    // save and return and instance of product on the res object.
    db.Product.create(req.body).then(function(product){

        return res.jsonp(product);

    }).catch(function(err){
        return res.send('users/signup', {
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a product
 */
exports.update = function(req, res) {
    // create a new variable to hold the product that was placed on the req object.
    var product = req.product;

    product.updateAttributes({
        inventoryCode: req.body.inventoryCode,
        name: req.body.name,
        nameKh: req.body.nameKh,
        monthlyCaseTarget: req.body.monthlyCaseTarget,
        pieces: req.body.pieces,
        freeInQty: req.body.freeInQty,
        star: req.body.star,
        price: req.body.price,
        active: req.body.active,
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
 * Delete an product
 */
// exports.destroy = function(req, res) {

//     var product = req.product;

//     product.destroy().then(function(){
//         return res.jsonp(product);
//     }).catch(function(err){
//         return res.render('error', {
//             error: err,
//             status: 500
//         });
//     });
// };

/**
 * Show an product
 */
exports.show = function(req, res) {
    // Sending down the product that was just preloaded by the products.product function
    // and saves product on the req object.
    return res.jsonp(req.product);
};

/**
 * List of Products
 */
exports.all = function(req, res) {
    db.Product.findAll().then(function(products){
        return res.jsonp(products);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

exports.activeProducts = function(req, res){
    db.Product.findAll({
        where: {
            active: true
        }
    }).then(function(products){
        return res.jsonp(products);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
}

/**
 * Product authorizations routing middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.product.User.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};
