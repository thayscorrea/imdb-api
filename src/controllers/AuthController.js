const database = require('../database/connection')
const UsersController = require('../controllers/UsersController')

class AuthController { 
    login(request, response){
        const { email, password } = request.body

        const user = UsersController.get(email)

        if(email == user.email && password == user.password){
            const token = jwt.sign({ id: user.userID }, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });

            response.json({ auth: true, token: token })
        }else{
            response.json({ message: "E-mail ou Senha incorretos!" })
        }
    }

    logout(request, response){
        esponse.json({ auth: false, token: null })
    }
}

module.exports = new AuthController()