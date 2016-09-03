'use strict';

module.exports = function(sequelize, DataTypes) {

	var Outlet = sequelize.define('Outlet', {
			outletCode: DataTypes.STRING,
			outletName: DataTypes.STRING,
			outletNameKh: DataTypes.STRING,
			outletSubtype: DataTypes.STRING,
			perfectStoreType: DataTypes.STRING,
			address: DataTypes.STRING,
            active: DataTypes.BOOLEAN
		},
		{
			associate: function(models){
				Outlet.belongsToMany(models.Product, {through: models.Order});
				Outlet.belongsToMany(models.User, {through: models.UserOutlet});
				Outlet.belongsTo(models.Distributor);
			}
		}
	);

	return Outlet;
};
