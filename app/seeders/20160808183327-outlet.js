var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
   var data = [
          {id: 1, outletCode: '1655280', outletName: 'Che Phea', outletNameKh: 'ចែ ភា', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 1,active: true, createdAt: now, updatedAt: now},
          {id: 2, outletCode: '1655909', outletName: 'Che Sen Chu', outletNameKh: 'ចែ សេងជល', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 1,active: true, createdAt: now, updatedAt: now},
          {id: 3, outletCode: '1655972', outletName: 'Che Polla', outletNameKh: 'ចែ ផល្លា', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 1,active: true, createdAt: now, updatedAt: now},
          {id: 4, outletCode: '1714364', outletName: 'Mom Pek', outletNameKh: 'មុំ ពែក', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 2,active: true, createdAt: now, updatedAt: now},
          {id: 5, outletCode: '1714532', outletName: 'Yem Mara', outletNameKh: 'យ៉ែម ម៉ារ៉ា', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 2, active: true, createdAt: now, updatedAt: now},
          {id: 6, outletCode: '1714552', outletName: 'Som Kimsan', outletNameKh: 'សម គឹមសាន', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 2, active: true, createdAt: now, updatedAt: now},
          {id: 7, outletCode: '1715685', outletName: 'Thoeung Theav', outletNameKh: 'ធឿង ធាវ (បង ធៀវ)', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 2,active: true,createdAt: now, updatedAt: now},
          {id: 8, outletCode: '1715724', outletName: 'Hi Pengly', outletNameKh: 'ហី ប៉េងលី (ហ៊ា គ្រំ)', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 2,active: true,createdAt: now, updatedAt: now},
          {id: 9, outletCode: '1718833', outletName: 'Kinh Chanther', outletNameKh: 'គីញ ចាន់ថើ', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 3,active: true,createdAt: now, updatedAt: now},
          {id: 10, outletCode: '1721086', outletName: 'Thon Sreymom', outletNameKh: 'ធន ស្រីមុំ', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 3,active: true,createdAt: now, updatedAt: now},
          {id: 11, outletCode: '1721248', outletName: 'Ly Kim Han', outletNameKh: 'លី គឹមហៀង', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 3,active: true,createdAt: now, updatedAt: now},
          {id: 12, outletCode: '1721306', outletName: 'Bo Sina', outletNameKh: 'បូរ សីុណា', outletSubtype: '', perfectStoreType: 'PLATINUM HPC', address: '', DistributorId: 3,active:true,createdAt: now, updatedAt: now},
      ];
      return queryInterface.bulkInsert('Outlets', data);
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
