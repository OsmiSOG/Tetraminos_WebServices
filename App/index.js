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
      apiTetraminoL.lastState(req.session.lastStateTetraminoL)
      if (req.params.direction === 'right') {
        req.session.apiInfoTetramino = apiTetraminoL.turnRight()
        req.session.lastStateTetraminoL = apiTetraminoL.infoTetraminoL['current-movement']
        res.send(req.session.apiInfoTetramino)
      } else if (req.params.direction === 'left') {
        req.session.infoTetramino = apiTetraminoL.turnLeft()
        req.session.infoTetraminoL = apiTetraminoL.infoTetraminoL['current-movement']
        res.send(req.session.infoTetramino)
      }
    } else if (req.session.apiInfoTetramino['type'] === 'Square tetramino') {
      apiSquareTetramino.infoTetramino = req.session.apiInfoTetramino
      req.session.apiInfoTetramino = apiSquareTetramino.turn()
      res.send(req.session.apiInfoTetramino)
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
      apiTetraminoL.lastState(req.session.lastStateTetraminoL)
      if (req.params.direction === 'right') {
        req.session.apiInfoTetramino = apiTetraminoL.moveRight()
        res.send(apiTetraminoL.moveRight())
      } else if (req.params.direction === 'left') {
        req.session.apiInfoTetramino = apiTetraminoL.moveLeft()
        res.send(apiTetraminoL.moveLeft())
      }
    } else if (req.session.apiInfoTetramino['type'] === 'Square tetramino') {
      apiSquareTetramino.infoTetramino = req.session.apiInfoTetramino
      if (req.params.direction === 'right') {
        req.session.apiInfoTetramino = apiSquareTetramino.moveRight()
        res.send(req.session.apiInfoTetramino)
      } else if (req.params.direction === 'left') {
        req.session.apiInfoTetramino = apiSquareTetramino.moveLeft()
        res.send(req.session.apiInfoTetramino)
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
  setTimeout((req, res) => {
    if (req.session.apiInfoTetramino) {
      if (req.session.apiInfoTetramino['type'] === 'tetramino L') {
        apiTetraminoL.infoTetramino = req.session.apiInfoTetramino
        apiTetraminoL.lastState(req.session.lastStateTetraminoL)
        req.session.apiInfoTetramino = apiTetraminoL.decline()
        res.send(req.session.apiInfoTetramino)
      } else if (req.session.apiInfoTetramino['type'] === 'Square tetramino') {
        apiSquareTetramino.infoTetramino = req.session.apiInfoTetramino
        req.session.apiInfoTetramino = apiSquareTetramino.decline()
        res.send(req.session.apiInfoTetramino)
      }
    } else {
      res.status(500).send({ error: 'uninitialized tetramine' })
    }
  }, 5000)
})

/**
 * [message description]
 * @type {String}
 */
app.get('/newTetramino', (req, res) => {
  let tetramino = Math.floor(Math.random() * (2 - 0)) + 0
  switch (tetramino) {
    case 0:
      req.session.apiInfoTetramino = apiTetraminoL.startTetramino()
      req.session.lastStateTetraminoL = apiTetraminoL.infoTetraminoL['current-movement']
      res.send(req.session.apiInfoTetramino)
      break
    case 1:
      req.session.apiInfoTetramino = apiSquareTetramino.startTetramino()
      res.send(req.session.apiInfoTetramino)
      break
  }
})
