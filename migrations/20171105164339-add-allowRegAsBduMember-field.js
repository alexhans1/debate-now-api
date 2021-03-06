'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn(
      'events',
      'allowRegFromMembersArea',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      }
    );
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.sequelize.query("ALTER TABLE events DROP COLUMN allowRegFromMembersArea;");
  }
};
