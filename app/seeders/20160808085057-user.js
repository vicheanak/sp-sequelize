var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");

    return queryInterface.bulkInsert('Users', [
    {
      id: 1,
      username: 'admin',
      name: 'admin',
      password: '$2a$10$IRVObsCawNNjQVelU3Dg3.vmFKmfmhL9rdq90VmgM29yOB6p9uAVa',
      role: 'admin',
      active: true,
      createdAt: now,
      updatedAt: now
    },
    {id:  2 ,username:  'chephalla' ,name:  'Chan Narath' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  3 ,username:  'sothun'  ,name:  'Lay Thyda' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  4 ,username:  'phornnavy' ,name:  'Noeut Ny'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  5 ,username:  'thornsreymom'  ,name:  'Sieng Kanha' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  6 ,username:  'choemphalla' ,name:  'Chea Savdy'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  7 ,username:  'sreyphea'  ,name:  'Pho Dany'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  8 ,username:  'jesenju' ,name:  'Van Thearya' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  9 ,username:  'chinkimchhauy' ,name:  'Keo Chantha' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  10  ,username:  'longsokhai'  ,name:  'Khut Srey Leap'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  11  ,username:  'somkemsan' ,name:  'Kak Sopheap' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  12  ,username:  'povmom'  ,name:  'Morm Ty Ty'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  13  ,username:  'pansophea' ,name:  'Moul Sreymom'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  14  ,username:  'yemmara' ,name:  'Moul Sreymom'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  15  ,username:  'thoeungtheav'  ,name:  'Sut Chantha' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  16  ,username:  'koemlunchandy' ,name:  'Champa Sina' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  17  ,username:  'measpoleap'  ,name:  'Chhom Sochea'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  18  ,username:  'kimhoeunmonika'  ,name:  'Heng Vanly'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  19  ,username:  'limmeylinh'  ,name:  'Huot Vannhung' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  20  ,username:  'sanith'  ,name:  'Khoan Nhorn' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  21  ,username:  'yuthdeop'  ,name:  'Khon Pon'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  22  ,username:  'ngasreythea' ,name:  'Leing Layheang'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  23  ,username:  'chhatchhoeur'  ,name:  'Loeum Chan Ley'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  24  ,username:  'samartpuch'  ,name:  'Ly Chenda' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  25  ,username:  'chittmey'  ,name:  'Prom Sey Ha' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  26  ,username:  'pheansrey' ,name:  'Rean Chansothary'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  27  ,username:  'teprina' ,name:  'Seng Sonet'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  28  ,username:  'sammeta' ,name:  'Soan Ysien'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  29  ,username:  'bouhorng'  ,name:  'Then Sayounn'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  30  ,username:  'phatsophea'  ,name:  'So Sreyneang'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  31  ,username:  'thoudara'  ,name:  'Sao Sreydy'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  32  ,username:  'tangchihor'  ,name:  'Pi Dalin'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  33  ,username:  'limhong' ,name:  'Pi Dalin'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  34  ,username:  'seanghai'  ,name:  'Vann Sorphorn' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  35  ,username:  'techseang' ,name:  'Yan Narith'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  36  ,username:  'chephally' ,name:  'Va Sreyvey'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  37  ,username:  'banhen'  ,name:  'Ban Seang Ngim'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  38  ,username:  'seanglang' ,name:  'Phea Srey Nich'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  39  ,username:  'anmeng'  ,name:  'Khlot Sing Hong' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  40  ,username:  'tangkoy' ,name:  'Khlot Sing Hong' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  41  ,username:  'heaat' ,name:  'Chan Tyna' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  42  ,username:  'nhekchai'  ,name:  'Chan Tyna' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  43  ,username:  'honghengroth'  ,name:  'Som Davy'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  44  ,username:  'channa'  ,name:  'Oy Sripheont'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  45  ,username:  'sokreasmey'  ,name:  'Oy Sripheont'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  46  ,username:  'chhunsophearun'  ,name:  'Mao Sothearoth'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  47  ,username:  'huykimseang' ,name:  'Kim Srey Neang'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  48  ,username:  'einkimloun'  ,name:  'Kim Srey Neang'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  49  ,username:  'sornsambath' ,name:  'Sok Chhayheang'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  50  ,username:  'chetouch'  ,name:  'At Channy' ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  51  ,username:  'nhemb' ,name:  'Tinika Keo Nimol'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  52  ,username:  'emchakrya' ,name:  'Chev Chanbopha'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  53  ,username:  'hengnarith'  ,name:  'Pheng Chanda'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  54  ,username:  'puheng'  ,name:  'Nob Sophea'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
    {id:  55  ,username:  'tuchchanthy' ,name:  'Keo Nita'  ,password:'$2a$10$joFAR9viUSgVBrCOJ2h39ufWNnwtMadq5VguxffmkA2GaDXjoPB1i'  ,role:'sp'  ,active:true, createdAt:now, updatedAt:now},
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
