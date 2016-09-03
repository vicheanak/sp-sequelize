'use strict';

module.exports = function(sequelize, DataTypes) {

	var Article = sequelize.define('Article', {
			title: DataTypes.STRING,
			content: DataTypes.TEXT
		},
		{
			associate: function(models){
				Article.belongsTo(models.User);
				Article.belongsTo(models.Category);
			}
		}
	);

	return Article;
};
