const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Initiative, {
        foreignKey: 'user_id',
      });
      this.belongsTo(models.FederalDist, {
        foreignKey: 'federalDist_id',
      });
      this.belongsTo(models.Region, {
        foreignKey: 'region_id',
      });
      this.belongsTo(models.Municipal, {
        foreignKey: 'municipal_id',
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    federalDist_id: DataTypes.INTEGER,
    region_id: DataTypes.INTEGER,
    municipal_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
