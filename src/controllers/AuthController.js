const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const database = require('../database/connection')

class AuthController {

    login(request, response) {
        const { email, password } = request.body

        database
            .select("*")
            .table("users")
            .where({ email: email })
            .then(data => {
                data = data[0]

                if (data.delete_at == null) {
                    const verifyPassword = bcrypt.compareSync(password, data.password);

                    if (email == data.email && verifyPassword) {
                        const token = jwt.sign({ id: data.userID }, 'mysecret', {
                            expiresIn: 30000 // expires in 5min
                        });

                        response.json({ auth: true, token: token, isAdmin: data.type, userID: data.userID })
                    } else {
                        response.json({ message: "E-mail ou Senha incorretos!" })
                    }
                } else {
                    response.json({ message: "Usuário inativo!" })
                }
            }).catch(error => {
                console.log(error)
            })
    }

    logout(request, response) {
        esponse.json({ auth: false, token: null })
    }
}

module.exports = new AuthController()