const generateParticipants = require('./api/generateParticipants')

const express = require('express')
const cors = require('cors')

const app = express()

//O cors é o responsavel por definir quem podera acessar o app
//Ou seja que font-end podera fazer requisições para a API
app.use(cors())

//Converte todas as requisições JSON em objeto
app.use(express.json())

app.get('/participants', async (req, res) => {
  let participants = await generateParticipants()
  res.send({ participants })
})

//port
const port = 9003

app.listen(port, () => {
  console.log(`SERVIDOR EXECUTANDO NA PORTA ${port}`)
})