const express = require('express');
const router = express.Router();
const mataKuliahController = require('../controllers/matakuliah.controller');

/**
 * [POST] Create new mata kuliah data
 */
router.post('/', mataKuliahController.store);

/**
 * [GET] Get all mata kuliah data
 */
router.get('/', mataKuliahController.findAll);

/**
 * [GET] Get mata kuliah data by its id
 */
router.get('/:id', mataKuliahController.findById);

/**
 * [PUT] Update mata kuliah data by its id
 */
router.put('/:id', mataKuliahController.updateById);

/**
 * [DELETE] Delete mata kuliah data by its id
 */
router.delete('/:id', mataKuliahController.deleteById);

module.exports = router;
