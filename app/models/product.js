'use strict';

module.exports = function(sequelize, DataTypes) {

	var Product = sequelize.define('Product', {
			inventoryCode: DataTypes.STRING,
			name: DataTypes.STRING,
			nameKh: DataTypes.STRING,
			unitKh: DataTypes.STRING,
			freeInQty: DataTypes.INTEGER,
			pieces: DataTypes.INTEGER,
			star: DataTypes.BOOLEAN,
			price: DataTypes.FLOAT,
			active: DataTypes.BOOLEAN
		},
		{
			associate: function(models){
                Product.belongsToMany(models.User, {through: models.MonthlyOrder});
				Product.belongsToMany(models.Outlet, {through: models.Order});
				Product.belongsTo(models.Category);
			}
		}
	);

	return Product;
};
