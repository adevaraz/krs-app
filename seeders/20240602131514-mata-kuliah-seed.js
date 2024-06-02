const { mataKuliahs } = require("../data/matakuliah.data");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MataKuliahs', mataKuliahs, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MataKuliahs', null, {});
  }
};
