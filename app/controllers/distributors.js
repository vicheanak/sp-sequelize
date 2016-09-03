'use strict';

/**
 * Module dependencies.
 */
var StandardError = require('standard-error');
var db = require('../../config/sequelize');

/**
 * Find distributor by id
 * Note: This is called every time that the parameter :distributorId is used in a URL.
 * Its purpose is to preload the distributor on the req object then call the next function.
 */
exports.distributor = function(req, res, next, id) {
    console.log('id => ' + id);
    db.Distributor.find({where: {id: id}}).then(function(distributor){
        if(!distributor) {
            return next(new Error('Failed to load distributor ' + id));
        } else {
            req.distributor = distributor;
            return next();
        }
    }).catch(function(err){
        return next(err);
    });
};

/**
 * Create a distributor
 */
exports.create = function(req, res) {

    // save and return and instance of distributor on the res object.
    db.Distributor.create(req.body).then(function(distributor){

        return res.jsonp(distributor);

    }).catch(function(err){
        return res.send('users/signup', {
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a distributor
 */
exports.update = function(req, res) {

    // create a new variable to hold the distributor that was placed on the req object.
    var distributor = req.distributor;

    distributor.updateAttributes({
        dtCode: req.body.dtCode,
        dtName: req.body.dtName,
        dtNameKh: req.body.dtNameKh,
        active: req.body.active
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
 * Delete an distributor
 */
// exports.destroy = function(req, res) {

//     // create a new variable to hold the distributor that was placed on the req object.
//     var distributor = req.distributor;

//     distributor.destroy().then(function(){
//         return res.jsonp(distributor);
//     }).catch(function(err){
//         return res.render('error', {
//             error: err,
//             status: 500
//         });
//     });
// };

/**
 * Show an distributor
 */
exports.show = function(req, res) {
    // Sending down the distributor that was just preloaded by the distributors.distributor function
    // and saves distributor on the req object.
    return res.jsonp(req.distributor);
};

/**
 * List of Distributors
 */
exports.all = function(req, res) {
    db.Distributor.findAll().then(function(distributors){
        return res.jsonp(distributors);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

exports.activeDistributors = function(req, res) {
    db.Distributor.findAll({
        where: {
            active: true
        }
    }).then(function(distributors){
        return res.jsonp(distributors);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Distributor authorizations routing middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.distributor.User.id !== req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
};
