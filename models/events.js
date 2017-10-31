'use strict';

const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    institution: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    status: {
      allowNull: false,
      type: Sequelize.STRING,
      defaultValue: 'OPEN',
    },
    date: {
      type: Sequelize.DATE
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  });
};
