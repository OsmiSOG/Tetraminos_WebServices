const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * [message description]
 * @type {String}
 */
app.get('/turn/:direction/:values_left/:values_right', (req, res) => {
  res.send({ message: `hola ${req.params.direction} ${req.params.x1}` })
})

/**
 * [direction description]
 * @type {[type]}
 */
app.get('/displace/:direction/:values_left/:values_right', (req, res) => {
  if (req.params.direction === 'derecha') {
    res.send({ message: 'derecha' })
  } else if (req.params.direction === 'izquierda') {
    res.send({ message: 'izquierda' })
  } else {
    res.send({ message: 'Error' })
  }
})

/**
 * [message description]
 * @param {String} req
 * @param {json} res
 * @type {String}
 * @return {json} res
 */
app.get('/decline/:values_down', (req, res) => {
  res.send({ message: '-1' })
})

/**
 * [message description]
 * @type {String}
 */
app.get('/newTetramino', (req, res) => {
  res.send({ message: 'nuevo tetramino' })
})

app.listen(port, () => {
  console.log(`Servidor creado con node js + express ${port}`)
})
