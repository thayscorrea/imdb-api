require("dotenv-safe").config();

const express = require('express');
const cors = require('cors');

const router = require('./src/routes/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(8000, () => {
    console.log("Aplicação executando na porta 8000")
})

app.get('/', (request, response) => {
    response.send("Hello world")
})