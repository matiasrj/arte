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
     return queryInterface.bulkInsert('Artist', [{
      id: 1,
      description: 'Nieta',
      createdAt: '2022-03-10 15:27:41.754 -0300',
      updatedAt: '2022-03-10 15:27:41.754 -0300'
    },
    {      
      id: 2,
      description: 'Abuela',
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
    
     return queryInterface.bulkDelete('Artist', null, {});
  }
};
