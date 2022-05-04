'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Artist', {
      id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique: true,
        references:{
          model: 'User',
          key: "id"
        },
        onDelete: 'CASCADE',
        onUpdate: "CASCADE"
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Artist');
  }
};