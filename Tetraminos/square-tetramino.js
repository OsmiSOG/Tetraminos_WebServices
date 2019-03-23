const Tetramino = require('./tetramino.js')

module.exports = class SquareTetramino extends Tetramino {
  /**
   * [constructor description]
   */
  constructor () {
    super()
    this.infoSquareTetramino = 'square-tetramino.json'
  }

  /**
   * [startTetramino description]
   * @return {[type]} [description]
   */
  startTetramino () {}

  /**
   * [turn description]
   * @return {[type]} [description]
   */
  turn () {}

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
