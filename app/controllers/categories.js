'use strict';
var moment = require('moment');
/**
 * Module dependencies.
 */
var StandardError = require('standard-error');
var db = require('../../config/sequelize');

/**
 * Find category by id
 * Note: This is called every time that the parameter :categoryId is used in a URL.
 * Its purpose is to preload the category on the req object then call the next function.
 */
exports.category = function(req, res, next, id) {
    console.log('id ======> ' + id);
    console.log(moment().format('dddd'));
    db.Category.find().then(function(category){
        if(!category) {
            return next(new Error('Failed to load category ' + id));
        } else {
            req.category = category;
            return next();
        }
    }).catch(function(err){
        return next(err);
    });
};

/**
 * Create a category
 */
exports.create = function(req, res) {
    // save and return and instance of category on the res object.
    db.Category.create(req.body).then(function(category){
        return res.jsonp(category);
    }).catch(function(err){
        return res.send('users/signup', {
            errors: err,
            status: 500
        });
    });
};

/**
 * Update a category
 */
exports.update = function(req, res) {

    // create a new variable to hold the category that was placed on the req object.
    var category = req.category;

    category.updateAttributes({
        name: req.body.name
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
 * Delete an category
 */
exports.destroy = function(req, res) {

    // create a new variable to hold the category that was placed on the req object.
    var category = req.category;

    category.destroy().then(function(){
        return res.jsonp(category);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Show an category
 */
exports.show = function(req, res) {
    // Sending down the category that was just preloaded by the categories.category function
    // and saves category on the req object.
    return res.jsonp(req.category);
};

/**
 * List of Categorys
 */
exports.all = function(req, res) {
    db.Category.findAll().then(function(categories){
        return res.jsonp(categories);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
};

/**
 * Category authorizations routing middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.category.User.id !== req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
};
