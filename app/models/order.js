'use strict';

module.exports = function(sequelize, DataTypes) {
    /**
    Remove orderDate constraint
    orderDate: {
        type: DataTypes.DATE,
    -   unique: 'Orders_ProductId_OutletId_unique'
    },
    **/

	var Order = sequelize.define('Order', {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			amount: {
				type: DataTypes.INTEGER
			},
			orderDate: {
                type: DataTypes.DATE
            },
            orderDay: {
                type: DataTypes.INTEGER
            },
            orderMonth: {
                type: DataTypes.INTEGER
            },
            orderYear: {
                type: DataTypes.INTEGER
            }
		},
		{
			associate: function(models){
				Order.belongsTo(models.Outlet);
				Order.belongsTo(models.Product);
				Order.belongsTo(models.User);
			}
		}
	);

	return Order;
};
