'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {foreignKey: 'idCategory'});
      this.belongsTo(models.Artist, {foreignKey: 'idArtist'});


      this.hasMany(models.Order_detail, {
        foreignKey: 'idProduct',
        as: 'Order_detail'
      })

    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    enabled: DataTypes.BOOLEAN,
    width: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    warranty: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    createdAt: {

      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {

      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};