'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.STRING(45),
    },
    format: {
      type: Sequelize.STRING(45),
    },
    language: {
      type: Sequelize.STRING(45),
    },
    teamPartner: {
      type: Sequelize.STRING,
    },
    position: {
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
