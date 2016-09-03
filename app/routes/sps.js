'use strict';
var cors = require('cors');

/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
sps = require('../../app/controllers/sps');

module.exports = function(app) {
// Article Routes
app.options('/sps', cors());
app.route('/sps')
    .get(cors(), sps.all)
    .post(cors(), users.isAdmin, users.requiredAuth, sps.create);
app.options('/sps/:spId', cors());
app.route('/sps/:spId')
    .get(cors(), sps.show)
    .put(cors(), users.isAdmin, users.requiredAuth, sps.update);
    // .delete(cors(), users.isAdmin, users.requiredAuth, sps.destroy);

// Finish with setting up the spId param
// Note: the sps.sp function will be called everytime then it will call the next function.
app.param('spId', sps.sp);
};

