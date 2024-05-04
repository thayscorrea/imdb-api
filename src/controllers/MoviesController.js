const database = require('../database/connection')
const GenreMovieController = require('../controllers/GenreMovieController')

class MoviesController {

    create(request, response){
        const { name, year, duration, sinopse, avaliation, image, genres } = request.body

        database.insert({ name, year, duration, sinopse, avaliation, image })
        .table("movies")
        .then(data => {
            const movieID = data[0]

            genres.map((generID) => (
                GenreMovieController.create({ movieID, generID })
            ))

            response.json({ message: "Filme inserido com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }

    list(request, response){
        database.select("*")
        .table("movies")
        .then(data => {
            response.json(data)
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new MoviesController()