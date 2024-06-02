'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RencanaStudi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RencanaStudi.belongsTo(models.Mahasiswa);
      RencanaStudi.belongsTo(models.MataKuliah);
    }
  }
  RencanaStudi.init({
    mahasiswaId: DataTypes.INTEGER,
    mataKuliahId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RencanaStudi',
    paranoid: true,
  });
  return RencanaStudi;
};