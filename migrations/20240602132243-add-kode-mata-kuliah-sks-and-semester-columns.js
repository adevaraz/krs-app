'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('MataKuliahs', 'kodeMataKuliah', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });

    await queryInterface.addColumn('MataKuliahs', 'sks', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    await queryInterface.addColumn('MataKuliahs', 'semester', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('MataKuliahs', 'semester');
    await queryInterface.removeColumn('MataKuliahs', 'sks');
    await queryInterface.removeColumn('MataKuliahs', 'kodeMataKuliah');
  }
};
