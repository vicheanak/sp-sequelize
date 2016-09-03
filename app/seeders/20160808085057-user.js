var moment = require('moment');
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      var now = moment().format("YYYY-MM-DD HH:mm:ss");
      return queryInterface.bulkInsert('Users', [
          {
              username: 'admin',
              name: 'admin',
              password: '$2a$10$IRVObsCawNNjQVelU3Dg3.vmFKmfmhL9rdq90VmgM29yOB6p9uAVa',
              role: 'admin',
              active: true,
              createdAt: now,
              updatedAt: now
          },
          {
              username: 'sp1',
              name: 'sp1',
              password: '$2a$10$IRVObsCawNNjQVelU3Dg3.vmFKmfmhL9rdq90VmgM29yOB6p9uAVa',
              role: 'sp',
              active: true,
              createdAt: now,
              updatedAt: now
          },
          {
              username: 'sp2',
              name: 'sp2',
              password: '$2a$10$IRVObsCawNNjQVelU3Dg3.vmFKmfmhL9rdq90VmgM29yOB6p9uAVa',
              role: 'sp',
              active: true,
              createdAt: now,
              updatedAt: now
          },
          {
              username: 'sp3',
              name: 'sp3',
              password: '$2a$10$IRVObsCawNNjQVelU3Dg3.vmFKmfmhL9rdq90VmgM29yOB6p9uAVa',
              role: 'sp',
              active: false,
              createdAt: now,
              updatedAt: now
          },
          {
              username: 'sp4',
              name: 'sp4',
              password: '$2a$10$IRVObsCawNNjQVelU3Dg3.vmFKmfmhL9rdq90VmgM29yOB6p9uAVa',
              role: 'sp',
              active: false,
              createdAt: now,
              updatedAt: now
          },
          {
              username: 'sp5',
              name: 'sp5',
              password: '$2a$10$IRVObsCawNNjQVelU3Dg3.vmFKmfmhL9rdq90VmgM29yOB6p9uAVa',
              role: 'sp',
              active: false,
              createdAt: now,
              updatedAt: now
          },
          {
              username: 'sp6',
              name: 'sp6',
              password: '$2a$10$IRVObsCawNNjQVelU3Dg3.vmFKmfmhL9rdq90VmgM29yOB6p9uAVa',
              role: 'sp',
              active: false,
              createdAt: now,
              updatedAt: now
          },
          {
              username: 'viewer',
              name: 'Viewer',
              password: '$2a$10$IRVObsCawNNjQVelU3Dg3.vmFKmfmhL9rdq90VmgM29yOB6p9uAVa',
              role: 'viewer',
              active: false,
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
