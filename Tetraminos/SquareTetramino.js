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
    return this.infoTetramino
  }

  /**
   * modify values for the new position of tetramino to turn
   * @return {json} json with information for api
   */
  turn () {
    this.infoTetramino['turn'] = true
    this.infoTetramino['tetramino-periphery-positions']['turn'] = null
    return this.infoTetramino
  }

  /**
   * modify values for the new position of tetramino to decline
   * @return {json} json with information for api
   */
  decline () {}

  /**
   * modify values for the new position of tetramino to move right
   * @return {json} json with information for api
   */
  moveRight () {}

  /**
   * modify values for the new position of tetramino to move left
   * @return {json} json with information for api
   */
  moveLeft () {}
}
