const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswa.controller');

/**
 * [POST] Create new mahasiswa data
 */
router.post('/', mahasiswaController.store);

/**
 * [GET] Get all mahasiswa data
 */
router.get('/', mahasiswaController.findAll);

/**
 * [GET] Get mahasiswa data by its id
 */
router.get('/:id', mahasiswaController.findById);

/**
 * [PUT] Update mahasiswa data by its id
 */
router.put('/:id', mahasiswaController.updateById);

/**
 * [DELETE] Delete mahasiswa data by its id
 */
router.delete('/:id', mahasiswaController.deleteById);

/**
 * [POST] Create new rencana studi data
 */
router.post('/:id/rencana-studis', mahasiswaController.storeRencanaStudiMahasiswa);

/**
 * [GET] Find all rencana studi mahasiswa data
 */
router.get('/:id/rencana-studis', mahasiswaController.findRencanaStudiMahasiswa);

/**
 * [PUT] Update rencana studi mahasiswa data
 */
router.put('/:id/rencana-studis', mahasiswaController.updateRencanaStudiMahasiswa);

/**
 * [DELETE] Delete all rencana studi mahasiswa data
 */
router.delete('/:id/rencana-studis', mahasiswaController.deleteRencanaStudiMahasiswa);

module.exports = router;
