const httpStatus = require('http-status');
const models = require('../models');
const Validator = require('validatorjs');
const { mataKuliahValidators } = require('../validators/matakuliah.validator');

const MataKuliah = models.MataKuliah;

const store = async (req, res) => {
  const data = req.body;

  const validation = new Validator(data, mataKuliahValidators.postMataKuliah.rule, mataKuliahValidators.postMataKuliah.customMessages);

  if (validation.fails()) {
    res.status(httpStatus.PRECONDITION_FAILED).send({
      status: httpStatus.PRECONDITION_FAILED,
      message: 'Mata kuliah failed to be created.',
      data: validation.errors,
    })
  } else {
    const result = await MataKuliah.create(data);

    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: 'Mata kuliah created successfully.',
      data: result,
    });
  }
};

const findAll = async (req, res) => {
  const result = await MataKuliah.findAll();

  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: 'Mata kuliah list successfully fetched.',
    data: result,
  });
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await MataKuliah.findByPk(id);

  if (!id || !result) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: 'Mata kuliah not found.',
      data: null,
    });
  } else {
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: 'Mata kuliah successfully fetched.',
      data: result,
    });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const mataKuliah = await MataKuliah.findByPk(id);

  if (!id || !mataKuliah) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: 'Mata kuliah not found.',
      data: null,
    });
  } else {
    const validation = new Validator(data, mataKuliahValidators.putMataKuliah.rule);

    if (validation.fails()) {
      res.status(httpStatus.PRECONDITION_FAILED).send({
        status: httpStatus.PRECONDITION_FAILED,
        message: 'Mata kuliah failed to be updated.',
        data: validation.errors,
      })
    } else {
      const result = await mataKuliah.update(data);

      res.status(httpStatus.CREATED).send({
        status: httpStatus.CREATED,
        message: 'Mata kuliah updated successfully.',
        data: result,
      });
    }
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const mataKuliah = await MataKuliah.findByPk(id);

  if (!id || !MataKuliah) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: 'Mata kuliah not found.',
      data: null,
    });
  } else {
    await mataKuliah.destroy();

    res.status(httpStatus.NO_CONTENT).send({
      status: httpStatus.NO_CONTENT,
      message: 'Mata kuliah successfully deleted.'
    });
  }
};

module.exports = {
  store,
  findAll,
  findById,
  updateById,
  deleteById,
};