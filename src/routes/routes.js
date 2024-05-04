const express = require('express')
const router = express.Router()

const database = require('../database/connection')
const GenresController = require('../controllers/GenresController')
const MoviesController = require('../controllers/MoviesController')

router.get("/genres", GenresController.list)
router.post("/genres", GenresController.create)

router.post("/movie", MoviesController.create)
router.get("/movie", MoviesController.list)


module.exports = router