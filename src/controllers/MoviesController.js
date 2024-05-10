const database = require('../database/connection')
const GenreMovieController = require('../controllers/GenreMovieController')

class MoviesController {

    create(request, response) {
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

    update(request, response) {
        const { id } = request.params
        const { name, year, time, sinopse, image, genres } = request.body

        database
            .where({ movieID: id })
            .update({ name, year, time, sinopse, image, genres })
            .table("movies")
            .then(data => {
                response.json({ message: "Filme atualizado com sucesso!" })
            }).catch(error => {
                console.log(error)
            })
    }

    async list(request, response) {
        const arr = await database
            .select("movies.*")
            .avg("evaluation_movies.evaluation", { as: "evaluation" })
            .from("movies")
            .leftJoin("evaluation_movies", "evaluation_movies.movieID", "movies.movieID")
            .groupBy("movies.movieID")

        response.json(arr)
    }

    delete(request, response) {
        const { id } = request.params

        database
            .where({ movieID: id })
            .delete()
            .table("movies")
            .then(data => {
                response.json({ message: "Filme excluído com sucesso!" })
            }).catch(error => {
                console.log(error)
            })
    }
}

module.exports = new MoviesController()