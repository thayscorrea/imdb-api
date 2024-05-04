const express = require('express')
const router = express.Router()

const database = require('../database/connection')
const GenresController = require('../controllers/GenresController')
const MoviesController = require('../controllers/MoviesController')
const UsersController = require('../controllers/UsersController')
const AuthController = require('../controllers/AuthController')
const AvaliationMovieController = require('../controllers/AvaliationMovieController')

router.get("/genres", GenresController.list)
router.post("/genres", GenresController.create)

router.get("/movie", MoviesController.list)
router.post("/movie", MoviesController.create)

router.get("/users", UsersController.list)
router.get("/user", UsersController.get)
router.post("/user", UsersController.create)
router.put("/user/:id", UsersController.update)
router.post("/user/:id", UsersController.delete)

router.post("/login", AuthController.login)
router.post("/logout", AuthController.logout)

router.get("/avaliations", AvaliationMovieController.list)
router.get("/avaliation/:id", AvaliationMovieController.get)
router.post("/avaliation", AvaliationMovieController.create)

module.exports = router