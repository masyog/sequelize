'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [{
      name: 'ari supriatna',
      email: 'arisupriatna703@gmail.com',
      phone: '085777282844',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ridho septian ramadhan',
      email: 'ridhoseptian@gmail.com',
      phone: '085777272755',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tiara Indriyanti',
      email: 'tiaraindriyanti@gmail.com',
      phone: '085777212177',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contact', null, {})
  }
};