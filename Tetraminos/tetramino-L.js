const Tetramino = require('./tetramino.js')
/**
* [TetraminoL description]
*/
module.exports = class TetraminoL extends Tetramino {
/**
 * este es el constructor de la clase tetramino l
 * [constructor description]
 */
  constructor () {
    super()
    this.infoTetraminoL = require('./tetramino-L.json')
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
    this.infoTetramino['position-in-board']['values-to-one'] = { 'position-one': null, 'position-two': null, 'position-three': [4, 0], 'position-four': [5, 0] }
  }

  /**
   * este metodo se encarga del movimiento hacia la derecha del tetramino L
   * [moveRight description]
   * @return {[type]} [description]
   */
  moveRight (positionRigth) {
    if (this.infoTetraminoL['current-movement'] === 1) {
      if (this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] === 10) {
        this.infoTetramino['move']['right'] = false
      } else if (positionRigth[0] === 0 && positionRigth[1] === 0 && positionRigth[2] === 0) {

      }
    }
  }

  /**
   * Este metodo se encarga del movimiento hacia la izquierda del tetramino L
   * [moveLeft description]
   * @return {[type]} [description]
   */
  moveLeft () {}

  /**
   * Este metodo se encarga de hacer caer o bajar al tetramino
   * [decline description]
   * @return {[type]} [description]
   */
  decline () {}

  /**
   * este metodo se encarga de hacer girar al tetramino L hacia la derecha
   * [turnRight description]
   * @return {[type]} [description]
   */
  turnRight () {}

  /**
   * este metodo se encarga de hacer girar al tetramino L hacia la izquierda
   * [turnLeft description]
   * @return {[type]} [description]
   */
  turnLeft () {}

  /**
   * este metodo se encarga de revizar el ultimo estado del tetramino
   * [lastState description]
   * @return {[type]} [description]
   */
  lastState () {}
}
