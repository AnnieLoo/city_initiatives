const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.FederalDist, {
        foreignKey: 'federalDist_id',
      });
      this.hasMany(models.Municipal, {
        foreignKey: 'region_id',
      });
      this.hasMany(models.User, {
        foreignKey: 'region_id',
      });
    }
  }
  Region.init({
    name: DataTypes.STRING,
    federalDist_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'region',
  });
  return Region;
};
