'use strict';
var cors = require('cors');
/**
* Module dependencies.
*/
var users = require('../../app/controllers/users'),
userOutlet = require('../../app/controllers/users-outlets');

module.exports = function(app) {
app.options('/user-outlets-users/:userId', cors());
app.route('/user-outlets-users/:userId')
    .get(cors(), userOutlet.byUser)

};

