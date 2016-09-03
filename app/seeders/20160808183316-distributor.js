var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
    {id: 1, dtCode: '5024', dtName: 'Bot Bunly Distributor', dtNameKh: 'ប៊ុត ប៊ុនលី ឌីស្រទីប្យ៊ូធ័រ', active: true, createdAt: now, updatedAt: now},
    {id: 2, dtCode: '5025', dtName: 'LRNN Development', dtNameKh: 'អិល អរ អិន អិន ឌីវឡេបមិន', active: true, createdAt: now, updatedAt: now},
    {id: 3, dtCode: '5016', dtName: 'BDCO Trading', dtNameKh: 'បី ឌី សីុ អូ ត្រេឌីង',active: true, createdAt: now, updatedAt: now}
    ];

    return queryInterface.bulkInsert('Distributors', data);
  },

  down: function (queryInterface, Sequelize) {

  }
};
