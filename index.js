require("dotenv-safe").config();

const express = require('express');
const cors = require('cors');
const multer = require('multer');

const router = require('./src/routes/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.use(express.static('public'));

app.listen(8000, () => {
    console.log("Aplicação executando na porta 8000")
})

app.get('/', (request, response) => {
    response.send("Hello world")
})


// Configuração de armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        // Extração da extensão do arquivo original:
        const extensaoArquivo = file.originalname.split('.')[1];

        // Cria um código randômico que será o nome do arquivo
        const novoNomeArquivo = require('crypto')
            .randomBytes(64)
            .toString('hex');

        // Indica o novo nome do arquivo:
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), function (req, res, next) {
    res.send({ file: req.file.filename })
})