'use strict';

module.exports = function(sequelize, DataTypes) {

	var Category = sequelize.define('Category', {
			name: DataTypes.STRING
		},
		{
			associate: function(models){
				Category.hasMany(models.Article);
			}
		}
	);

	return Category;
};
