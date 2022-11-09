const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FederalDist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Region, {
        foreignKey: 'federalDist_id',
      });
      this.hasMany(models.User, {
        foreignKey: 'federalDist_id',
      });
    }
  }
  FederalDist.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'federal_dist',
  });
  return FederalDist;
};
