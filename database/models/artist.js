'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.User, {foreignKey: 'id'});

      this.hasMany(models.Product, {
        foreignKey: 'idArtist',
        as: 'Product'
      })

    }
  }
  Artist.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'artist',
  });
  return Artist;
};