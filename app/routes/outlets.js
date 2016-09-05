'use strict';
var cors = require('cors');

/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
outlets = require('../../app/controllers/outlets');

module.exports = function(app) {
// Article Routes
app.options('/activeOutlets', cors());
app.route('/activeOutlets')
    .get(cors(), outlets.activeOutlets);
app.options('/outlets', cors());
app.route('/outlets')
    .get(cors(), outlets.all)
    .post(cors(), users.isAdmin, users.requiredAuth, outlets.create);
app.options('/outlets/:outletId', cors());
app.route('/outlets/:outletId')
    .get(cors(), outlets.show)
    .put(cors(), users.isAdmin, users.requiredAuth, outlets.update);
    // .delete(cors(), users.isAdmin, users.requiredAuth, outlets.destroy);
app.options('/todayOutlets/users/:userId', cors());
app.route('/todayOutlets/users/:userId')
	.get(cors(), users.requiredAuth, outlets.todayOutlets);
app.options('/todayOutlets/users/:userId/outlets/:outletId/orderDate/:orderDate', cors());
app.route('/todayOutlets/users/:userId/outlets/:outletId/orderDate/:orderDate')
	.get(cors(), outlets.todayOutletsByOutlet);


// Finish with setting up the outletId param
// Note: the outlets.outlet function will be called everytime then it will call the next function.
app.param('outletId', outlets.outlet);
};

