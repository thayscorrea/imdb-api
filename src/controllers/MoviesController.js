const database = require('../database/connection')
const GenreMovieController = require('../controllers/GenreMovieController')

class MoviesController {

    create(request, response) {
        const { name, year, time, sinopse, image, genres, directors, actors } = request.body

        database
            .insert({ name, year, time, sinopse, image, directors, actors })
            .table("movies")
            .then(data => {
                const movieID = data[0]

                genres.map((generID) => (
                    GenreMovieController.create({ movieID, generID })
                ))

                response.json({ message: "Filme inserido com sucesso!", movieID })
            }).catch(error => {
                console.log(error)
            })
    }

    update(request, response) {
        const { id } = request.params
        const { name, year, time, sinopse, image, genres, directors, actors } = request.body

        database
            .where({ movieID: id })
            .update({ name, year, time, sinopse, image, directors, actors })
            .table("movies")
            .then(data => {
                const movieID = data[0]

                genres.map((generID) => (
                    GenreMovieController.create({ movieID, generID })
                ))
                
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

    async get(request, response) {
        const { id } = request.params

        database
            .select("movies.*")
            .avg("evaluation_movies.evaluation", { as: "evaluation" })
            .from("movies")
            .leftJoin("evaluation_movies", "evaluation_movies.movieID", "movies.movieID")
            .where({ "movies.movieID": id })
            .then(data => {
                if(data[0].movieID !== null){
                    response.json(data)
                }

                response.json([])
            }).catch(error => {
                console.log(error)
            })
    }

    async getByName(request, response) {
        const { name } = request.body

        const arr = await database
            .select("*")
            .from("movies")
            .where({ name })

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

    search(request, response){
        const { input, filter } = request.body

        switch(filter){
            case 'directors':
                database
                .table("movies")
                .select("movieID")
                .whereLike('directors', `%${input}%`)
                .then(data => {
                    response.json(data)
                }).catch(error => {
                    console.log(error)
                })
            break;
            case 'movie':
                database
                .table("movies")
                .select("movieID")
                .whereLike('name', `%${input}%`)
                .then(data => {
                    response.json(data)
                }).catch(error => {
                    console.log(error)
                })
            break;
            case 'actors':
                database
                .table("movies")
                .select("movieID")
                .whereLike('actors', `%${input}%`)
                .then(data => {
                    response.json(data)
                }).catch(error => {
                    console.log(error)
                })
            break;
            default:
                database
                .table("movies")
                .select("movieID")
                .whereLike('name', `%${input}%`)
                .orWhereLike('actors', `%${input}%`)
                .orWhereLike('directors', `%${input}%`)
                .first()
                .then(data => {
                    response.json(data)
                }).catch(error => {
                    console.log(error)
                })
            break;
        }
    }
}

module.exports = new MoviesController()