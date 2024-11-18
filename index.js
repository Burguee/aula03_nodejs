const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const cors = require('cors')

require('dotenv').config()

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString)

const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('DB connectado')
})

// Criar a aplicação
// Criar as rotas
// getAll --> Retornar todos os elementos do DB
// getOne --> Retornar um elemento de acordo com o id (ou outro campo específico)
// post --> Criar um documento no DB
// delete --> Apagar um documento no DB
// update --> Atualizar um documento no DB

// Criar a lógica do negócio

const port = 3000
const app = express()

app.use(cors())

// app.get('/', (req, res) => {
//     res.send('Hello world')
// })

app.use(express.json())

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})
