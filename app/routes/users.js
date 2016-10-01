'use strict';
var cors = require('cors');

/**
* Module dependencies.
*/
var passport = require('passport');

module.exports = function(app) {
// User Routes
var users = require('../../app/controllers/users');


// Setting up the users api
app.post('/users', users.create);

app.options('/authenticate', cors());
app.post('/authenticate', cors(), users.authenticate);

app.options('/mobile-authenticate', cors());
app.post('/mobile-authenticate', cors(), users.mobileAuthenticate);

app.options('/islogin', cors());
app.post('/islogin', cors(), users.islogin);

app.options('/changePassword', cors());
app.post('/changePassword', cors(), users.requiredAuth, users.changePassword);


app.options('/sps', cors());
app.route('/sps')
    .get(cors(), users.getSps)
    .post(cors(), users.requiredAuth, users.isAdmin, users.createSp)

// Finish with setting up the userId param
app.param('userId', users.user);
};

