const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

const senha = '!!@@##$$'

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port} e a senha ${senha}`)
})