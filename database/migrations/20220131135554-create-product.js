'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      discount: {
        type: Sequelize.FLOAT
      },
      enabled: {
        type: Sequelize.BOOLEAN
      },
      size: {
        type: Sequelize.FLOAT
      },
      weight: {
        type: Sequelize.FLOAT
      },
      warranty: {
        type: Sequelize.INTEGER
      },
      avatar: {
        type: Sequelize.STRING
      },
      idCategory: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'category',
          key: "id"
        },
        onDelete: 'CASCADE',
        onUpdate: "CASCADE"
      },
      idArtist: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'artist',
          key: "id"
        },
        onDelete: 'CASCADE',
        onUpdate: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};