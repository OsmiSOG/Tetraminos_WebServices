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
 * @api {response} / tetramino information
 * @apiName ExampleResponse
 * @apiGroup API
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/ 200 OK
 *     {
 *        "type": "null",
 *        "tetramino":[],
 *        "board-info": {
 *          "width": 10,
 *          "hight": 20
 *        },
 *        "move": {
 *          "down": false,
 *          "right": false,
 *          "left": false
 *        },
 *        "turn": {
 *          "left": false,
 *          "right": false
 *        },
 *        "tetramino-state": [],
 *        "position-in-board": {
 *          "values-to-zero": {
 *            "position-one": null,
 *            "position-two": null,
 *            "position-three": null,
 *            "position-four": null
 *          },
 *          "values-to-one": {
 *            "position-one": null,
 *            "position-two": null,
 *            "position-three": null,
 *            "position-four": null
 *          }
 *        },
 *        "tetramino-periphery-positions":{
 *          "down":{
 *            "position-one": null,
 *            "position-two": null,
 *            "position-three": null,
 *            "position-four": null
 *          },
 *          "left":{
 *            "position-one": null,
 *            "position-two": null,
 *            "position-three": null,
 *            "position-four": null
 *          },
 *          "right":{
 *            "position-one": null,
 *            "position-two": null,
 *            "position-three": null,
 *            "position-four": null
 *          },
 *          "turn":{
 *
 *          }
 *        }
 *      }
 */
app.listen(port, () => {
  console.log(`Servidor creado con node js + express ${port}
    funcionando ${apiElTetramino.infoTetraminoL}
    funcionando ${apiSquareTetramino.infoSquareTetramino}`)
})

/**
 * @api {get} /turn/:direction/:values Request turn tetramino
 * @apiVersion 1.0.0
 * @apiName GetTurnMain
 * @apiGroup Turn
 *
 * @apiParam {String} direction The direction left or right | (or null if Square Tetramino).
 * @apiParam {String} values The values in the position of turn 1=full 0=empty | (or null if Square Tetramino).
 *
 * @apiExample {js} Example usage:
 *    http://host/turn/right/0,0,0
 *
 * @apiSuccess {Object} tetramino information.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/turn 200 OK
 *     {
 *        "infoTetramino": "..."
 *     }
 *
 * @apiError uninitializedTetramino The tetramino has not been initialized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/turn 500 Error
 *     {
 *        "error": "uninitialized tetramine"
 *     }
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
 * @api {get} /turn/ Request turn tetramino
 * @apiVersion 1.0.0
 * @apiName GetTurnSquare
 * @apiGroup Turn
 *
 * @apiExample {js} Example usage:
 *    http://host/turn/
 *
 * @apiSuccess {Object} tetramino information.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/turn/ 200 OK
 *     {
 *        infoTetramino: ...
 *     }
 *
 * @apiError uninitializedTetramino The tetramino has not been initialized or use with tetramino l.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/ 500 Error
 *     {
 *        error: 'uninitialized tetramine'
 *     }
 *     HTTP/ 500 Error
 *     {
 *        error: 'No available for tetramino l'
 *     }
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
 * @api {get} /displace/:direction/:values Request displace tetramino
 * @apiVersion 1.0.0
 * @apiName GetDisplace
 * @apiGroup Displace
 *
 * @apiParam {String} direction The direction left or right.
 * @apiParam {String} values The values to the left or right of the tetramine 1=full 0=empty.
 *
 * @apiExample {js} Example usage:
 *    http://host/displace/left/0,1,0
 *
 * @apiSuccess {Object} tetramino information.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/displace/ 200 OK
 *     {
 *        infoTetramino: ...
 *     }
 * @apiError uninitializedTetramino The tetramino has not been initialized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/500 Error
 *     {
 *        error: 'uninitialized tetramine'
 *     }
 */
app.get('/displace/:direction/:values_direction', (req, res) => {
  if (req.session.apiInfoTetramino) {
    if (req.session.apiInfoTetramino['type'] === 'tetramino L') {
      apiElTetramino.infoTetramino = req.session.apiInfoTetramino
      apiElTetramino.lastState(req.session.lastStateTetraminoL)
      console.log(req.session.lastStateTetraminoL)
      if (req.params.direction === 'right') {
        req.session.apiInfoTetramino = apiElTetramino.moveRight(Array.from(req.params.values_direction.split(',')))
        res.send(req.session.apiInfoTetramino)
      } else if (req.params.direction === 'left') {
        req.session.apiInfoTetramino = apiElTetramino.moveLeft(Array.from(req.params.values_direction.split(',')))
        res.send(req.session.apiInfoTetramino)
      } else { res.status(500).send({ error: 'parameters incorrects' }) }
    } else if (req.session.apiInfoTetramino['type'] === 'Square tetramino') {
      apiSquareTetramino.infoTetramino = req.session.apiInfoTetramino
      if (req.params.direction === 'right') {
        req.session.apiInfoTetramino = apiSquareTetramino.moveRight(req.params.values_direction)
        res.send(req.session.apiInfoTetramino)
      } else if (req.params.direction === 'left') {
        req.session.apiInfoTetramino = apiSquareTetramino.moveLeft(req.params.values_direction)
        res.send(req.session.apiInfoTetramino)
      }
    }
  } else {
    res.status(500).send({ error: 'uninitialized tetramine' })
  }
})

/**
 * @api {get} /decline/:values_down Request decline tetramino
 * @apiVersion 1.0.0
 * @apiName GetDecline
 * @apiGroup Decline
 *
 * @apiParam {String} values_down The values below the tetramine 1=full 0=empty.
 *
 * @apiExample {js} Example usage:
 *    http://host/decline/1,1
 *
 * @apiSuccess {Object} tetramino information.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/decline 200 OK
 *     {
 *        infoTetramino: ...
 *     }
 *
 * @apiError uninitializedTetramino The tetramino has not been initialized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/ 500 Error
 *     {
 *        error: 'uninitialized tetramine'
 *     }
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

/**
 * @api {get} /newTetramino Request new tetramino
 * @apiVersion 1.0.0
 * @apiName GetNewTetramino
 * @apiGroup New
 *
 * @apiExample {js} Example usage:
 *    http://host/newTetramino
 *
 * @apiSuccess {Object} tetramino information.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/newTetramino 200 OK
 *     {
 *        infoTetramino: ...
 *     }
 *
 * @apiError uninitializedTetramino The tetramino has not been initialized.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/ 500 Error
 *     {
 *        error: 'uninitialized tetramine'
 *     }
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
