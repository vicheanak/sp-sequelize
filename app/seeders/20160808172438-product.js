var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");

    var data = [
    {id:  1 ,inventoryCode:   '21085246'  ,name:  'Signal 123 160g' ,nameKh:  'ថ្នាំដុសធ្មេញ សីុកណល 160g' ,unitKh:  'ដុំ' ,pieces:  72  ,freeInQty: 3, star: false, price:  66.03,  active: true, createdAt: now, updatedAt: now},
    {id:  2 ,inventoryCode:   '21041697'  ,name:  'Singal Cavity 75g' ,nameKh:  'ថ្នាំដុសធ្មេញសីុកណល ខាវីធី 75g'  ,unitKh:  'ដុំ' ,pieces:  73  ,freeInQty: 3, star: false, price:  29.39,  active: true, createdAt: now, updatedAt: now},
    {id:  3 ,inventoryCode:   '21041698'  ,name:  'Singal Cavity 160g'  ,nameKh:  'ថ្នាំដុសធ្មេញសីុកណល ខាវីធី 160g' ,unitKh:  'ដុំ' ,pieces:  74  ,freeInQty: 3, star: false, price:  51.37,  active: true, createdAt: now, updatedAt: now},
    {id:  4 ,inventoryCode:   '21015631'  ,name:  'Sunlight 400ml'  ,nameKh:  'ទឹកលាងចានសាន់ឡៃ 400ml' ,unitKh:  'ដប'  ,pieces:  75  ,freeInQty: 3, star: false, price:  13.66,  active: true, createdAt: now, updatedAt: now},
    {id:  5 ,inventoryCode:   '67103127'  ,name:  'Viso Pises 130g' ,nameKh:  'សាប៊ូវីសូពិសេស 130g' ,unitKh:  'កញ្ចប់'  ,pieces:  76  ,freeInQty: 3, star: false, price:  14.45,  active: true, createdAt: now, updatedAt: now},
    {id:  6 ,inventoryCode:   '67103137'  ,name:  'Viso Pises 120g' ,nameKh:  'សាប៊ូវីសូពិសេស 120g' ,unitKh:  'កញ្ចប់'  ,pieces:  77  ,freeInQty: 3, star: false, price:  14.45,  active: true, createdAt: now, updatedAt: now},
    {id:  7 ,inventoryCode:   '67049878'  ,name:  'SSK SH 6ml'  ,nameKh:  'សាប៊ូកក់សក់សាន់ស៊ីល 6ml' ,unitKh:  'កញ្ចប់'  ,pieces:  78  ,freeInQty: 3, star: false, price:  34.61,  active: true, createdAt: now, updatedAt: now},
    {id:  8 ,inventoryCode:   '21147013'  ,name:  'Clear Men 5ml' ,nameKh:  'ក្លៀរបុរស' ,unitKh:  'កញ្ចប់'  ,pieces:  79  ,freeInQty: 3, star: false, price:  27.26,  active: true, createdAt: now, updatedAt: now},
    {id:  9 ,inventoryCode:   '67051904'  ,name:  'Comfort Ultra 20ml'  ,nameKh:  'ទឹកក្រអូបខមហ្វតអ៊ុលត្រា 20ml'  ,unitKh:  'ខ្សែ'  ,pieces:  80  ,freeInQty: 3, star: false, price:  18.4, active: true, createdAt: now, updatedAt: now},
    {id:  10  ,inventoryCode:   '67071436'  ,name:  'Knorr Powder 17g ' ,nameKh:  'ម្សៀស៊ុបខ្នរ 17g'  ,unitKh:  'កញ្ចប់'  ,pieces:  81  ,freeInQty: 3, star: true, price:  39.75,  active: true, createdAt: now, updatedAt: now},
    ];
    return queryInterface.bulkInsert('Products', data);
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
