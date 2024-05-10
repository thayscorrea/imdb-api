const { response } = require('express')

const database = require('../database/connection')

class GenreMovieController {

    create(request){
        const { movieID, generID } = request

        database
        .table("genres_movies")
        .where({ movieID })
        .delete()

        database.insert({ movieID, generID })
        .table("genres_movies")
        .then(data => {
            response.json({ message: "Gênero do filme inserido com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }

    list(request, response){

        const { id }= request.params

        database.select("name")
        .table("genres_movies")
        .innerJoin("genres", "genres.generID", "genres_movies.generID")
        .where({ movieID: id })
        .then(data => {
            response.json(data)
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new GenreMovieController()