class Snake {
  constructor(start_position) {
    this.head = start_position
    this.len = 0
    this.body = []
  }

  show() {
    fill(255)
    //rect(this.head.x, this.head.y, piece, piece)
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
        this.len = 0
        alert('morreu otario')
      }
    }
  }

  //ai
  
  think_move(food) {
    //admitindo a head como a origem de um sistema de coordenadas x,y.
    //
    //1. tendo velocidade positiva no eixo x (indo para a direita), checamos:
    //
    //1.a. se a food esta a direita (y > yh)
    if(food.pos.y > this.head.y) {
      this.move('Y', 1)
    }
    //1.b. se a food esta a esquerda (y < yh)
    if(food.pos.y < this.head.y) {
      this.move('Y', -1)
    }
    //e fazemos o movimento correspondente
    //
    //2. e se tem velocidade positiva no eixo y (indo pra baixo), checamos:
    //
    //2.a. se a food esta a direta(x < xh)
    if(food.pos.x < this.head.x) {
      this.move('X', -1)
    }
    //2.b. se a food esta a esquerda(x > xh)
    if(food.pos.x > this.head.x) {
      this.move('X', 1)
    }
    //e fazemos o movimento correspondente
    //
    //3. verificar se o movimento colidira com alguma parede, ou seja:
    //
    //yh + 1 >= window.height
    if(this.head.y + piece >= h) {
      this.move('X', -1)
    }
    //xh + 1 >= window.width
    if(this.head.x + piece >= w) {
      this.move('Y', 1)
    }
    //
    //4. verificar se o movimento colidira com alguma parte do corpo, ou seja:
    //
    //xh + 1 == body[i].x
    //yh + 1 == body[i].y
    //
    //5. caso esteja na mesma linha da velocidade apenas continue se movendo.
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
