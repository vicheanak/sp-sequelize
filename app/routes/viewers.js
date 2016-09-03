'use strict';
var cors = require('cors');

/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
viewers = require('../../app/controllers/viewers');

module.exports = function(app) {
// Article Routes
app.options('/viewers', cors());
app.route('/viewers')
    .get(cors(), viewers.all)
    .post(cors(), users.isAdmin, users.requiredAuth, viewers.create);
app.options('/viewers/:viewerId', cors());
app.route('/viewers/:viewerId')
    .get(cors(), viewers.show)
    .put(cors(), users.isAdmin, users.requiredAuth, viewers.update);
    // .delete(cors(), users.isAdmin, users.requiredAuth, viewers.destroy);

// Finish with setting up the viewerId param
// Note: the viewers.viewer function will be called everytime then it will call the next function.
app.param('viewerId', viewers.viewer);
};

