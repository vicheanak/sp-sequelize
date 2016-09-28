var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [{id: 1 , dtCode: 5016, dtName: 'BDCO',  'dtNameKh': 'ប៊ី ឌី ស៊ី​​ អូ ត្រេឌីង ខូអិលធីឌី', active: true, createdAt: now, updatedAt: now},
    {id: 2 , dtCode: 5024, dtName: 'BLD', 'dtNameKh': 'ប៊ុត ប៊ុនលី​​ ឌីស្រ្ទីប្យ៊ូធ័រ', active: true, createdAt: now, updatedAt: now},
    {id: 3 , dtCode: 5027, dtName: 'JY',  'dtNameKh': 'ជីងយាក ហូលឌីង ខូអិលធីឌី', active: true, createdAt: now, updatedAt: now},
    {id: 4 , dtCode: 5025, dtName: 'LRNN',  'dtNameKh': 'អិលអ អិនអិនឌីវេឡុបមិន', active: true, createdAt: now, updatedAt: now},
    {id: 5 , dtCode: 5012, dtName: 'NCT', 'dtNameKh': 'ងិន ឆេង ត្រេឌីង ខូអិលធីឌី', active: true, createdAt: now, updatedAt: now},
    {id: 6 , dtCode: 5011, dtName: 'UKT', 'dtNameKh': 'អ៊ឹង គន្ធា ត្រេឌីង​ ខូអិល', active: true, createdAt: now, updatedAt: now},
    {id: 7 , dtCode: 5018, dtName: 'BST',   'dtNameKh': 'បូរីស្តារ ត្រេឌីង (ប៊ីអេសធី)', active: true, createdAt: now, updatedAt: now},
    {id: 8 , dtCode: 5029, dtName: 'DSL',   'dtNameKh': 'ឌីណា សុខឡា ខូអិលធីឌី', active: true, createdAt: now, updatedAt: now},
    {id: 9 , dtCode: 5019, dtName: 'CCH', 'dtNameKh': 'ស៊ីស៊ី ហេង ត្រេឌីង', active: true, createdAt: now, updatedAt: now},
    {id: 10, dtCode:   5020, dtName: 'CHJ', 'dtNameKh': 'ស៊ី អេច ជេ គ្លូបល ត្រេឌីង', active: true, createdAt: now, updatedAt: now},
    {id: 11, dtCode:   5006, dtName: 'SOKK',  'dtNameKh': 'អេស អូ ខេ​ ខេ ឌីស្ទ្រីប្យ៊ូសិន', active: true, createdAt: now, updatedAt: now},
    {id: 12, dtCode:   5005, dtName: 'V-Rich',  'dtNameKh': 'វីរិច ត្រេឌីង', active: true, createdAt: now, updatedAt: now},
    {id: 13, dtCode:   5021, dtName: 'SG',  'dtNameKh': 'សៀម ហ្គិច ខូ អិលធីឌី', active: true, createdAt: now, updatedAt: now},
    {id: 14, dtCode:   5014, dtName: 'TBK', 'dtNameKh': 'ត្បូងឃ្មុំ បេស ឌីស្ទ្រីប្យ៊ូសិន', active: true, createdAt: now, updatedAt: now},
    {id: 15, dtCode:   5010, dtName: 'RTO', 'dtNameKh': 'រ៉ា-ថា ឧត្តម', active: true, createdAt: now, updatedAt: now}];

    return queryInterface.bulkInsert('Distributors', data);
  },

  down: function (queryInterface, Sequelize) {

  }
};
