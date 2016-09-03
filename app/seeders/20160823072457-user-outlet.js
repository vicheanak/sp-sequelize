var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      var now = moment().format("YYYY-MM-DD HH:mm:ss");
      return queryInterface.bulkInsert('UserOutlets', [
          {
              UserId: 2,
              OutletId: 1,
              createdAt: now,
              updatedAt: now
          },
          {
              UserId: 2,
              OutletId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              UserId: 2,
              OutletId: 3,
              createdAt: now,
              updatedAt: now
          },
          {
              UserId: 3,
              OutletId: 4,
              createdAt: now,
              updatedAt: now
          },
          {
              UserId: 3,
              OutletId: 5,
              createdAt: now,
              updatedAt: now
          },
          {
              UserId: 3,
              OutletId: 6,
              createdAt: now,
              updatedAt: now
          }
      ])
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
