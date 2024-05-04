const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const database = require('../database/connection')

class AuthController { 

    login(request, response){
        const { email, password } = request.body

         database
        .where({ email: email })
        .select("*")
        .table("users")
        .then(data => {
            data = data[0]
            const verifyPassword = bcrypt.compareSync(password, data.password);
    
            if(email == data.email && verifyPassword){
                const token = jwt.sign({ id: data.userID }, 'mysecret', {
                    expiresIn: 300 // expires in 5min
                });
    
                response.json({ auth: true, token: token })
            }else{
                response.json({ message: "E-mail ou Senha incorretos!" })
            }
        }).catch(error => {
            console.log(error)
        })
    }

    logout(request, response){
        esponse.json({ auth: false, token: null })
    }
}

module.exports = new AuthController()