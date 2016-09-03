'use strict';
var cors = require('cors');
/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
monthlyOrder = require('../../app/controllers/monthly-order');

module.exports = function(app) {
// Article Routes
app.options('/monthly-orders', cors());
app.route('/monthly-orders')
    .get(cors(), monthlyOrder.all)
    .post(cors(), users.requiredAuth, monthlyOrder.create);
app.options('/monthly-orders/:monthlyOrderId', cors());
app.route('/monthly-orders/:monthlyOrderId')
    .get(cors(), monthlyOrder.show)
    .put(cors(), users.requiredAuth, monthlyOrder.update)
    .delete(cors(), users.requiredAuth, monthlyOrder.destroy);

// Finish with setting up the monthlyOrderId param
// Note: the monthlyOrder.order function will be called everytime then it will call the next function.
app.param('monthlyOrderId', monthlyOrder.monthlyOrder);
};

