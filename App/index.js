const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const ElTetramino = require('../Tetraminos/ElTetramino.js')
const SquareTetramino = require('../Tetraminos/SquareTetramino.js')

const app = express()
const port = process.env.PORT || 3000

app.use(session({
  secret: 'Es secreto',
  resave: true,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const apiElTetramino = new ElTetramino()
const apiSquareTetramino = new SquareTetramino()

/**
* [apiElTetramino description]
* @type {TetraminoL}
*/
app.listen(port, () => {
  console.log(`Servidor creado con node js + express ${port}
    funcionando ${apiElTetramino.infoTetraminoL}
    funcionando ${apiSquareTetramino.infoSquareTetramino}`)
})

/**
 * [message description]
 * @type {String}
 */
app.get('/turn/:direction/:values_turn', (req, res) => {
  if (req.session.apiInfoTetramino) {
    if (req.session.apiInfoTetramino['type'] === 'tetramino L') {
      apiElTetramino.infoTetramino = req.session.apiInfoTetramino
      apiElTetramino.lastState(req.session.lastStateTetraminoL)
      if (req.params.direction === 'right') {
        req.session.apiInfoTetramino = apiElTetramino.turnRight(req.params.values_turn)
        req.session.lastStateTetraminoL = apiElTetramino.infoTetraminoL['current-movement']
        res.send(req.session.apiInfoTetramino)
      } else if (req.params.direction === 'left') {
        req.session.infoTetramino = apiElTetramino.turnLeft(req.params.values_turn)
        req.session.infoTetraminoL = apiElTetramino.infoTetraminoL['current-movement']
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
 * [infoTetramino description]
 * @type {[type]}
 */
app.get('/turn', (req, res) => {
  if (req.session.apiInfoTetramino) {
    if (req.session.apiInfoTetramino['type'] === 'Square tetramino') {
      apiSquareTetramino.infoTetramino = req.session.apiInfoTetramino
      req.session.apiInfoTetramino = apiSquareTetramino.turn()
      res.send(req.session.apiInfoTetramino)
    } else {
      res.status(500).send({ error: 'No available for tetramino l' })
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
      apiElTetramino.infoTetramino = req.session.apiInfoTetramino
      apiElTetramino.lastState(req.session.lastStateTetraminoL)
      console.log(req.session.lastStateTetraminoL)
      if (req.params.direction === 'right') {
        req.session.apiInfoTetramino = apiElTetramino.moveRight(Array.from(req.params.values_right.split(',')))
        res.send(req.session.apiInfoTetramino)
      } else if (req.params.direction === 'left') {
        req.session.apiInfoTetramino = apiElTetramino.moveLeft(Array.from(req.params.values_left.split(',')))
        res.send(req.session.apiInfoTetramino)
      } else { res.status(500).send({ error: 'parameters incorrects' }) }
    } else if (req.session.apiInfoTetramino['type'] === 'Square tetramino') {
      apiSquareTetramino.infoTetramino = req.session.apiInfoTetramino
      if (req.params.direction === 'right') {
        req.session.apiInfoTetramino = apiSquareTetramino.moveRight(req.params.values_right)
        res.send(req.session.apiInfoTetramino)
      } else if (req.params.direction === 'left') {
        req.session.apiInfoTetramino = apiSquareTetramino.moveLeft(req.params.values_left)
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
        apiElTetramino.infoTetramino = req.session.apiInfoTetramino
        apiElTetramino.lastState(req.session.lastStateTetraminoL)
        req.session.apiInfoTetramino = apiElTetramino.decline(req.params.values_down)
        res.send(req.session.apiInfoTetramino)
      } else if (req.session.apiInfoTetramino['type'] === 'Square tetramino') {
        apiSquareTetramino.infoTetramino = req.session.apiInfoTetramino
        req.session.apiInfoTetramino = apiSquareTetramino.decline(req.params.values_down)
        res.send(req.session.apiInfoTetramino)
      }
    } else {
      res.status(500).send({ error: 'uninitialized tetramine' })
    }
  }, 1000, req, res)
})

app.get('/prueba/:values', (req, res) => {
  console.log(req.params.values.split(','))
  apiElTetramino.lastState(Array.from(req.params.values.split(',')))
  res.send()
})
/**
 * [message description]
 * @type {String}
 */
app.get('/newTetramino', (req, res) => {
  let tetramino = Math.floor(Math.random() * (2 - 0)) + 0
  switch (tetramino) {
    case 0:
      req.session.apiInfoTetramino = apiElTetramino.startTetramino()
      req.session.lastStateTetraminoL = apiElTetramino.infoTetraminoL['current-movement']
      res.send(req.session.apiInfoTetramino)
      break
    case 1:
      req.session.apiInfoTetramino = apiSquareTetramino.startTetramino()
      res.send(req.session.apiInfoTetramino)
      break
  }
})
