/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'FederalDists',
      [
        {
          name: 'Центральный федеральный округ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Северо-Западный федеральный округ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Приволжский федеральный округ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Уральский федеральный округ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Северо-Кавказский федеральный округ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Южный федеральный округ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Сибирский федеральный округ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Дальневосточный федеральный округ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FederalDists', null, {});
  },
};
