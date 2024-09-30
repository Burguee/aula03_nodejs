const express = require('express')
const mongoose = require('mongoose')
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
// Criar a lógica do negócio

const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

const senha = process.env.SENHA
const usuario = process.env.USUARIO

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})