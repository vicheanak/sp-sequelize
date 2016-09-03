'use strict';

module.exports = function(sequelize, DataTypes) {

	var Distributor = sequelize.define('Distributor', {
			dtCode: DataTypes.STRING,
			dtName: DataTypes.STRING,
			dtNameKh: DataTypes.STRING,
            active: DataTypes.BOOLEAN
		},
		{
			associate: function(models){
				Distributor.hasMany(models.Outlet);
			}
		}
	);

	return Distributor;
};
