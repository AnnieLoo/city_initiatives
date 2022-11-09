const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Initiative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      this.belongsTo(models.Level, {
        foreignKey: 'level_id',
      });
    }
  }
  Initiative.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    level_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    term: DataTypes.STRING,
    vote_for: DataTypes.INTEGER,
    vote_against: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Initiative',
  });
  return Initiative;
};
