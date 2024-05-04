const database = require('../database/connection')

class UsersController {

    create(request, response){
        const { name, email, password, type } = request.body

        database
        .insert({ name, email, password, type })
        .table("users")
        .then(data => {
            response.json({ message: "Usuário inserido com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }

    update(request, response){
        const { id } = request.params
        const { password, type } = request.body

        database
        .where({ id: id })
        .update({ password, type })
        .table("users")
        .then(data => {
            response.json({ message: "Usuário atualizado com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }

    delete(request, response){
        const { id } = request.params

        database
        .where({ id: id })
        .update({ delete_at: new Date() })
        .table("users")
        .then(data => {
            response.json({ message: "Usuário removido com sucesso!" })
        }).catch(error => {
            console.log(error)
        })
    }

    list(request, response){
        database
        .select("*")
        .table("users")
        .then(data => {
            response.json(data)
        }).catch(error => {
            console.log(error)
        })
    }

    
}

module.exports = new UsersController()