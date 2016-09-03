'use strict';
var bcrypt = require('bcrypt');
/**
	* User Model
	*/

var crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {

	var User = sequelize.define('User',
		{
			name: DataTypes.STRING,
            username: {
                type: DataTypes.STRING,
                unique: true
            },
			password: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
			role: DataTypes.STRING,
			token: DataTypes.STRING
		},
		{
			instanceMethods: {
				toJSON: function () {
					var values = this.get();
					delete values.password;
					delete values.salt;
					return values;
				},
				makeSalt: function() {
					return crypto.randomBytes(16).toString('base64');
				},
				authenticate: function(plainText){
					return this.encryptPassword(plainText, this.salt) === this.password;
				},
				encryptPassword: function(password, salt) {
					if (!password || !salt) {
                        return '';
                    }
					salt = new Buffer(salt, 'base64');
					return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
				},
				verifyPassword: function(pwd, cb){
					bcrypt.compare(pwd, this.password, function (err, isMatch) {
						return cb(err, isMatch);
					});
				},
                verifyToken: function(token, cb){
                    if (token == this.token){
                         return cb(true);
                    }
                    return cb(false);
                }
			},
			associate: function(models) {
				User.hasMany(models.Article);
				User.hasMany(models.Order);
				User.belongsToMany(models.Product, {through: models.MonthlyOrder});
				User.belongsToMany(models.Outlet, {through: models.UserOutlet});
			}
		}
	);

	return User;
};
