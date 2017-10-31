'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
	return sequelize.define('rooms', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		location: {
			type: Sequelize.STRING(45),
		},
		format: {
			type: Sequelize.STRING(45),
		},
		language: {
			type: Sequelize.STRING(45),
		},
	}, {
		classMethods: {
			associate: function (models) {
				// associations can be defined here
			}
		}
	});
};
