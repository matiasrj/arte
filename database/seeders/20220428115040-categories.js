'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('category', [{
      name: 'Acrilicos',
      createdAt: '2022-03-10 15:27:41.754 -0300',
      updatedAt: '2022-03-10 15:27:41.754 -0300'
    },
    {
      name: 'Oleos',
      createdAt: '2022-03-10 15:27:41.754 -0300',
      updatedAt: '2022-03-10 15:27:41.754 -0300'
    }]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('category', null, {});
  }
};
