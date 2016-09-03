'use strict';
var cors = require('cors');
/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
monthlyOrder = require('../../app/controllers/monthly-order');

module.exports = function(app) {
// Article Routes
app.options('/monthly-orders-users/:userId', cors());
app.route('/monthly-orders-users/:userId')
.get(cors(), monthlyOrder.byUser);


};

