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
     return queryInterface.bulkInsert('user', [{
      firstName: 'Pia',
      lastName: 'J',
      email: 'matiasrj_89@hotmail.com',
      admin: true,
      password: '',
      avatar: '',
      fechaNac: '12-10-01',
      createdAt: '2022-03-10 15:27:41.754 -0300',
      updatedAt: '2022-03-10 15:27:41.754 -0300'
    },
    {      
      firstName: 'Patricia',
      lastName: 'J',
      email: 'matiasrj_89@hotmail.com',
      admin: true,
      password: '',
      avatar: '',
      fechaNac: '12-10-70',
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
    return queryInterface.bulkDelete('user', null, {});

  }
};
