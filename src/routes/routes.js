const express = require('express')
const router = express.Router()

const database = require('../database/connection')
const GenresController = require('../controllers/GenresController')
const MoviesController = require('../controllers/MoviesController')
const UsersController = require('../controllers/UsersController')


router.get("/genres", GenresController.list)
router.post("/genres", GenresController.create)

router.get("/movie", MoviesController.list)
router.post("/movie", MoviesController.create)

router.get("/users", UsersController.list)
router.post("/user", UsersController.create)
router.put("/user/:id", UsersController.update)
router.post("/user/:id", UsersController.delete)

module.exports = router