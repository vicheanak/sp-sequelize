'use strict';
var moment = require('moment');

module.exports = {
  up: function (queryInterface, Sequelize) {
   var data = [];

   var products = [17, 150, 150, 5, 20, 25, 25, 1, 1, 1, 400];
   
   var outlets = [1,2];

   for (var i = 0; i < products.length; i ++){
       for (var k = 0; k < 62; k ++){
           var date = moment().subtract(k, 'days').format("YYYY-MM-DD HH:mm:ss");
           var day = moment().subtract(k, 'days').format("DD");
           var month = moment().subtract(k, 'days').format("MM");
           var year = moment().subtract(k, 'days').format("YYYY");
           data.push({amount: products[i], OutletId:1 , ProductId: i + 1, UserId: 2, orderDate: date, orderDay: day, orderMonth: month, orderYear: year, createdAt: date, updatedAt: date});
       }
   }
   
   // for (var i = 0; i < products.length; i ++){
   //     for (var j = 0; j < outlets.length; j ++){
   //         for (var k = 0; k < 31; k ++){
   //             var date = moment().subtract(k, 'days').format("YYYY-MM-DD HH:mm:ss");
   //             var day = moment().subtract(k, 'days').format("DD");
   //             var month = moment().subtract(k, 'days').format("MM");
   //             var year = moment().subtract(k, 'days').format("YYYY");
   //             data.push({amount: products[i], OutletId:outlets[j] , ProductId: i + 1, UserId: 2, orderDate: date, orderDay: day, orderMonth: month, orderYear: year, createdAt: date, updatedAt: date});
   //         }
   //     }
   // }

  return queryInterface.bulkInsert('Orders', data);
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
