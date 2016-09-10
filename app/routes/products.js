'use strict';
var cors = require('cors');

/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
products = require('../../app/controllers/products');
users = require('../../app/controllers/users');

module.exports = function(app) {
app.options('/activeProducts', cors());
app.route('/activeProducts')
    .get(cors(), products.activeProducts);
app.options('/products', cors());
app.route('/products')
    .get(cors(), products.all)
    .post(cors(), users.isAdmin, users.requiredAuth, products.create);
app.options('/products/:productId', cors());
app.route('/products/:productId')
    .get(cors(), products.show)
    .put(cors(), users.isAdmin, users.requiredAuth, products.update);
    // .delete(cors(), users.isAdmin, users.requiredAuth, products.destroy);
app.options('/thisMonthOrders/:userId', cors());
app.route('/thisMonthOrders/:userId')
	.get(cors(), users.requiredAuth, products.thisMonthOrders);
app.options('/todayOrders/:userId', cors());
app.route('/todayOrders/:userId')
	.get(cors(), users.requiredAuth, products.todayOrders);

// Finish with setting up the productId param
// Note: the products.product function will be called everytime then it will call the next function.
app.param('productId', products.product);
};

