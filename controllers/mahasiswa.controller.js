const httpStatus = require('http-status');
const models = require('../models');
const Validator = require('validatorjs');
const { mahasiswaValidators } = require('../validators/mahasiswa.validator');

const Mahasiswa = models.Mahasiswa;
const MataKuliah = models.MataKuliah;
const RencanaStudi = models.RencanaStudi;

const store = async (req, res) => {
  const data = req.body;

  const validation = new Validator(data, mahasiswaValidators.postMahasiswa.rule, mahasiswaValidators.postMahasiswa.customMessages);

  if (validation.fails()) {
    res.status(httpStatus.PRECONDITION_FAILED).send({
      status: httpStatus.PRECONDITION_FAILED,
      message: 'Mahasiswa failed to be created.',
      data: validation.errors,
    })
  } else {
    const result = await Mahasiswa.create(data);

    res.status(httpStatus.CREATED).send({
      status: httpStatus.CREATED,
      message: 'Mahasiswa created successfully.',
      data: result,
    });
  }
};

const findAll = async (req, res) => {
  const result = await Mahasiswa.findAll();

  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: 'Mahasiswa list successfully fetched.',
    data: result,
  });
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await Mahasiswa.findByPk(id);

  if (!id || !result) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: 'Mahasiswa not found.',
      data: null,
    });
  } else {
    res.status(httpStatus.OK).send({
      status: httpStatus.OK,
      message: 'Mahasiswa successfully fetched.',
      data: result,
    });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const mahasiswa = await Mahasiswa.findByPk(id);

  if (!id || !mahasiswa) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: 'Mahasiswa not found.',
      data: null,
    });
  } else {
    const validation = new Validator(data, mahasiswaValidators.putMahasiswa.rule);

    if (validation.fails()) {
      res.status(httpStatus.PRECONDITION_FAILED).send({
        status: httpStatus.PRECONDITION_FAILED,
        message: 'Mahasiswa failed to be updated.',
        data: validation.errors,
      })
    } else {
      const result = await mahasiswa.update(data);

      res.status(httpStatus.CREATED).send({
        status: httpStatus.CREATED,
        message: 'Mahasiswa updated successfully.',
        data: result,
      });
    }
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const mahasiswa = await Mahasiswa.findByPk(id);

  if (!id || !mahasiswa) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: 'Mahasiswa not found.',
      data: null,
    });
  } else {
    await mahasiswa.destroy();

    res.status(httpStatus.NO_CONTENT).send({
      status: httpStatus.NO_CONTENT,
      message: 'Mahasiswa successfully deleted.'
    });
  }
};

const storeRencanaStudiMahasiswa = async (req, res) => {
  const { id: mahasiswaId } = req.params;
  const data = req.body;

  const validation = new Validator(data, mahasiswaValidators.postRencanaStudi.rule);

  try {
    if (validation.fails()) {
      res.status(httpStatus.PRECONDITION_FAILED).send({
        status: httpStatus.PRECONDITION_FAILED,
        message: 'Rencana studi failed to be created.',
        data: validation.errors,
      })
    } else {
      const mahasiswa = await Mahasiswa.findByPk(mahasiswaId);

      if (!mahasiswa) {
        throw new Error();
      }

      const { mataKuliahIds } = data;
      const result = await RencanaStudi.sequelize.transaction(async (t) => {
        return Promise.all(
          await mataKuliahIds.map(async (item) => {
            const mataKuliah = await MataKuliah.findByPk(item, { transaction: t });

            if (!mataKuliah) {
              throw new Error();
            }

            const rencanaStudi = await RencanaStudi.create({
              mahasiswaId: parseInt(mahasiswaId),
              mataKuliahId: item,
            });

            return rencanaStudi;
          })
        )
      });

      res.status(httpStatus.CREATED).send({
        status: httpStatus.CREATED,
        message: 'Rencana studi created successfully.',
        data: result,
      });
    }
  } catch (e) {
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: 'Mahasiswa or mata kuliah not found. Rencana studi failed to be created.'
    })
  }
};

const findRencanaStudiMahasiswa = async (req, res) => {
  const { id } = req.params;

  const result = await RencanaStudi.findAll({
    where: { mahasiswaId: id },
    include: [Mahasiswa, MataKuliah],
  });

  res.status(httpStatus.OK).send({
    status: httpStatus.OK,
    message: 'Rencana studi list successfully fetched.',
    data: result,
  });
};

const updateRencanaStudiMahasiswa = async (req, res) => {
  const { id: mahasiswaId } = req.params;
  const data = req.body;

  const validation = new Validator(data, mahasiswaValidators.putRencanaStudi.rule);

  try {
    if (validation.fails()) {
      res.status(httpStatus.PRECONDITION_FAILED).send({
        status: httpStatus.PRECONDITION_FAILED,
        message: 'Rencana studi failed to be created.',
        data: validation.errors,
      })
    } else {
      const mahasiswa = await Mahasiswa.findByPk(mahasiswaId);

      if (!mahasiswa) {
        throw new Error();
      }

      if (!await deleteAllRencanaStudiMahasiswa(mahasiswaId)) {
        throw new Error();
      }

      const { mataKuliahIds } = data;
      const result = await RencanaStudi.sequelize.transaction(async (t) => {
        return Promise.all(
          await mataKuliahIds.map(async (item) => {
            const mataKuliah = await MataKuliah.findByPk(item, { transaction: t });

            if (!mataKuliah) {
              throw new Error();
            }

            let rencanaStudi = await RencanaStudi.create({
              mahasiswaId: parseInt(mahasiswaId),
              mataKuliahId: item,
            });

            return rencanaStudi;
          })
        )
      });

      res.status(httpStatus.CREATED).send({
        status: httpStatus.CREATED,
        message: 'Rencana studi created successfully.',
        data: result,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(httpStatus.NOT_FOUND).send({
      status: httpStatus.NOT_FOUND,
      message: 'Mahasiswa or mata kuliah not found. Rencana studi failed to be updated.'
    })
  }
};

const deleteAllRencanaStudiMahasiswa = async (id) => {
  try {
    await RencanaStudi.destroy({ where: { mahasiswaId: id } });

    return true;
  } catch (e) {
    console.log('insidee')
    console.log(e);
    return false;
  }
}

module.exports = {
  store,
  findAll,
  findById,
  updateById,
  deleteById,
  storeRencanaStudiMahasiswa,
  findRencanaStudiMahasiswa,
  updateRencanaStudiMahasiswa,
};