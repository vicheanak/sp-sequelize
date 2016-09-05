var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
    {
      id: 1,
      inventoryCode: '67055155',
      name: 'VISO Pises Anti Bac 120g',
      nameKh: 'ម្សៅសាប៊ូវិសូពិសេសកម្មចាត់បាក់តេរី',
      unitKh: 'ដុំ',
      // pieces: 72,
      pieces: 30,
      freeInQty: 3,
      star: false,
      price: 2.5,
      active: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 2,
      inventoryCode: '21135129',
      name: 'Knorr Chicken Powder 17g',
      nameKh: 'ម្សៀស៊ុបខ្នរ',
      unitKh: 'ដុំ',
      pieces: 30,
      freeInQty: 3,
      star: false,
      price: 1.5,
      active: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 3,
      inventoryCode: '67049763',
      name: 'Clear Men Blue 5ml',
      nameKh: 'ក្លៀរបុរសពណ៌ខៀវ',
      unitKh: 'ដុំ',
      pieces: 30,
      freeInQty: 3,
      star: false,
      price: 0.5,
      active: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 4,
      inventoryCode: '21015631',
      name: 'Sunlight Lemon 400ml',
      nameKh: 'ទឹកលាងចានសាន់ឡៃក្រូចឆ្មារ',
      unitKh: 'ដុំ',
      pieces: 30,
      freeInQty: 3,
      star: false,
      price: 0.5,
      active: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 5,
      inventoryCode: '67056049',
      name: 'Viso Pises 130g',
      nameKh: 'សាប៊ូវីសូពិសេស',
      unitKh: 'ដុំ',
      pieces: 30,
      freeInQty: 3,
      star: false,
      price: 2.3,
      active: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 6,
      inventoryCode: '67051902',
      name: 'Comfort - Ultra Blue',
      nameKh: 'ទឹកក្រអូបខមហ្វតអ៊ុលត្រាពណ៌ខៀវ',
      unitKh: 'ដុំ',
      pieces: 30,
      freeInQty: 3,
      star: false,
      price: 1.1,
      active: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 7,
      inventoryCode: '67051902',
      name: 'Comfort - Ultra Pink',
      nameKh: 'ទឹកក្រអូបខមហ្វតអ៊ុលត្រាពណ៌ផ្កាឈូក',
      unitKh: 'ដុំ',
      pieces: 30,
      freeInQty: 3,
      star: false,
      price: 1.1,
      active: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 8,
      inventoryCode: '21085246',
      name: 'Signal Triple Protection 123 160g',
      nameKh: 'ថ្នាំដុសធ្មេញ សីុកណលអ៊ែកសិន ១២៣',
      unitKh: 'ដុំ',
      pieces: 30,
      freeInQty: 3,
      star: false,
      price: 1,
      active: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 9,
      inventoryCode: '21041698',
      name: 'Signal Calvity Fighter 160g',
      nameKh: 'ថ្នាំដុសធ្មេញសីុកណល ខាវីធី ១៦០g',
      unitKh: 'ដុំ',
      pieces: 30,
      freeInQty: 3,
      star: false,
      price: 2,
      active: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 10,
      inventoryCode: '21041697',
      name: 'Signal Calvity Fighter 75g',
      nameKh: 'ថ្នាំដុសធ្មេញសីុកណល ខាវីធី ៧០g',
      unitKh: 'ដុំ',
      pieces: 30,
      freeInQty: 3,
      star: false,
      price: 3,
      active: true,
      createdAt: now,
      updatedAt: now
    },
    {
      id: 11,
      inventoryCode: '67049878',
      name: 'Sunsilk 6ml',
      nameKh: 'សាប៊ូកក់សក់សាន់ស៊ីល ៦ml',
      unitKh: 'ដុំ',
      pieces: 30,
      freeInQty: 3,
      star: true,
      price: 3,
      active: true,
      createdAt: now,
      updatedAt: now
    },
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
