/**
 * module with class parent Tetramino
 * @module Tetraminos/Tetramino
 */
module.exports =
/**
 * class template Tetramino
 * @class
 */
class Tetramino {
  /**
   * open json file about API information
   * @constructor
   */
  constructor () {
    this.infoTetramino = require('../App/info-tetramino.json')
  }

  /**
   * start information for tetramino
   * @function
   * @return {json} json with information for api
   */
  startTetramino () {
    this.infoTetramino.type = 'Tetramino'
    return this.infoTetramino
  }
  /**
   * move the tetramino to right
   * @return {json} json with information for api
   */
  moveRight () {
    this.infoTetramino.move.right = true
    this.infoTetramino.move.left = false
    return this.infoTetramino
  }
  /**
   * move the tetramino to left
   * @return {json} json with information for api
   */
  moveLeft () {
    this.infoTetramino.move.left = true
    this.infoTetramino.move.right = false
    return this.infoTetramino
  }
  /**
   * down the tetramino
   * @return {json} json with information for api
   */
  decline () {
    this.infoTetramino.move.down = true
    return this.infoTetramino
  }
}
