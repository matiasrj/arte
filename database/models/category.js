
'use strict';
const UserModel = require('User')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends UserModel {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product, {
        foreignKey: 'idCategory',
        as: 'Product'
      })

    }
  };
  Category.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: true,
    

  });
  return Category;
};