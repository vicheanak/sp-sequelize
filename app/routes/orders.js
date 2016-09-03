'use strict';
var cors = require('cors');
/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
orders = require('../../app/controllers/orders');

module.exports = function(app) {
// Article Routes
app.options('/orders', cors());
app.route('/orders')
    .get(cors(), orders.all)
    .post(cors(), users.requiredAuth, orders.create);
app.options('/orders/:orderId', cors());
app.route('/orders/:orderId')
    .get(cors(), orders.show)
    .put(cors(), users.requiredAuth, orders.update)
    .delete(orders.destroy);
app.options('/reports', cors());
app.route('/reports')
    .post(users.requiredAuth, orders.reports)
app.options('/export', cors());
app.route('/export')
    .post(users.requiredAuth, orders.export)

// Finish with setting up the orderId param
// Note: the orders.order function will be called everytime then it will call the next function.
app.param('orderId', orders.order);
};

