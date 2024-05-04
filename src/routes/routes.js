const express = require('express')
const router = express.Router()

const database = require('../database/connection')
const GenresController = require('../controllers/GenresController')
const MoviesController = require('../controllers/MoviesController')

router.get("/genres", GenresController.list)
router.post("/genres", GenresController.create)

router.get("/movie", MoviesController.list)
router.post("/movie", MoviesController.create)

module.exports = router