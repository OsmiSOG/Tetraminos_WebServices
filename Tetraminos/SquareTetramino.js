const Tetramino = require('./Tetramino.js')

module.exports = class SquareTetramino extends Tetramino {
  /**
   * [constructor description]
   */
  constructor () {
    super()
    this.infoSquareTetramino = require('../Config/square-tetramino.json')
  }

  /**
   * [startTetramino description]
   * @return {[type]} [description]
   */
  startTetramino () {
    this.infoTetramino['type'] = this.infoSquareTetramino['name']
    return this.infoTetramino
  }

  /**
   * [turn description]
   * @return {[type]} [description]
   */
  turn () {
    this.infoTetramino['turn'] = true
    this.infoTetramino['tetramino-periphery-positions']['turn'] = null
    return this.infoTetramino
  }

  /**
   * [decline description]
   * @return {[type]} [description]
   */
  decline () {}

  /**
   * [moveRigth description]
   * @return {[type]} [description]
   */
  moveRigth () {}

  /**
   * [moveLeft description]
   * @return {[type]} [description]
   */
  moveLeft () {}
}
