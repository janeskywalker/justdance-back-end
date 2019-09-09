const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// show all cities
router.get('/', ctrl.studios.index);

// show one city
router.get('/:id', ctrl.studios.show);

// router.post('/:id', authRequired, ctrl.cities.createPost)

module.exports = router;
