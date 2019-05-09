  class Food {
  constructor(start_position) {
    this.pos = start_position
  }


  generate() {
      console.log(piece)
      let new_pos = createVector(parseInt(random(w)/piece) * piece, parseInt(random(h)/piece) * piece)
      this.pos = new_pos
    }

  
  show() {

    fill(255, 0, 0)
    rect(this.pos.x, this.pos.y, piece, piece)

  }
}
