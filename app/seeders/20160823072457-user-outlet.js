var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    return queryInterface.bulkInsert('UserOutlets', [
      {id:  1 ,UserId:  2 ,OutletId:  1 ,createdAt:now, updatedAt:now},
      {id:  2 ,UserId:  3 ,OutletId:  2 ,createdAt:now, updatedAt:now},
      {id:  3 ,UserId:  4 ,OutletId:  3 ,createdAt:now, updatedAt:now},
      {id:  4 ,UserId:  5 ,OutletId:  4 ,createdAt:now, updatedAt:now},
      {id:  5 ,UserId:  6 ,OutletId:  5 ,createdAt:now, updatedAt:now},
      {id:  6 ,UserId:  7 ,OutletId:  6 ,createdAt:now, updatedAt:now},
      {id:  7 ,UserId:  8 ,OutletId:  7 ,createdAt:now, updatedAt:now},
      {id:  8 ,UserId:  9 ,OutletId:  8 ,createdAt:now, updatedAt:now},
      {id:  9 ,UserId:  10  ,OutletId:  9 ,createdAt:now, updatedAt:now},
      {id:  10  ,UserId:  11  ,OutletId:  10  ,createdAt:now, updatedAt:now},
      {id:  11  ,UserId:  12  ,OutletId:  11  ,createdAt:now, updatedAt:now},
      {id:  12  ,UserId:  13  ,OutletId:  12  ,createdAt:now, updatedAt:now},
      {id:  13  ,UserId:  14  ,OutletId:  13  ,createdAt:now, updatedAt:now},
      {id:  14  ,UserId:  15  ,OutletId:  14  ,createdAt:now, updatedAt:now},
      {id:  15  ,UserId:  16  ,OutletId:  15  ,createdAt:now, updatedAt:now},
      {id:  16  ,UserId:  17  ,OutletId:  16  ,createdAt:now, updatedAt:now},
      {id:  17  ,UserId:  18  ,OutletId:  17  ,createdAt:now, updatedAt:now},
      {id:  18  ,UserId:  19  ,OutletId:  18  ,createdAt:now, updatedAt:now},
      {id:  19  ,UserId:  20  ,OutletId:  19  ,createdAt:now, updatedAt:now},
      {id:  20  ,UserId:  21  ,OutletId:  20  ,createdAt:now, updatedAt:now},
      {id:  21  ,UserId:  22  ,OutletId:  21  ,createdAt:now, updatedAt:now},
      {id:  22  ,UserId:  23  ,OutletId:  22  ,createdAt:now, updatedAt:now},
      {id:  23  ,UserId:  24  ,OutletId:  23  ,createdAt:now, updatedAt:now},
      {id:  24  ,UserId:  25  ,OutletId:  24  ,createdAt:now, updatedAt:now},
      {id:  25  ,UserId:  26  ,OutletId:  25  ,createdAt:now, updatedAt:now},
      {id:  26  ,UserId:  27  ,OutletId:  26  ,createdAt:now, updatedAt:now},
      {id:  27  ,UserId:  28  ,OutletId:  27  ,createdAt:now, updatedAt:now},
      {id:  28  ,UserId:  29  ,OutletId:  28  ,createdAt:now, updatedAt:now},
      {id:  29  ,UserId:  30  ,OutletId:  29  ,createdAt:now, updatedAt:now},
      {id:  30  ,UserId:  31  ,OutletId:  30  ,createdAt:now, updatedAt:now},
      {id:  31  ,UserId:  32  ,OutletId:  31  ,createdAt:now, updatedAt:now},
      {id:  32  ,UserId:  33  ,OutletId:  32  ,createdAt:now, updatedAt:now},
      {id:  33  ,UserId:  34  ,OutletId:  33  ,createdAt:now, updatedAt:now},
      {id:  34  ,UserId:  35  ,OutletId:  34  ,createdAt:now, updatedAt:now},
      {id:  35  ,UserId:  36  ,OutletId:  35  ,createdAt:now, updatedAt:now},
      {id:  36  ,UserId:  37  ,OutletId:  36  ,createdAt:now, updatedAt:now},
      {id:  37  ,UserId:  38  ,OutletId:  37  ,createdAt:now, updatedAt:now},
      {id:  38  ,UserId:  39  ,OutletId:  38  ,createdAt:now, updatedAt:now},
      {id:  39  ,UserId:  40  ,OutletId:  39  ,createdAt:now, updatedAt:now},
      {id:  40  ,UserId:  41  ,OutletId:  40  ,createdAt:now, updatedAt:now},
      {id:  41  ,UserId:  42  ,OutletId:  41  ,createdAt:now, updatedAt:now},
      {id:  42  ,UserId:  43  ,OutletId:  42  ,createdAt:now, updatedAt:now},
      {id:  43  ,UserId:  44  ,OutletId:  43  ,createdAt:now, updatedAt:now},
      {id:  44  ,UserId:  45  ,OutletId:  44  ,createdAt:now, updatedAt:now},
      {id:  45  ,UserId:  46  ,OutletId:  45  ,createdAt:now, updatedAt:now},
      {id:  46  ,UserId:  47  ,OutletId:  46  ,createdAt:now, updatedAt:now},
      {id:  47  ,UserId:  48  ,OutletId:  47  ,createdAt:now, updatedAt:now},
      {id:  48  ,UserId:  49  ,OutletId:  48  ,createdAt:now, updatedAt:now},
      {id:  49  ,UserId:  50  ,OutletId:  49  ,createdAt:now, updatedAt:now},
      {id:  50  ,UserId:  51  ,OutletId:  50  ,createdAt:now, updatedAt:now},
      {id:  51  ,UserId:  52  ,OutletId:  51  ,createdAt:now, updatedAt:now},
      {id:  52  ,UserId:  53  ,OutletId:  52  ,createdAt:now, updatedAt:now},
      {id:  53  ,UserId:  54  ,OutletId:  53  ,createdAt:now, updatedAt:now},
      {id:  54  ,UserId:  55  ,OutletId:  54  ,createdAt:now, updatedAt:now},
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
