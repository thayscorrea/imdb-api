const express = require('express')

const app = express()

app.listen(8000, () => {
    console.log("Aplicação executando na porta 8000")
})

app.get('/',(request,response)=>{
    response.send("Hello world")
 })

 https://victorhuguw-64.medium.com/construindo-uma-rest-api-utilizando-nodejs-express-e-mysql-parte-1-ef25643ab41b