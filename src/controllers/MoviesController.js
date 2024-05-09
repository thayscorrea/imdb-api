const database = require('../database/connection')
const GenreMovieController = require('../controllers/GenreMovieController')

class MoviesController {

    create(request, response){
        const { name, year, time, sinopse, image, genres } = request.body

        database.insert({ name, year, time, sinopse, image })
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
            data.map(({ movieID }, index) => (
                database
                .avg("evaluation", { as: "evaluation" })
                .table("evaluation_movies")
                .where({ movieID })
                .then(d => {
                    data[index].evaluation = d ? d[0].evaluation : 0
                    response.json(data)
                }).catch(error => {
                    console.log(error)
                })
            ))
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new MoviesController()