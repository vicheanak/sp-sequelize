'use strict';
var moment = require('moment');
module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
      var data = [
          {id: 1, name: 'Viso', createdAt: now, updatedAt: now},
          {id: 2, name: 'Knorr', createdAt: now, updatedAt: now},
          {id: 3, name: 'Clear Men Blue', createdAt: now, updatedAt: now},
          {id: 4, name: 'Sunlight', createdAt: now, updatedAt: now},
          {id: 5, name: 'Comfort', createdAt: now, updatedAt: now},
          {id: 6, name: 'Signal', createdAt: now, updatedAt: now},
          {id: 7, name: 'Sunsilk', createdAt: now, updatedAt: now}
      ];

      // return queryInterface.bulkInsert('Categories', data);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
