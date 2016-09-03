'use strict';
var cors = require('cors');

/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
distributors = require('../../app/controllers/distributors');

module.exports = function(app) {
app.options('/activeDistributors', cors());
app.route('/activeDistributors')
    .get(cors(), distributors.activeDistributors);
app.options('/distributors', cors());
app.route('/distributors')
    .get(cors(), distributors.all)
    .post(cors(), users.isAdmin, users.requiredAuth, distributors.create);
app.options('/distributors/:distributorId', cors());
app.route('/distributors/:distributorId')
    .get(cors(), distributors.show)
    .put(cors(), users.isAdmin, users.requiredAuth, distributors.update);
    // .delete(cors(), users.isAdmin, users.requiredAuth, distributors.destroy);

// Finish with setting up the distributorId param
// Note: the distributors.distributor function will be called everytime then it will call the next function.
app.param('distributorId', distributors.distributor);
};

