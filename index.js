const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/turn/:direction', (req, res) => {
  res.send({ message: 'hola' })
})

app.get('/displace/:direction', (req, res) => {
  if (req.params.direction === 'derecha') {
    res.send({ message: 'derecha' })
  } else if (req.params.direction === 'izquierda') {
    res.send({ message: 'izquierda' })
  } else {
    res.send({ message: 'Error' })
  }
})0

app.get('/decline', (req, res) => {
  res.send({ message: '-1' })
})

app.get('/newTetramino', (req, res) => {
  res.send({ message: 'nuevo tetramino' })
})

app.listen(port, () => {
  console.log(`Servidor creado con node js + express ${port}`)
})
