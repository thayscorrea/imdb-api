const express = require('express')
const router = express.Router()

const database = require('../database/connection')
const GenresController = require('../controllers/GenresController')
const GenreMovieController = require('../controllers/GenreMovieController')
const MoviesController = require('../controllers/MoviesController')
const UsersController = require('../controllers/UsersController')
const AuthController = require('../controllers/AuthController')
const EvaluationMovieController = require('../controllers/EvaluationMovieController')

router.get("/genres", GenresController.list)
router.post("/genre", GenresController.create)

router.get("/movie/genres/:id", GenreMovieController.list)

router.get("/movies", MoviesController.list)
router.post("/movie", MoviesController.create)
router.put("/movie/:id", MoviesController.update)
router.post("/movie/delete/:id", MoviesController.delete)

router.get("/users", UsersController.list)
router.get("/user", UsersController.get)
router.post("/user", UsersController.create)
router.get("/user/:id", UsersController.getUser)
router.put("/user/:id", UsersController.update)
router.post("/user/disable/:id", UsersController.delete)
router.post("/user/enable/:id", UsersController.enable)
router.post("/user/reset/:id", UsersController.resetPassword)

router.post("/login", AuthController.login)
router.post("/logout", AuthController.logout)

router.get("/evaluations", EvaluationMovieController.list)
router.get("/evaluation/:id", EvaluationMovieController.get)
router.get("/evaluation/votes/:id", EvaluationMovieController.evaluation)
router.post("/evaluation", EvaluationMovieController.create)

module.exports = router