'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Municipal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Region, {
        foreignKey: 'region_id',
      });
      this.hasMany(models.User, {
        foreignKey: 'municipal_id',
      });
    }
  }
  Municipal.init({
    name: DataTypes.STRING,
    region_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Municipal',
  });
  return Municipal;
};