'use strict';

/**
 * Module dependencies.
 */
var StandardError = require('standard-error');
var moment = require('moment');
var db = require('../../config/sequelize');
var moment = require('moment');
var Sequelize = require('sequelize');
var config = require('../config/config.json');
var sequelize = new Sequelize(config.development.database, config.development.username, config.development.password);
/**
 * Find outlet by id
 * Note: This is called every time that the parameter :outletId is used in a URL.
 * Its purpose is to preload the outlet on the req object then call the next function.
 */
exports.outlet = function(req, res, next, id) {
    db.Outlet.find({where: {id: id}, include: [{model:db.Distributor, attributes:['id', 'dtCode', 'dtName', 'dtNameKh']}]}).then(function(outlet){
        if(!outlet) {
            return next(new Error('Failed to load outlet ' + id));
        } else {
            req.outlet = outlet;
            return next();
        }
    }).catch(function(err){
        return next(err);
    });
};

/**
 * Create a outlet
 */
exports.create = function(req, res) {

    // save and return and instance of outlet on the res object.
    db.Outlet.create(req.body).then(function(outlet){

        return res.jsonp(outlet);

    }).catch(function(err){
        return res.send('users/signup', {
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a outlet
 */
exports.update = function(req, res) {

    // create a new variable to hold the outlet that was placed on the req object.
    var outlet = req.outlet;

    outlet.updateAttributes({
        outletCode: req.body.outletCode,
        outletName: req.body.outletName,
        outletNameKh: req.body.outletNameKh,
        outletSubtype: req.body.outletSubtype,
        perfectStoreType: req.body.perfectStoreType,
        address: req.body.address,
        active: req.body.active,
        DistributorId: req.body.DistributorId
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
 * Delete an outlet
 */
// exports.destroy = function(req, res) {

//     // create a new variable to hold the outlet that was placed on the req object.
//     var outlet = req.outlet;

//     outlet.destroy().then(function(){
//         return res.jsonp(outlet);
//     }).catch(function(err){
//         return res.render('error', {
//             error: err,
//             status: 500
//         });
//     });
// };

/**
 * Show an outlet
 */
exports.show = function(req, res) {
    // Sending down the outlet that was just preloaded by the outlets.outlet function
    // and saves outlet on the req object.
    return res.jsonp(req.outlet);
};

/**
 * List of Outlets
 */
exports.all = function(req, res) {
    db.Outlet.findAll({include: [
        {model:db.Distributor, attributes: ['id', 'dtCode', 'dtName', 'dtNameKh']}
        ]}).then(function(outlets){
        return res.jsonp(outlets);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};


exports.activeOutlets = function(req, res) {
    db.Outlet.findAll({
        where: {
            active: true
        },
        include: [
            {model:db.Distributor, attributes: ['id', 'dtCode', 'dtName', 'dtNameKh']}
        ]
    }).then(function(outlets){
        return res.jsonp(outlets);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};
/**
 * Today outlets
 */

exports.todayOutlets = function(req, res){
    var userId = req.params.userId;
    var today = moment().format("YYYY-MM-DD");
    sequelize.query(`SELECT DISTINCT outlet.id, outlet.outletName, outlet.outletNameKh, ord.orderDate, CURDATE() as currentDate
                        FROM Outlets AS outlet
                            INNER JOIN Orders AS ord
                            ON ord.OutletId = outlet.id
                        WHERE DATE(ord.orderDate) = '${today}'
                            AND ord.UserId = ${userId}
                        ORDER BY ord.orderDate DESC
                    `, { type: sequelize.QueryTypes.SELECT})
        .then(function(orders) {
            console.log('todayOutlets ===> ', orders);
        return res.jsonp(orders);
    });
};


exports.countThisMonthOutlets = function(req, res){
    var userId = req.params.userId;
    var month = moment().month() + 1;
    var year = moment().year();
    sequelize.query(`SELECT DISTINCT outlet.id, ord.orderDate
                    FROM Outlets AS outlet
                    INNER JOIN Orders AS ord
                    ON ord.OutletId = outlet.id
                    WHERE ord.UserId = ${userId} 
                    AND ord.orderMonth = ${month}
                    AND ord.orderYear = ${year}
                    `, { type: sequelize.QueryTypes.SELECT})
            .then(function(outlets) {
                return res.jsonp(outlets);
            });
}

exports.todayOutletsByOutlet = function(req, res){
    var userId = req.params.userId;
    var outletId = req.params.outletId;
    var orderDate = req.params.orderDate;
    sequelize.query(`SELECT ord.id, ord.amount, ord.orderDate, ord.ProductId
                    FROM Outlets AS outlet
                    INNER JOIN Orders AS ord
                    ON ord.OutletId = outlet.id
                    WHERE ord.orderDate = '${orderDate}'
                    AND ord.UserId = ${userId}
                    AND ord.OutletId = ${outletId}
                    `, { type: sequelize.QueryTypes.SELECT})
                    .then(function(orders) {
                        return res.jsonp(orders);
                    });
}

/**
 * Outlet authorizations routing middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.outlet.User.id !== req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
};
