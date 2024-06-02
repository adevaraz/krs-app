'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MataKuliah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MataKuliah.hasMany(models.RencanaStudi);
    }
  }
  MataKuliah.init({
    nama: DataTypes.STRING,
    kodeMataKuliah: DataTypes.STRING,
    sks: DataTypes.INTEGER,
    semester: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'MataKuliah',
    paranoid: true,
  });
  return MataKuliah;
};