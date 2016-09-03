'use strict';

/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
categories = require('../../app/controllers/categories');

module.exports = function(app) {
// Article Routes
app.route('/categories')
    .get(categories.all)
    .post(categories.create);
app.route('/categories/:categoryId')
    .get(categories.show)
    .put(categories.update)
    .delete(categories.destroy);

// Finish with setting up the categoryId param
// Note: the categories.category function will be called everytime then it will call the next function.
app.param('categoryId', categories.category);
};

