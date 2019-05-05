class Snake {
  constructor(start_position) {
    this.head = start_position
    this.len = 0
    this.body = []
  }

  show() {
    fill(255)
    console.log(this.head.x, this.head.y)
    rect(this.head.x, this.head.y, piece, piece)
    for(let i = 0; i < this.len; i++) {
      rect(this.body[i].x, this.body[i].y, piece, piece)
    }

  }

  move(axis, dir) {

    //shift positions
    if(this.len == this.body.length) {
      for(let i = 0; i < this.body.length - 1; i++) {
        this.body[i] = this.body[i + 1]

      }
    }
    this.body[this.len - 1] = createVector(this.head.x, this.head.y)

    if(axis === 'X') {
      this.head.x += velocity * dir
    } else if(axis === 'Y') {
      this.head.y += velocity * dir
    }

  }
  
  eat(food) {
    if(this.head.x == food.pos.x && this.head.y == food.pos.y) {
      food.generate()
      this.len++
    }

  }

  death() {
    for(let i = 0; i < this.len; i++) {
      if(this.head.x == this.body[i].x && this.head.y == this.body[i].y) {
        alert('morreu otario')
        this.len = 0
      }
    }
  }
}

function keyPressed() {
  if(keyCode === LEFT_ARROW && prev != RIGHT_ARROW) {
    prev = LEFT_ARROW
    snake.move('X', -1)
  }
  if(keyCode === RIGHT_ARROW && prev != LEFT_ARROW) {
    prev = RIGHT_ARROW
    snake.move('X', 1)
  }
  if(keyCode === UP_ARROW && prev != DOWN_ARROW) {
    prev = UP_ARROW
    snake.move('Y', -1)
  }
  if(keyCode === DOWN_ARROW && prev != UP_ARROW) {
    prev = DOWN_ARROW
    snake.move('Y', 1)
  }
}
