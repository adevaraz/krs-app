'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Mahasiswa.hasMany(models.RencanaStudi);
    }
  }
  Mahasiswa.init({
    nama: DataTypes.STRING,
    usia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mahasiswa',
    paranoid: true,
  });
  return Mahasiswa;
};