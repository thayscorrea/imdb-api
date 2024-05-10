const database = require('../database/connection')

class EvaluationMovieController {

    create(request, response){
        const { userID, movieID, evaluation } = request.body

        database.insert({ userID, movieID, evaluation })
        .table("evaluation_movies")
        .then(data => {
            response.json({ message: "Voto computado com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }

    list(request, response){
        database.select("*")
        .table("evaluation_movies")
        .then(data => {
            response.json(data)
        }).catch(error => {
            console.log(error)
        })
    }

    get(request, response){
        const { id } = request.params

        database
        .where({ movieID: id })
        .select("*")
        .table("evaluation_movies")
        .then(data => {
            response.json(data)
        }).catch(error => {
            console.log(error)
        })
    }

    evaluation(request, response){
        const { id } = request.params

        database
        .avg("evaluation", { as: "evaluation" })
        .table("evaluation_movies")
        .where({ movieID: id })
        .then(data => {
            response.json(data)
        }).catch(error => {
            console.log(error)
        })
    }

    evaluationMovies(request, response){
        database
        .select("users.name as nameUser", "movies.name as nameMovie", "evaluation_movies.evaluation")
        .from("evaluation_movies")
        .innerJoin("users", "users.userID", "evaluation_movies.userID")
        .innerJoin("movies", "movies.movieID", "evaluation_movies.movieID")
        .then(data => {
            response.json(data)
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new EvaluationMovieController()