'use strict';
var jwt  = require('jwt-simple');
var bcrypt = require('bcrypt');
var uuid = require('uuid');
var secret = require('../config/secret');
/**
 * Module dependencies.
 */
var db = require('../../config/sequelize');

/**
 * Auth callback
 */
exports.authCallback = function(req, res, next) {
    res.redirect('/');
};

/**
 * Show login form
 */
exports.signin = function(req, res) {
    res.render('users/signin', {
        title: 'Signin',
        message: req.flash('error')
    });
};

/**
 * Show sign up form
 */
exports.signup = function(req, res) {
    res.render('users/signup', {
        title: 'Sign up',
    });
};

/**
 * Logout
 */
exports.signout = function(req, res) {
    console.log('Logout: { id: ' + req.user.id + ', username: ' + req.user.username + '}');
    req.logout();
    return res.send({status : 'success', message : 'User logout successfully.'});
};

/**
 * Session
 */
exports.session = function(req, res) {
    return res.send({status : 'success', message : 'User login successfully.'})
   // res.redirect('/');
};

exports.create = function(req, res, next){

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {

        req.body.password = hash;
        var token = jwt.encode(uuid.v4(), secret);
        req.body.token = token;
        db.User.create({
          name: req.body.name,
          username:req.body.username,
          password:req.body.password,
          token: req.body.token,
          role: req.body.role
        }).then(function(user){
          res.jsonp(user);
        });
      });
    });
}

exports.getSps = function(req, res){
    db.User.findAll({
        where: {
            role: 'sp'
        }
    }).then(function(sps){
        return res.jsonp(sps);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
}

exports.getSp = function(req, res, next, id){
    console.log('SP ID======>', id);
    var id = id;
    db.User.find({
        where: {
            id: id
        }
    }).then(function(sp){
        req.sp = sp;
        next();
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
}

exports.updateSp = function(req, res){
    var sp = req.sp;

    sp.updateAttributes({
        name: req.body.name,
        username: req.body.username,
    }).then(function(a){
        return res.jsonp(a);
    }).catch(function(err){
        return res.render('error', {
            error: err,
            status: 500
        });
    });
}

exports.changePassword = function(req, res){
    console.log('oldPassword', req.body.oldPassword);
    console.log('newPassword', req.body.newPassword);

    db.User.findOne({
        where: {
            username: req.get('username')
        }
    }).then(function(user){
        if (user){
            user.verifyPassword(req.body.oldPassword, function(err, isMatch){
                if (isMatch){
                    //update password
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(req.body.newPassword, salt, function (err, hash) {
                            req.body.newPassword = hash;
                            var token = jwt.encode(uuid.v4(), secret);
                            req.body.token = token;
                            user.updateAttributes({
                                password: req.body.newPassword
                            }).then(function(a){
                                return res.jsonp(a);
                            }).catch(function(err){
                                db.User.find({
                                    where: {
                                        id: user.id
                                    }
                                }).then(function(user){
                                    var error = {
                                        error: err,
                                        data: user
                                    }
                                    return res.jsonp(error);
                                });
                            });
                        });
                    });
                }
                else{
                    res.jsonp({success: false, msg: 'Your old password is incorrect'});
                }
            })
        }
        else{
            return res.jsonp({err: 'user not exist'});
        }
    })
}

exports.isAdmin = function(req, res, next){
    var token = req.get('token');
    db.User.findOne({
        where: {
            username: req.get('username'),
            role: 'admin'
        }
    }).then(function(user){
        console.log('IS ADMIN ---> ', user);
        if (user){
            user.verifyToken(token, function(isMatch){
                if (isMatch){
                    next();
                }
                else{
                    res.jsonp({success: false, err: 'Failed Auth'});
                }
            })
        }
        else{
            return res.jsonp({success: false, err: 'User is not admin'});
        }
    })
}

exports.createSp = function(req, res, next){
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.body.password, salt, function (err, hash) {

        req.body.password = hash;
        var token = jwt.encode(uuid.v4(), secret);
        req.body.token = token;
        db.User.create({
          name: req.body.name,
          username:req.body.username,
          password:req.body.password,
          token: req.body.token,
          role: 'sp'
        }).then(function(user){
          res.jsonp(user);
        });
      });
    });
}

exports.requiredAuth = function(req, res, next){
    var token = req.get('token');
    db.User.findOne({
        where: {
            username: req.get('username')
        }
    }).then(function(user){
        if (user){
            user.verifyToken(token, function(isMatch){
                if (isMatch){
                    next();
                }
                else{
                    res.jsonp({success: false, err: 'Failed Auth'});
                }
            })
        }
        else{
            return res.jsonp({err: 'user not exist'});
        }
    })
}

exports.islogin = function(req, res){
    var token = req.get('token');
    db.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(function(user){
        if (user){
            user.verifyToken(token, function(isMatch){
                if (isMatch){
                    res.jsonp(user);
                }
                else{
                    res.jsonp({err: 'Invalid Token'});
                }
            })
        }
        else{
            return res.jsonp({err: 'user not exist'});
        }
    })
}

exports.authenticate = function(req,res){
    db.User.findOne({
        where: {
            username: req.body.username,
            $or: [{role: 'admin'}, {role: 'viewer'}],
            active: true
        }
    }).then(function(user){
        if (user){
            user.verifyPassword(req.body.password, function(err, isMatch){
                if (isMatch){
                    user.updateAttributes({
                        token: jwt.encode(uuid.v4(), secret)
                    }).then(function(a){
                        console.log(a);
                        res.jsonp(user);
                    });
                }
                else{
                    res.jsonp({err: 'wrong password'});
                }
            })
        }
        else{
            return res.jsonp({err: 'user not exist'});
        }
    })
}

exports.mobileAuthenticate = function(req,res){
    db.User.findOne({
        where: {
            username: req.body.username,
            role: 'sp',
            active: true
        }
    }).then(function(user){
        if (user){
            user.verifyPassword(req.body.password, function(err, isMatch){
                if (isMatch){
                    user.updateAttributes({
                        token: jwt.encode(uuid.v4(), secret)
                    }).then(function(a){
                        console.log(a);
                        res.jsonp(user);
                    });
                }
                else{
                    res.jsonp({err: 'wrong password'});
                }
            })
        }
        else{
            return res.jsonp({err: 'User not exist'});
        }
    })
}
/**
 * Send User
 */
exports.me = function(req, res) {
    res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function(req, res, next, id) {
    console.log('CALLED USER ======> ', id);
    db.User.find({where : { id: id }}).then(function(user){
      if (!user) {
          return next(new Error('Failed to load User ' + id));
      }
      req.profile = user;
      next();
    }).catch(function(err){
      next(err);
    });
};

/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).send('User is not authorized');
    }
    next();
};

/**
 * User authorizations routing middleware
 */
exports.hasAuthorization = function(req, res, next) {
    if (req.profile.id !== req.user.id) {
      return res.status(401).send('User is not authorized');
    }
    next();
};
