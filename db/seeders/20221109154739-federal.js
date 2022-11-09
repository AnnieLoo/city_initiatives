/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('FederalDists', [
      {
        name: 'Центральный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Северо-Западный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Южный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Северо-Кавказский',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Приволжский',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('FederalDists', null, {});
     */
    await queryInterface.bulkDelete('FederalDists', null, {});
  },
};
