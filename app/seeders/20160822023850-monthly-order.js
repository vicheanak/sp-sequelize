var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      var now = moment().format("YYYY-MM-DD HH:mm:ss");
      return queryInterface.bulkInsert('MonthlyOrders', [
          {
              amount: 30,
              productId: 1,
              userId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 30,
              productId: 2,
              userId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 30,
              productId: 3,
              userId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 30,
              productId: 4,
              userId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 30,
              productId: 5,
              userId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 30,
              productId: 6,
              userId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 30,
              productId: 7,
              userId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 30,
              productId: 8,
              userId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 30,
              productId: 9,
              userId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 30,
              productId: 10,
              userId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 30,
              productId: 11,
              userId: 2,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 30,
              productId: 1,
              userId: 3,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 6,
              productId: 2,
              userId: 3,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 12,
              productId: 3,
              userId: 3,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 17,
              productId: 4,
              userId: 3,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 12,
              productId: 5,
              userId: 3,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 4,
              productId: 6,
              userId: 3,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 4,
              productId: 7,
              userId: 3,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 1,
              productId: 8,
              userId: 3,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 0.5,
              productId: 9,
              userId: 3,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 1,
              productId: 10,
              userId: 3,
              createdAt: now,
              updatedAt: now
          },
          {
              amount: 20,
              productId: 11,
              userId: 3,
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
