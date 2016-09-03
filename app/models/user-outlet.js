'use strict';

module.exports = function(sequelize, DataTypes) {

	var UserOutlet = sequelize.define('UserOutlet', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			}
		},
		{
			associate: function(models){
				UserOutlet.belongsTo(models.User);
				UserOutlet.belongsTo(models.Outlet);
			}
		}
	);

	return UserOutlet;
};
