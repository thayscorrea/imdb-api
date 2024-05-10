require("dotenv-safe").config();

const express = require('express');
const cors = require('cors');
const multer = require('multer');

const router = require('./src/routes/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const upload = multer({
    dest: './uploads/',
});

app.listen(8000, () => {
    console.log("Aplicação executando na porta 8000")
})

app.get('/', (request, response) => {
    response.send("Hello world")
})

app.post('/upload', upload.array('file'), async (req, res) => {
    console.log(`Files received: ${req.files.length}`);
    res.send({
        upload: true,
        files: req.files,
    });
});