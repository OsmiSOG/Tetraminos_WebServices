/**
 * Require paretn class Tetramino in constant
 * @constant
 * @requires module:Tetraminos/Tetramino
 * @type {Tetramino}
 */
const Tetramino = require('./Tetramino.js')

/**
 * module to export class SquareTetramino
 * @module Tetraminos/ElTetramino
 */
module.exports =
/**
 * functionalities for the tetramino square
 * @class ElTetramino
 * @extends Tetramino
 */
class ElTetramino extends Tetramino {
  /**
   * @constructor
   */
  constructor () {
    super()
    this.infoTetraminoL = require('../Config/el-tetramino.json')
  }

  /**
   * start the square tetramino with values for api
   * @return {json} json with information for api
   */
  startTetramino () {
    this.infoTetramino['type'] = this.infoTetraminoL['name']
    this.infoTetramino['tetramino'] = this.infoTetraminoL['1']['tetramino']
    this.infoTetramino['tetramino-state'] = this.infoTetraminoL['1']['tetramino']
    this.infoTetraminoL['current-movement'] = '1'
    this.infoTetramino['position-in-board']['values-to-zero'] = null
    this.infoTetramino['position-in-board']['values-to-one'] = {
      'position-one': [-3, 4],
      'position-two': [-2, 4],
      'position-three': [-1, 4],
      'position-four': [-1, 5]
    }
    this.infoTetramino['tetramino-periphery-positions']['left'] = null
    this.infoTetramino['tetramino-periphery-positions']['right'] = null
    this.infoTetramino['tetramino-periphery-positions']['turn'] = null
    this.infoTetramino['tetramino-periphery-positions']['down'] = {
      'position-one': [0, 4],
      'position-two': [0, 5]
    }
    return this.infoTetramino
  }

/**
   * este metodo se encarga del movimiento hacia la derecha del tetramino L
   * [moveRight description]
   * @return {[type]} [description]
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
    console.log(zeros)
    if (zeros) {
      if (this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] === (10 - 1) || this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] === (10 - 1)) {
        this.infoTetramino['move']['right'] = false
      } else {
        if (this.infoTetraminoL['current-movement'] === '1') {
          this.infoTetramino['move']['right'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
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
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
          }
          this.peripheryTurn()
        }
        if (this.infoTetraminoL['current-movement'] === '3') {
          this.infoTetramino['move']['right'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-four']
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
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1]
          }
          this.peripheryTurn()
        }
      }
      if (this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] === (10 - 1) || this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] === (10 -1)) {
        this.infoTetramino['move']['right'] = false
      } else {
        if (this.infoTetraminoL['current-movement'] === '2') {
          this.infoTetramino['move']['right'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-four']
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
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
          }
          this.peripheryTurn()
        }
        if (this.infoTetraminoL['current-movement'] === '4') {
          this.infoTetramino['move']['right'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-four']
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
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
          }
          this.peripheryTurn()
        }
      }
    } else {
      this.infoTetramino['move']['right'] = false
    }
    return this.infoTetramino
  }

  /**
   * modify values for the new position of tetramino to move left
   * @param  {string[]} valuesPeripheryLeft values to the right of the tetramine
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
      if (this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] === 0 || this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] === 0) {
        this.infoTetramino['move']['left'] = false
      } else {
        if (this.infoTetraminoL['current-movement'] === '1') {
          this.infoTetramino['move']['left'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-four']
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
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
          }
          this.peripheryTurn()
        }
        if (this.infoTetraminoL['current-movement'] === '3') {
          this.infoTetramino['move']['right'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-three']
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
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1]
          }
          this.peripheryTurn()
        }
      }
      if (this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] === 0 || this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] === 0) {
        this.infoTetramino['move']['left'] = false
      } else {
        if (this.infoTetraminoL['current-movement'] === '2') {
          this.infoTetramino['move']['left'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-four']
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
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
          }
          this.peripheryTurn()
        }
        if (this.infoTetraminoL['current-movement'] === '4') {
          this.infoTetramino['move']['right'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-four']
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
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
          }
          this.peripheryTurn()
        }
      }
    } else {
      this.infoTetramino['move']['left'] = false
    }
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
      if (this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] === (20 - 1) || this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] === (20 - 1)) {
        this.infoTetramino['move']['down'] = false
        console.log(this.infoTetraminoL['current-movement'])
      } else {
        if (this.infoTetraminoL['current-movement'] === '1') {
          this.infoTetramino['move']['down'] = true
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-four']
          }
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['down'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
          }
          this.peripheryTurn()
        }
        if (this.infoTetraminoL['current-movement'] === '3') {
          this.infoTetramino['move']['right'] = true

          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-three']
          }
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['down'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1]
          }
          this.peripheryTurn()
        }
        if (this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] === (20 - 1) || this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] === (20 - 1)) {
          this.infoTetramino['move']['left'] = false
        } else {
          if (this.infoTetraminoL['current-movement'] === '2') {
            this.infoTetramino['move']['left'] = true
            this.infoTetramino['position-in-board']['values-to-zero'] = {
              'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
              'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-four']
            }
            this.infoTetramino['position-in-board']['values-to-one'] = {
              'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
              'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
              'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
              'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
            }
            this.infoTetramino['tetramino-periphery-positions']['down'] = {
              'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
              'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
              'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
            }
            this.infoTetramino['tetramino-periphery-positions']['left'] = {
              'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
              'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
            }
            this.infoTetramino['tetramino-periphery-positions']['right'] = {
              'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
              'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
            }
            this.peripheryTurn()
          }
          if (this.infoTetraminoL['current-movement'] === '4') {
            this.infoTetramino['move']['right'] = true
            this.infoTetramino['position-in-board']['values-to-zero'] = {
              'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
              'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-four']
            }
            this.infoTetramino['position-in-board']['values-to-one'] = {
             'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
              'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
              'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
              'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
            }
            this.infoTetramino['tetramino-periphery-positions']['down'] = {
              'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
              'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
              'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]]
            }
            this.infoTetramino['tetramino-periphery-positions']['left'] = {
              'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
              'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
            }
            this.infoTetramino['tetramino-periphery-positions']['right'] = {
              'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1],
              'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
            }
            this.peripheryTurn()
          }
        }
      }
    } else {
      this.infoTetramino['move']['left'] = false
    }
    return this.infoTetramino
  }

  /**
   * modify values for the new position of tetramino to turn right
   * @return {json} json with information for api
   */
  turnRight (valuesPeripheryTurnRight) {
    this.infoTetramino['turn']['right'] = false
    this.infoTetramino['turn']['left'] = false
    let zeros = false
    for (let i = 0; i < valuesPeripheryTurnRight.length; i++) {
      if (parseInt(valuesPeripheryTurnRight[i]) === 0) {
        zeros = true
      } else {
        zeros = false
        break
      }
    }
    if (zeros) {
      this.infoTetramino['turn']['right'] = true
      if (this.infoTetraminoL['current-movement'] === '1') {
        if (this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] !== 0) {
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-four']
          }
          // values to one
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 2]
          }
        } else {
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-four']
          }
          // values to one
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 2],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
          }
        }
        // position tetramino periphery
        this.infoTetramino['tetramino-periphery-positions']['down'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
        }
        this.infoTetramino['tetramino-periphery-positions']['left'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
        }
        this.infoTetramino['tetramino-periphery-positions']['right'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
        }
        this.infoTetramino['tetramino-state'] = this.infoTetraminoL['2']['tetramino']
        this.infoTetraminoL['current-movement'] = '2'
        this.peripheryTurn()
        console.log(this.infoTetramino['tetramino-state'])
        return this.infoTetramino
      }
      if (this.infoTetraminoL['current-movement'] === '2') {
        // values to zero
        this.infoTetramino['position-in-board']['values-to-zero'] = {
          'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
          'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
          'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-four']
        }
        // values to one
        this.infoTetramino['position-in-board']['values-to-one'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
          'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1],
          'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] - 2, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
        }
        this.infoTetramino['tetramino-periphery-positions']['down'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
        }
        this.infoTetramino['tetramino-periphery-positions']['left'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1]
        }
        this.infoTetramino['tetramino-periphery-positions']['right'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
        }
        this.infoTetramino['tetramino-state'] = this.infoTetraminoL['3']['tetramino']
        this.infoTetraminoL['current-movement'] = '3'
        this.peripheryTurn()
        console.log(this.infoTetramino['tetramino-state'])
        return this.infoTetramino
      }

      if (this.infoTetraminoL['current-movement'] === '3') {
        if (this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] !== (10 - 1)) {
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-four']
          }
          // values to one
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 2, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 2]
          }
        } else {
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-four']
          }
          // values to one
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 2],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 2, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
          }
        }
        this.infoTetramino['tetramino-periphery-positions']['down'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]]
        }
        this.infoTetramino['tetramino-periphery-positions']['left'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
        }
        this.infoTetramino['tetramino-periphery-positions']['right'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
        }
        this.infoTetramino['tetramino-state'] = this.infoTetraminoL['4']['tetramino']
        this.infoTetraminoL['current-movement'] = '4'
        this.peripheryTurn()
        console.log(this.infoTetramino['tetramino-state'])
        return this.infoTetramino
      }
      if (this.infoTetraminoL['current-movement'] === '4') {
        // values to zero
        this.infoTetramino['position-in-board']['values-to-zero'] = {
          'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
          'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-four']
        }
        // values to one
        this.infoTetramino['position-in-board']['values-to-one'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] - 2, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
          'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
        }
        this.infoTetramino['tetramino-periphery-positions']['down'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
        }
        this.infoTetramino['tetramino-periphery-positions']['left'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
          'position-thee': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1]
        }
        this.infoTetramino['tetramino-periphery-positions']['right'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
        }
        this.infoTetramino['tetramino-state'] = this.infoTetraminoL['1']['tetramino']
        this.infoTetraminoL['current-movement'] = '1'
        this.peripheryTurn()
        console.log(this.infoTetramino['tetramino-state'])
        return this.infoTetramino
      }
    } else {
      this.infoTetramino['turn']['right'] = false
    }
    console.log(this.infoTetramino['tetramino-state'])
    return this.infoTetramino
  }

  /**
   * modify values for the new position of tetramino to turn left
   * @return {json} json with information for api
   */
  turnLeft (valuesPeripheryTurnLeft) {
    this.infoTetramino['turn']['right'] = false
    this.infoTetramino['turn']['left'] = false
    let zeros = false
    for (let i = 0; i < valuesPeripheryTurnLeft.length; i++) {
      if (parseInt(valuesPeripheryTurnLeft[i]) === 0) {
        zeros = true
      } else {
        zeros = false
        break
      }
    }
    if (zeros) {
      this.infoTetramino['turn']['Left'] = true
      if (this.infoTetraminoL['current-movement'] === '1') {
        if (this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] !== 0) {
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two']
          }
          // values to one
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 2, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
        } else {
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-two']
          }
          // values to one
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 2, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 2],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
          }
        }
        // position tetramino periphery
        this.infoTetramino['tetramino-periphery-positions']['down'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]]
        }
        this.infoTetramino['tetramino-periphery-positions']['left'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
        }
        this.infoTetramino['tetramino-periphery-positions']['right'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
        }
        this.infoTetramino['tetramino-state'] = this.infoTetraminoL['4']['tetramino']
        this.infoTetraminoL['current-movement'] = '4'
        this.peripheryTurn()
        console.log(this.infoTetramino['tetramino-state'])
        return this.infoTetramino
      }
      if (this.infoTetraminoL['current-movement'] === '2') {
        // values to zero
        this.infoTetramino['position-in-board']['values-to-zero'] = {
          'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
          'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two']
        }
        // values to one
        this.infoTetramino['position-in-board']['values-to-one'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 2],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
          'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
        }
        this.infoTetramino['tetramino-periphery-positions']['down'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
        }
        this.infoTetramino['tetramino-periphery-positions']['left'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1]
        }
        this.infoTetramino['tetramino-periphery-positions']['right'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
        }
        this.infoTetramino['tetramino-state'] = this.infoTetraminoL['1']['tetramino']
        this.infoTetraminoL['current-movement'] = '1'
        this.peripheryTurn()
        console.log(this.infoTetramino['tetramino-state'])
        return this.infoTetramino
      }

      if (this.infoTetraminoL['current-movement'] === '3') {
        if (this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] !== (10 - 1)) {
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-four']
          }
          // values to one
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 2, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
        } else {
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-four']
          }
          // values to one
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 2],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 2, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
          }
        }
        this.infoTetramino['tetramino-periphery-positions']['down'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
        }
        this.infoTetramino['tetramino-periphery-positions']['left'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
        }
        this.infoTetramino['tetramino-periphery-positions']['right'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
        }
        this.infoTetramino['tetramino-state'] = this.infoTetraminoL['2']['tetramino']
        this.infoTetraminoL['current-movement'] = '2'
        this.peripheryTurn()
        console.log(this.infoTetramino['tetramino-state'])
        return this.infoTetramino
      }
      if (this.infoTetraminoL['current-movement'] === '4') {
        // values to zero
        this.infoTetramino['position-in-board']['values-to-zero'] = {
          'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
          'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two']
        }
        // values to one
        this.infoTetramino['position-in-board']['values-to-one'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 2],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] - 2, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
          'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
        }
        this.infoTetramino['tetramino-periphery-positions']['down'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
        }
        this.infoTetramino['tetramino-periphery-positions']['left'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
          'position-thee': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
        }
        this.infoTetramino['tetramino-periphery-positions']['right'] = {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1]
        }
        this.infoTetramino['tetramino-state'] = this.infoTetraminoL['3']['tetramino']
        this.infoTetraminoL['current-movement'] = '3'
        this.peripheryTurn()
        console.log(this.infoTetramino['tetramino-state'])
        return this.infoTetramino
      }
    } else {
      this.infoTetramino['turn']['right'] = false
    }
    return this.infoTetramino
  }

  /**
   * modify values for the current movement of tetramino
   * @param  {string} currentMovement [description]
   * @return {json} json with information for api
   */
  lastState (currentMovement) {
    this.infoTetraminoL['current-movement'] = currentMovement
  }

  peripheryTurn () {
    if (this.infoTetraminoL['current-movement'] === '1') {
      if (this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] === 0) {
        this.infoTetramino['tetramino-periphery-positions']['turn'] = {
          'right': {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 2]
          },
          'left': {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 2],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1]
          }
        }
      } else {
        this.infoTetramino['tetramino-periphery-positions']['turn'] = {
          'right': {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1]
          },
          'left': {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1]
          }
        }
      }
    } else if (this.infoTetraminoL['current-movement'] === '2') {
      this.infoTetramino['tetramino-periphery-positions']['turn'] = {
        'right': {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
          'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]]
        },
        'left': {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]]
        }
      }
    } else if (this.infoTetraminoL['current-movement'] === '3') {
      if (this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] === (10 - 1)) {
        this.infoTetramino['tetramino-periphery-positions']['turn'] = {
          'right': {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 2]
          },
          'left': {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 2],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 2]
          }
        }
      } else {
        this.infoTetramino['tetramino-periphery-positions']['turn'] = {
          'right': {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1]
          },
          'left': {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1]
          }
        }
      }
    } else if (this.infoTetraminoL['current-movement'] === '4') {
      this.infoTetramino['tetramino-periphery-positions']['turn'] = {
        'right': {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 2, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]]
        },
        'left': {
          'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]],
          'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 2, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]]
        }
      }
    }
  }
}
