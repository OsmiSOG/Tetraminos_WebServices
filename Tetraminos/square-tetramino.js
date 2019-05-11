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
   * [este metodo inicia la figura]
   * @return {[type]} [description]
   */
  startTetramino () {
    this.infoTetramino['type'] = this.infoSquareTetramino['name']
    this.infoTetramino['tetramino'] = this.SquareTetramino['']['tetramino']
    this.infoTetramino['tetramino-state'] = infoSquareTetramino['1']['tetramino'] //x , y
    this.infoSquareTetramino['current-movement'] = '1'
    this.infoTetramino['position-in-board']['values-to-zero'] = null
    this.infoTetramino['position-in-board']['values-to-one']= {
      'position-three': [4, -2],
      'position-four': [5, -2],
      'position-one': [4, -1],
      'position-two': [5, -1],
    }
    this.infoTetramino['tetramino-periphery-positions'] = null
    this.infoTetramino['tetramino-periphery-positions']['rigth'] = null
    this.infoTetramino['tetramino-periphery-positions']['left'] = { 'position-one': [4, 0], 'position-two': [4, 0] }
    return this.infoTetramino
  }

  /**
   * [este metodo gira la figura]
   * @return {[type]} [description]
   */
  turn () {
    this.infoTetramino['turn'] = true
    this.infoTetramino['tetramino-periphery-positions']['turn'] = null
    return this.infoTetramino
  }


  /**
   * [mover la figura hacia la derecha]
   * @return {[type]} [description]
   */
  moveRigth (valuesPeripheryRight) {
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
       if (this.infoSquareTetramino['current-movement'] === '1') {
         this.infoTetramino['move']['right'] = true
         // values to zero
         this.infoTetramino['position-in-board']['values-to-zero'] = ?{
           'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
           'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
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
           'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
         }
         this.infoTetramino['tetramino-periphery-positions']['right'] = {
           'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1],
           'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
         }
       }
       if (this.infoSquareTetramino['current-movement'] === '3') {
         this.infoTetramino['move']['right'] = true
         // values to zero
         this.infoTetramino['position-in-board']['values-to-zero'] = ?{
           'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
           'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
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
           'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
         }
         this.infoTetramino['tetramino-periphery-positions']['right'] = {
           'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1],
           'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
         }
     }
     if (this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] === 10 || this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] === 10) {
       this.infoTetramino['move']['right'] = false
     } else {
       if (this.infoSquareTetramino['current-movement'] === '2') {
         this.infoTetramino['move']['right'] = true
         // values to zero
         this.infoTetramino['position-in-board']['values-to-zero'] = ?{
           'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
           'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
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
           'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
         }
         this.infoTetramino['tetramino-periphery-positions']['right'] = {
           'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1],
           'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
         }
       }
       if (this.infoSquareTetramino['current-movement'] === '4') {
         this.infoTetramino['move']['right'] = true
         // values to zero
         this.infoTetramino['position-in-board']['values-to-zero'] = ?{
           'position-one': this.infoTetramino['position-in-board']['values-to-one']['position-one'],
           'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
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
           'position-one': [this.infoTetramino['position-in-board']['values-to-one']['position-one'][0], this.infoTetramino['position-in-board']['values-to-one']['position-one'][1] - 1],
         }
         this.infoTetramino['tetramino-periphery-positions']['right'] = {
           'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1],
           'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
         }
     }
   } else {
     this.infoTetramino['move']['right'] = false
   }
   return this.infoTetramino
  }



  /**
   * [mover la figura hacia la izquierda]
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
      if (this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] === 0 || this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] === 0) {
        this.infoTetramino['move']['left'] = false
      } else {
        if (this.infoSquareTetramino['current-movement'] === '1') {
          this.infoTetramino['move']['left'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-four': this.infoTetramino['position-in-board']['values-to-one']['position-four'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
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
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
          }
        }
        if (this.infoSquareTetramino['current-movement'] === '3') {
          this.infoTetramino['move']['left'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-four': this.infoTetramino['position-in-board']['values-to-one']['position-four'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
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
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
          }
      }
      if (this.infoTetramino['position-in-board']['values-to-one']['position-three'][0] === 0 || this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] === 0) {
        this.infoTetramino['move']['left'] = false
      } else {
        if (this.infoSquareTetramino['current-movement'] === '2') {
          this.infoTetramino['move']['left'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-four': this.infoTetramino['position-in-board']['values-to-one']['position-four'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
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
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
          }
        }
        if (this.infoSquareTetramino['current-movement'] === '4') {
          this.infoTetramino['move']['left'] = true
          // values to zero
          this.infoTetramino['position-in-board']['values-to-zero'] = {
            'position-four': this.infoTetramino['position-in-board']['values-to-one']['position-four'],
            'position-two': this.infoTetramino['position-in-board']['values-to-one']['position-two'],
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
            'position-three': [this.infoTetramino['position-in-board']['values-to-one']['position-three'][0], this.infoTetramino['position-in-board']['values-to-one']['position-three'][1] - 1],
          }
          this.infoTetramino['tetramino-periphery-positions']['right'] = {
            'position-four': [this.infoTetramino['position-in-board']['values-to-one']['position-four'][0], this.infoTetramino['position-in-board']['values-to-one']['position-four'][1] + 1],
            'position-two': [this.infoTetramino['position-in-board']['values-to-one']['position-two'][0], this.infoTetramino['position-in-board']['values-to-one']['position-two'][1] + 1],
          }
        }
    } else {
      this.infoTetramino['move']['left'] = false
    }
    return this.infoTetramino
  }
  /**
   * [bajar la figura segun se solicite]
   * @return {[type]} [description]
   */
  decline (valuesPeripheryDown) {
    this.infoTetramino['move']['right'] = false
    this.infoTetramino['move']['left'] = false
    let zeros = false
    for (let i = 0; i < valuesPeripheryDown.length; i++) {
      if (parseInt(valuesPeripheryRight[i]) === 0) {
        zeros = true
      } else {
        zeros = false
        break
      }
    }
    console.log(zeros)
    if (zeros) {
       if (this.infoTetramino['position-in-board']['values-to-one']['position-two'][0] === 20 || this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] === 20) {
         this.infoTetramino['move']['right'] = false
       } else {
       if (this.infoSquareTetramino['current-movement'] === '1') {
         this.infoTetramino['move']['right'] = true
         // values to zero
         this.infoTetramino['position-in-board']['values-to-zero'] = ?{
           'position-four': this.infoTetramino['position-in-board']['values-to-one']['position-four'],
           'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
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
       if (this.infoSquareTetramino['current-movement'] === '3') {
         this.infoTetramino['move']['right'] = true
         // values to zero
         this.infoTetramino['position-in-board']['values-to-zero'] = ?{
           'position-four': this.infoTetramino['position-in-board']['values-to-one']['position-four'],
           'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
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
     if (this.infoTetramino['position-in-board']['values-to-one']['position-one'][0] === 10 || this.infoTetramino['position-in-board']['values-to-one']['position-four'][0] === 10) {
       this.infoTetramino['move']['right'] = false
     } else {
       if (this.infoSquareTetramino['current-movement'] === '2') {
         this.infoTetramino['move']['right'] = true
         // values to zero
         this.infoTetramino['position-in-board']['values-to-zero'] = ?{
           'position-four': this.infoTetramino['position-in-board']['values-to-one']['position-four'],
           'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
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
       if (this.infoSquareTetramino['current-movement'] === '4') {
         this.infoTetramino['move']['right'] = true
         // values to zero
         this.infoTetramino['position-in-board']['values-to-zero'] = ?{
           'position-four': this.infoTetramino['position-in-board']['values-to-one']['position-four'],
           'position-three': this.infoTetramino['position-in-board']['values-to-one']['position-three'],
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
   } else {
     this.infoTetramino['move']['right'] = false
   }
    return this.infoTetramino
  }

  lastState (currentMovement) {
   this.infoSquareTetramino['current-movement'] = currentMovement
  }
}
