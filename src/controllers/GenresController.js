const database = require('../database/connection')

class GenresController {

    create(request, response){
        const { name } = request.body

        database.insert({ name })
        .table("genres")
        .then(genres => {
            response.json({ message: "Gênero inserido com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }

    list(request, response){
        database.select("*")
        .table("genres")
        .then(genres => {
            response.json(genres)
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new GenresController()