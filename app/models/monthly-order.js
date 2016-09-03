'use strict';

module.exports = function(sequelize, DataTypes) {

	var MonthlyOrder = sequelize.define('MonthlyOrder', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			amount: {
				type: DataTypes.FLOAT
			}
		},
		{
			associate: function(models){
				MonthlyOrder.belongsTo(models.Product);
				MonthlyOrder.belongsTo(models.User);
			}
		}
	);

	return MonthlyOrder;
};
