module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RencanaStudis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mahasiswaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Mahasiswas',
          key: 'id',
        },
      },
      mataKuliahId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MataKuliahs',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.NOW(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        default: Sequelize.NOW(),
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RencanaStudis');
  }
};