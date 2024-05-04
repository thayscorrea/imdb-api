const database = require('../database/connection')

class AvaliationMovieController {

    create(request, response){
        const { userID, movieID, avaliation } = request.body

        database.insert({ userID, movieID, avaliation })
        .table("votes")
        .then(data => {
            response.json({ message: "Voto computado com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }

    list(request, response){
        database.select("*")
        .table("votes")
        .then(data => {
            response.json(data)
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = new AvaliationMovieController()