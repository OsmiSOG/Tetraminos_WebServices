/**
 * Require paretn class Tetramino in constant
 * @constant
 * @requires module:Tetraminos/Tetramino
 * @type {Tetramino}
 */
const Tetramino = require('./Tetramino.js')

/**
 * module to export class SquareTetramino
 * @module Tetraminos/SquareTetramino
 */
module.exports =
/**
 * functionalities for the tetramino square
 * @class SquareTetramino
 * @extends Tetramino
 */
class SquareTetramino extends Tetramino {
  /**
   * @constructor
   */
  constructor () {
    super()
    this.infoSquareTetramino = require('../Config/square-tetramino.json')
  }

  /**
   * start the square tetramino with values for api
   * @return {json} json with information for api
   */
  startTetramino () {
    this.infoTetramino['type'] = this.infoSquareTetramino['name']
    this.infoTetramino['tetramino'] = this.infoSquareTetramino['tetramino']
    this.infoTetramino['tetramino-state'] = this.infoSquareTetramino['tetramino'] // x , y
    this.infoSquareTetramino['current-movement'] = '1'
    this.infoTetramino['position-in-board']['values-to-zero'] = null
    this.infoTetramino['position-in-board']['values-to-one'] = {
      'position-one': [-2, 4],
      'position-two': [-2, 5],
      'position-three': [-1, 4],
      'position-four': [-1, 5]
    }
    this.infoTetramino['tetramino-periphery-positions']['right'] = null
    this.infoTetramino['tetramino-periphery-positions']['left'] = null
    this.infoTetramino['tetramino-periphery-positions']['turn'] = null
    this.infoTetramino['tetramino-periphery-positions']['down'] = {
      'position-one': [4, 0],
      'position-two': [4, 0]
    }
    return this.infoTetramino
  }

  /**
   * modify values for the new position of tetramino to turn
   * @return {json} json with information for api
   */
  turn () {
    this.infoTetramino['turn'] = true
    this.infoTetramino['tetramino-periphery-positions']['turn'] = true
    return this.infoTetramino
  }

  /**
   * modify values for the new position of tetramino to decline
   * @return {json} json with information for api
   */
  decline (valuesPeripheryDown) {
    this.infoTetramino['move']['right'] = false
    this.infoTetramino['move']['left'] = false
    let zeros = false
    for (let i = 0; i < valuesPeripheryDown.length; i++) {
      if (parseInt(valuesPeripheryDown[i]) === 0) {
        zeros = true
      } else {
        zeros = false
        break
      }
    }
    if (zeros) {
      if (this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] === (20 - 1) || this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] === (20 - 1)) {
        this.infoTetramino['move']['down'] = false
      } else {
        if (this.infoSquareTetramino['current-movement'] === '1') {
          this.infoTetramino['move']['down'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-four': this.infoTetramino['position-in-board']['values-to-one']['position-four'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-three']
          }
          // values to one
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          // position tetramino periphery
          this.infoTetramino['tetramino-periphery-positions']['down'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]]
          }
        }
      }
    } else {
      this.infoTetramino['move']['right'] = false
    }
    return this.infoTetramino
  }

  /**
   * modify values for the new position of tetramino to move right
   * @return {json} json with information for api
   */
  moveRight (valuesPeripheryRight) {
    this.infoTetramino['move']['right'] = false
    this.infoTetramino['move']['left'] = false
    let zeros = false
    for (let i = 0; i < valuesPeripheryRight.length; i++) {
      if (parseInt(valuesPeripheryRight[i]) === 0) {
        zeros = true
      } else {
        zeros = false
        break
      }
    }
    if (zeros) {
      if (this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] === (10 - 1) || this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] === (10 - 1)) {
        this.infoTetramino['move']['right'] = false
      } else {
        if (this.infoSquareTetramino['current-movement'] === '1') {
          this.infoTetramino['move']['right'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-three']
          }
          // values to one
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
          }
          // position tetramino periphery
          this.infoTetramino['tetramino-periphery-positions']['down'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1]
          }
        }
      }
    } else {
      this.infoTetramino['move']['right'] = false
    }
    return this.infoTetramino
  }

  /**
   * modify values for the new position of tetramino to move left
   * @return {json} json with information for api
   */
  moveLeft (valuesPeripheryLeft) {
    this.infoTetramino['move']['right'] = false
    this.infoTetramino['move']['left'] = false
    let zeros = false
    for (let i = 0; i < valuesPeripheryLeft.length; i++) {
      if (parseInt(valuesPeripheryLeft[i]) === 0) {
        zeros = true
      } else {
        zeros = false
        break
      }
    }
    if (zeros) {
      if (this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] === 0 || this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] === 0) {
        this.infoTetramino['move']['left'] = false
      } else {
        if (this.infoSquareTetramino['current-movement'] === '1') {
          this.infoTetramino['move']['left'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-four': this.infoTetramino['position-in-board']['values-to-one']['position-four'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two']
          }
          // values to one
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
          }
          // position tetramino periphery
          this.infoTetramino['tetramino-periphery-positions']['down'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1]
          }
        }
      }
    } else {
      this.infoTetramino['move']['left'] = false
    }
    return this.infoTetramino
  }
}
