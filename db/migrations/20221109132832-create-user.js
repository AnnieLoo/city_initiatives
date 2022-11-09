/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      federalDist_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'FederalDists',
          },
          key: 'id',
        },
      },
      region_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Regions',
          },
          key: 'id',
        },
      },
      municipal_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Municipals',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
