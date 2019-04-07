const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const TetraminoL = require('../Tetraminos/ElTetramino.js')
const SquareTetramino = require('../Tetraminos/SquareTetramino.js')

const app = express()
const port = 3000

app.use(session({
  secret: 'Es secreto',
  resave: true,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const apiTetraminoL = new TetraminoL()
const apiSquareTetramino = new SquareTetramino()

/**
* [apiTetraminoL description]
* @type {TetraminoL}
*/
app.listen(port, () => {
  console.log(`Servidor creado con node js + express ${port}
    funcionando ${apiTetraminoL.infoTetraminoL}
    funcionando ${apiSquareTetramino.infoSquareTetramino}`)
})

/**
 * [message description]
 * @type {String}
 */
app.get('/turn/:direction/:values_left/:values_right', (req, res) => {
  if (req.session.apiInfoTetramino) {
    if (req.session.apiInfoTetramino['type'] === 'tetramino L') {
      apiTetraminoL.infoTetramino = req.session.apiInfoTetramino
      apiTetraminoL.infoTetraminoL = req.session.apiInfoTetraminoL
      if (req.params.direction === 'right') {
        res.send(apiTetraminoL.turnRight())
      } else if (req.params.direction === 'left') {
        res.send(apiTetraminoL.turnLeft())
      }
    } else if (req.session.apiInfoTetramino['type'] === 'Square tetramino') {
      apiSquareTetramino.infoTetramino = req.session.apiInfoTetramino
      apiSquareTetramino.infoTetraminoL = req.session.apiInfoSquareTetramino
      res.send(apiSquareTetramino.turn())
    }
  } else {
    res.status(500).send({ error: 'uninitialized tetramine' })
  }
})

/**
 * [direction description]
 * @type {[type]}
 */
app.get('/displace/:direction/:values_left/:values_right', (req, res) => {
  if (req.session.apiInfoTetramino) {
    if (req.session.apiInfoTetramino['type'] === 'tetramino L') {
      apiTetraminoL.infoTetramino = req.session.apiInfoTetramino
      apiTetraminoL.infoTetraminoL = req.session.apiInfoTetraminoL
      if (req.params.direction === 'right') {
        res.send(apiTetraminoL.moveRight())
      } else if (req.params.direction === 'left') {
        res.send(apiTetraminoL.moveLeft())
      }
    } else if (req.session.apiInfoTetramino['type'] === 'Square tetramino') {
      apiSquareTetramino.infoTetramino = req.session.apiInfoTetramino
      apiSquareTetramino.infoTetraminoL = req.session.apiInfoSquareTetramino
      if (req.params.direction === 'right') {
        res.send(apiSquareTetramino.moveRight())
      } else if (req.params.direction === 'left') {
        res.send(apiSquareTetramino.moveLeft())
      }
    }
  } else {
    res.status(500).send({ error: 'uninitialized tetramine' })
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
  if (req.session.apiInfoTetramino) {
    if (req.session.apiInfoTetramino['type'] === 'tetramino L') {
      apiTetraminoL.infoTetramino = req.session.apiInfoTetramino
      apiTetraminoL.infoTetraminoL = req.session.apiInfoTetraminoL
      res.send(apiTetraminoL.decline())
    } else if (req.session.apiInfoTetramino['type'] === 'Square tetramino') {
      apiSquareTetramino.infoTetramino = req.session.apiInfoTetramino
      apiSquareTetramino.infoTetraminoL = req.session.apiInfoSquareTetramino
      res.send(apiSquareTetramino.decline())
    }
  } else {
    res.status(500).send({ error: 'uninitialized tetramine' })
  }
})

/**
 * [message description]
 * @type {String}
 */
app.get('/newTetramino', (req, res) => {
  let tetramino = Math.floor(Math.random() * (2 - 0)) + 0
  let api
  switch (tetramino) {
    case 0:
      api = apiTetraminoL.startTetramino()
      req.session.apiInfoTetramino = api
      req.session.apiInfoTetraminoL = apiTetraminoL.infoTetraminoL
      res.send(api)
      break
    case 1:
      api = apiSquareTetramino.startTetramino()
      req.session.apiInfoTetramino = api
      req.session.apiInfoSquareTetramino = apiSquareTetramino.infoSquareTetramino
      res.send(apiSquareTetramino.startTetramino())
      break
  }
})
