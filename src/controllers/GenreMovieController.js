const { response } = require('express')

const database = require('../database/connection')

class GenreMovieController {

    create(request){
        const { movieID, generID } = request

        database.insert({ movieID, generID })
        .table("genres_movies")
        .then(data => {
            response.json({ message: "Gênero do filme inserido com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }

    list(request, response){
        database.select("*")
        .table("genres_movies")
        .then(data => {
            response.json(data)
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new GenreMovieController()