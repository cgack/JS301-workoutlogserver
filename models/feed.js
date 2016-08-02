module.exports = (sequelize, DataTypes) => {
	return sequelize.define('feed', {
		username: DataTypes.STRING,
		message: DataTypes.STRING
	});
};

// module.exports = function(sequelize, DataTypes) {
// 	var Feed = sequelize.define('feed', {
// 		username: DataTypes.STRING,
// 		message: DataTypes.STRING
// 	});

// 	return Feed;
// };