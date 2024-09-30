const express = require('express')

require('dotenv').config()

const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

const senha = process.env.SENHA
const usuario = process.env.USUARIO

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} com o usuário ${usuario} e a senha ${senha} `)
})