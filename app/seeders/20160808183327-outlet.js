var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    var data = [
    {id:    1   ,outletCode:    '1721130'   ,address:   'Battambang '   ,outletName:    'Che Phalla'    ,outletNameKh:  'លេខ ផល្លា គាស់ក្រឡ'    ,DistributorId: 1   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    2   ,outletCode:    '1718833'   ,address:   'Battambang '   ,outletName:    'SothunChantheour'  ,outletNameKh:  'គិញ ចាន់ថើ កំពង់ព្រៀង' ,DistributorId: 1   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    3   ,outletCode:    '1720029'   ,address:   'Battambang '   ,outletName:    'Phorn Navy'    ,outletNameKh:  'ផាន់ ណារី' ,DistributorId: 1   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    4   ,outletCode:    '1721086'   ,address:   'Battambang '   ,outletName:    'Thorn Sreymom' ,outletNameKh:  'ធន ស្រីមុំ រុកគិរី'    ,DistributorId: 1   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    5   ,outletCode:    '1655972'   ,address:   'Kampong Chnang'    ,outletName:    'Choem Phalla'  ,outletNameKh:  'ចែ ផល្លា'  ,DistributorId: 2   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    6   ,outletCode:    '1655280'   ,address:   'Kampong Chnang'    ,outletName:    'Srey Phea' ,outletNameKh:  'ចែ ភា' ,DistributorId: 2   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    7   ,outletCode:    '1655909'   ,address:   'Kampong Chnang'    ,outletName:    'Je Sen Ju' ,outletNameKh:  'ចែ សេង ជល' ,DistributorId: 2   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    8   ,outletCode:    '1717872'   ,address:   'Kampong Thom'  ,outletName:    'Chin Kimchhauy'    ,outletNameKh:  'ជិន គឹមឆូយ'    ,DistributorId: 3   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    9   ,outletCode:    '1719860'   ,address:   'Kampong Thom'  ,outletName:    'Long Sok Hai'  ,outletNameKh:  'ឃុន សុខហៃ' ,DistributorId: 3   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    10  ,outletCode:    '1714552'   ,address:   'Pursat'    ,outletName:    'Som Kem San'   ,outletNameKh:  'សម គឹមសាន' ,DistributorId: 4   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    11  ,outletCode:    '1714364'   ,address:   'Pursat'    ,outletName:    'Pov Mom'   ,outletNameKh:  'មុំ ពែក'   ,DistributorId: 4   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    12  ,outletCode:    '1715724'   ,address:   'Pursat'    ,outletName:    'Pan Sophea (Che Mom)'  ,outletNameKh:  'ហ៊ី ប៉េងលី'    ,DistributorId: 4   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    13  ,outletCode:    '1714532'   ,address:   'Pursat'    ,outletName:    'Yem Mara'  ,outletNameKh:  'យ៉ែម ម៉ារ៉ា'   ,DistributorId: 4   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    14  ,outletCode:    '1715685'   ,address:   'Pursat'    ,outletName:    'Thoeung Theav' ,outletNameKh:  'ធឿង ធាវ'   ,DistributorId: 4   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    15  ,outletCode:    '1819014'   ,address:   'Siem Reap' ,outletName:    'Koem Lun Chandy'   ,outletNameKh:  'គឺម លន់ចាន់ឌី' ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    16  ,outletCode:    '1819852'   ,address:   'Siem Reap' ,outletName:    'Meas Poleap'   ,outletNameKh:  'ធៀប មាស'   ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    17  ,outletCode:    '1818919'   ,address:   'Siem Reap' ,outletName:    'Kim Hoeun Monika'  ,outletNameKh:  'គឺម ហឿនម៉ូលីការ'   ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    18  ,outletCode:    '1820040'   ,address:   'Siem Reap' ,outletName:    'Lim Meylinh'   ,outletNameKh:  'លឹមមីលីញ'  ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    19  ,outletCode:    '1820746'   ,address:   'Siem Reap' ,outletName:    'San Ith'   ,outletNameKh:  'ចែ អិត'    ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    20  ,outletCode:    '1820443'   ,address:   'Siem Reap' ,outletName:    'Yuth Deop' ,outletNameKh:  'ចែ ដឺប'    ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    21  ,outletCode:    '1111111'   ,address:   'Siem Reap' ,outletName:    'Nga Sreythea'  ,outletNameKh:  'ង៉ា ស្រីងៀប'   ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    22  ,outletCode:    '1818849'   ,address:   'Siem Reap' ,outletName:    'Chhat Chhoeur' ,outletNameKh:  'ឆាត់​ ឆឿរ' ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    23  ,outletCode:    '1819027'   ,address:   'Siem Reap' ,outletName:    'Sam Art Puch'  ,outletNameKh:  'ទៀង ស្រីប៉ុច'  ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    24  ,outletCode:    '1819017'   ,address:   'Siem Reap' ,outletName:    'Chit Tmey' ,outletNameKh:  'ចិត្ត ថ្មី'    ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    25  ,outletCode:    '1819087'   ,address:   'Siem Reap' ,outletName:    'Phean Srey (Phean Srey Neang)' ,outletNameKh:  'ភាន ស្រីនាង'   ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    26  ,outletCode:    '1819094'   ,address:   'Siem Reap' ,outletName:    'Tep Rina'  ,outletNameKh:  'ទេពរីណា'   ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    27  ,outletCode:    '1820170'   ,address:   'Siem Reap' ,outletName:    'Sam Meta'  ,outletNameKh:  'សំមេត្តា'  ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    28  ,outletCode:    '1820118'   ,address:   'Siem Reap' ,outletName:    'Bou Horng' ,outletNameKh:  'ប៊ូ ហ៊ង់'  ,DistributorId: 5   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    29  ,outletCode:    '1713580'   ,address:   'Svay Reing'    ,outletName:    'Phat Sophea'   ,outletNameKh:  'ផាត សុភា ពេជ្រ'    ,DistributorId: 6   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    30  ,outletCode:    '1713999'   ,address:   'Svay Reing'    ,outletName:    'Thou Dara' ,outletNameKh:  'ធូ​ ដារ៉ា' ,DistributorId: 6   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    31  ,outletCode:    '1718728'   ,address:   'Kampong Cham'  ,outletName:    'Tang Chihor'   ,outletNameKh:  'តាំង ជីហ័រ'    ,DistributorId: 7   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    32  ,outletCode:    '1719780'   ,address:   'Kampong Cham'  ,outletName:    'Lim Hong ' ,outletNameKh:  'លីម ហុង'   ,DistributorId: 7   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    33  ,outletCode:    '1718513'   ,address:   'Kampong Cham'  ,outletName:    'Seang Hai + Jei Toch ' ,outletNameKh:  'ចែទូច(ស៊ាងហៃ)' ,DistributorId: 7   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    34  ,outletCode:    '1718543'   ,address:   'Kampong Cham'  ,outletName:    'Tech Seang'    ,outletNameKh:  'តិក សៀង'   ,DistributorId: 7   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    35  ,outletCode:    '1719452'   ,address:   'Kampong Cham'  ,outletName:    'Che Phally'    ,outletNameKh:  'អ៊ី ផល្លី' ,DistributorId: 7   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    36  ,outletCode:    '1821473'   ,address:   'Kampong Cham'  ,outletName:    'Ban Hen'   ,outletNameKh:  'ហ៊ា​ហេន'   ,DistributorId: 8   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    37  ,outletCode:    '1719218'   ,address:   'Kampong Cham'  ,outletName:    'Seang Lang'    ,outletNameKh:  'ស៊ាង ឡាង' ,DistributorId: 7   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    38  ,outletCode:    '1821667'   ,address:   'Tbong Khmum '  ,outletName:    'An Meng'   ,outletNameKh:  'អាន ម៉េង'  ,DistributorId: 8   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    39  ,outletCode:    '1821893'   ,address:   'Tbong Khmum '  ,outletName:    'Tang Koy'  ,outletNameKh:  'តាំង គួយ'  ,DistributorId: 8   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    40  ,outletCode:    '1643330'   ,address:   'Kraitie'   ,outletName:    'Hea At'    ,outletNameKh:  '្រ ទា អាត' ,DistributorId: 9   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    41  ,outletCode:    '1643291'   ,address:   'Kraitie'   ,outletName:    'Nhek Chai '    ,outletNameKh:  'ញឹក ឆៃ'    ,DistributorId: 9   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    42  ,outletCode:    '1656681'   ,address:   'Ratanakiri'    ,outletName:    'Hong Heng Roth '   ,outletNameKh:  'ហុង ហេងរដ្ទ'   ,DistributorId: 10  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    43  ,outletCode:    '1656704'   ,address:   'Ratanakiri'    ,outletName:    'Re Nhanh ' ,outletNameKh:  'អ៊ី ទ្រាប់'    ,DistributorId: 10  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    44  ,outletCode:    '1844600'   ,address:   'Tbong Khmum '  ,outletName:    'Chan Na '  ,outletNameKh:  'ហ៊ា ចាន់ណា'    ,DistributorId: 8   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    45  ,outletCode:    '1821646'   ,address:   'Tbong Khmum '  ,outletName:    'Sok Reasmey'   ,outletNameKh:  'ហ៊ា ហន់'   ,DistributorId: 8   ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    46  ,outletCode:    '1587234'   ,address:   'Takeo' ,outletName:    'Chhun Sophearun'   ,outletNameKh:  'ស្អន​ ភារម្យ'  ,DistributorId: 11  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    47  ,outletCode:    '1587348'   ,address:   'Takeo' ,outletName:    'Huy Kimseang'  ,outletNameKh:  'ហុយ គីមសៀង'    ,DistributorId: 11  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    48  ,outletCode:    '1588005'   ,address:   'Takeo' ,outletName:    'Ein Kimloun'   ,outletNameKh:  'អិន គីមលន' ,DistributorId: 11  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    49  ,outletCode:    '1754752'   ,address:   'Phnom Penh'    ,outletName:    'Sorn Sambath'  ,outletNameKh:  'សន សម្បត្តិ'   ,DistributorId: 12  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    50  ,outletCode:    '1754318'   ,address:   'Kampong Speu'  ,outletName:    'Che Touch' ,outletNameKh:  'នួន ស្រីទូច'   ,DistributorId: 13  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    51  ,outletCode:    '1754363'   ,address:   'Kampong Speu'  ,outletName:    'Nhem B'    ,outletNameKh:  'យឹម ប៉ី'   ,DistributorId: 13  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    52  ,outletCode:    '1649479'   ,address:   'Takeo' ,outletName:    'Em Chakrya'    ,outletNameKh:  'អែ ម ចរិយា(អ៊ីអុក)'    ,DistributorId: 14  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    53  ,outletCode:    '1758629'   ,address:   'Takeo' ,outletName:    'Heng Narith '  ,outletNameKh:  'ហេងណារិទ្ធ​-'  ,DistributorId: 14  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    54  ,outletCode:    '1751089'   ,address:   'Takeo' ,outletName:    'Pu Heng '  ,outletNameKh:  'ពូហេង' ,DistributorId: 14  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now},
    {id:    55  ,outletCode:    '1655740'   ,address:   'Phnom Penh'    ,outletName:    'Tuch chanthy'  ,outletNameKh:  'ទុច ចន្ធី' ,DistributorId: 15  ,active: true, outletSubtype: '', perfectStoreType: '', createdAt: now, updatedAt: now}
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
