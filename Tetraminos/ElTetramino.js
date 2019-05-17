const Tetramino = require('./Tetramino.js')
/**
 * [TetraminoL description]
 */
module.exports = class ElTetramino extends Tetramino {
  /**
   * este es el constructor de la clase tetramino l
   * [constructor description]
   */
  constructor () {
    super()
    this.infoTetraminoL = require('../Config/el-tetramino.json')
  }

  /**
   * este es el metodo que se encarga de darle inicio al tetramino
   * [startTetamine description]
   * @return {[type]} [description]
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
      if (this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] === 10 || this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] === 10) {
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
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-four']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1]
          }
        }
      }
      if (this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] === 10 || this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] === 10) {
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
        }
      }
    } else {
      this.infoTetramino['move']['right'] = false
    }
    return this.infoTetramino
  }/**
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
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-four']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1]
          }
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
        }
      }
    } else {
      this.infoTetramino['move']['right'] = false
    }
    return this.infoTetramino
  }

  /**
   * Este metodo se encarga del movimiento hacia la izquierda del tetramino L
   * [moveLeft description]
   * @return {[type]} [description]
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
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-four']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1]
          }
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
        }
      }
    } else {
      this.infoTetramino['move']['left'] = false
    }
    return this.infoTetramino
  }

  /**
   * Este metodo se encarga de hacer caer o bajar al tetramino
   * [decline description]
   * @return {[type]} [description]
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
                'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
                'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
                'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1]
              },
              'left': {
                'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
                'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1]
              }
            }
          }
        }
        if (this.infoTetraminoL['current-movement'] === '3') {
          this.infoTetramino['move']['right'] = true

          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
            'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-three']
          }
          this.infoTetramino['position-in-board']['values-to-one'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['down'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1]]
          }
          this.infoTetramino['tetramino-periphery-positions']['left'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-four']['position-four'][1] - 1]
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] + 1]
          }
          if (this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] === (10 - 1)) {
            this.infoTetramino['tetramino-periphery-positions']['turn'] = {
              'right': {
                'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
                'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 2]
              },
              'left': {
                'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 2],
                'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
                'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 2]
              }
            }
          } else {
            this.infoTetramino['tetramino-periphery-positions']['turn'] = {
              'right': {
                'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
                'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
                'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] + 1]
              },
              'left': {
                'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
                'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
                'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1]
              }

            }
          }
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
              'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
              'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
              'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
              'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
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
            if (this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] === (10 - 1)) {
              this.infoTetramino['tetramino-periphery-positions']['turn'] = {
                'right': {
                  'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
                  'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
                  'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]]
                },
                'left': {
                  'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
                  'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
                  'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]]
                }
              }
            } else {
              this.infoTetramino['tetramino-periphery-positions']['turn'] = {
                'right': {
                  'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
                  'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
                  'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]]
                },
                'left': {
                  'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
                  'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]]
                }
              }
            }
          }
          if (this.infoTetraminoL['current-movement'] === '4') {
            this.infoTetramino['move']['right'] = true
            this.infoTetramino['position-in-board']['values-to-zero'] = {
              'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
              'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-four']
            }
            this.infoTetramino['position-in-board']['values-to-one'] = {
              'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
              'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] - 1],
              'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
              'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] - 1]
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
            if (this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] === (10 - 1)) {
              this.infoTetramino['tetramino-periphery-positions']['turn'] = {
                'right': {
                  'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
                  'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
                  'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]]
                },
                'left': {
                  'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
                  'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-three'][1]]
                }
              }
            } else {
              this.infoTetramino['tetramino-periphery-positions']['turn'] = {
                'right': {
                  'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
                  'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
                  'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]]
                },
                'left': {
                  'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-one'][1]],
                  'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] - 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]],
                  'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] + 1, this.infoTetramino['position-in-board']['values-to-one']['position-two'][1]]
                }
              }
            }
          }
        }
      }
    } else {
      this.infoTetramino['move']['left'] = false
    }
    return this.infoTetramino
  }

  /**
   * este metodo se encarga de hacer girar al tetramino L hacia la derecha
   * [turnRight description]
   * @return {[type]} [description]
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
   * este metodo se encarga de hacer girar al tetramino L hacia la izquierda
   * [turnLeft description]
   * @return {[type]} [description]
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
        console.log(this.infoTetramino['tetramino-state'])
        return this.infoTetramino
      }
    } else {
      this.infoTetramino['turn']['right'] = false
    }
    return this.infoTetramino
  }

  /**
   * este metodo se encarga de revizar el ultimo estado del tetramino
   * [lastState description]
   * @return {[type]} [description]
   */
  lastState (currentMovement) {
    this.infoTetraminoL['current-movement'] = currentMovement
  }
}
