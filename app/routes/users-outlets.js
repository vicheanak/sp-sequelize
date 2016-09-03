'use strict';
var cors = require('cors');
/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
userOutlet = require('../../app/controllers/users-outlets');

module.exports = function(app) {
// Article Routes
app.options('/user-outlets', cors());
app.route('/user-outlets')
    .get(userOutlet.all)
    .post(cors(), users.isAdmin, users.requiredAuth, userOutlet.create);
app.options('/user-outlets/:userOutletId', cors());
app.route('/user-outlets/:userOutletId')
    .get(userOutlet.show)
    .put(cors(), users.isAdmin, users.requiredAuth, userOutlet.update)
    .delete(users.isAdmin, users.requiredAuth, userOutlet.destroy);

// Finish with setting up the userOutletId param
// Note: the userOutlet.order function will be called everytime then it will call the next function.
app.param('userOutletId', userOutlet.userOutlet);
};

