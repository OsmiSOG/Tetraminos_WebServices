/**
 * esta es la clase Tetramino
 * [Tetramino description]
 */
module.exports = class Tetramino {
  /**
   * [constructor description]
   */
  constructor () {
    this.infoTetramino = require('../App/info-tetramino.json')
  }

  startTetramino () {
    this.infoTetramino.type = 'Tetramino'
    return this.infoTetramino
  }
  /** este metodo se encarga de mover una figura de tetramino hacia la derecha
   * [moveRight description]
   * @return {[type]} [description]
   */
  moveRight () {
    this.infoTetramino.move.right = true
    this.infoTetramino.move.left = false
    return this.infoTetramino
  }
  /**
   * este metodo se encarga de mover una figura de tetramino hacia la izquierda
   * @return {[type]} [description]
   */
  moveLeft () {
    this.infoTetramino.move.left = true
    this.infoTetramino.move.right = false
    return this.infoTetramino
  }
  /**
   * este metodo se encarga de hacer bajar o caer una figura tetramino
   * [decline description]
   * @return {[type]} [description]
   */
  decline () {
    this.infoTetramino.move.down = true
    return this.infoTetramino
  }
}
