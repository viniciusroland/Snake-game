class Snake {
  constructor(start_position) {
    this.head = start_position
    this.len = 0
    this.body = []
  }

  show() {
    fill(255)
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
      console.warn(this.len)
    }

  }

  death() {
    for(let i = 0; i < this.len; i++) {
      if(this.head.x == this.body[i].x && this.head.y == this.body[i].y) {
        this.len = 0
        this.body = []
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
    //
    //novas posicoes
    let nextpx = this.head.x + velocity
    let nextpy = this.head.y + velocity

    if(food.pos.y > this.head.y) {
      let there_is_piece = false
      for(let part of this.body) {
        if(this.head.y + piece == part.y && this.head.x == part.x) {
          there_is_piece = true
        }
        

      }
      if(!there_is_piece) {
        this.move('Y', 1)
      } else {
        this.move('Y', -1)
      }
    }
    //1.b. se a food esta a esquerda (y < yh)
    if(food.pos.y < this.head.y) {
      let there_is_piece = false
      for(let part of this.body) {
        if(this.head.y - piece == part.y && this.head.x == part.x) {
          there_is_piece = true
        }
        

      }
      if(!there_is_piece) {
        this.move('Y', -1)
      } else {
        this.move('Y', 1)
      }
    }
    //e fazemos o movimento correspondente
    //
    //2. e se tem velocidade positiva no eixo y (indo pra baixo), checamos:
    //
    //2.a. se a food esta a direta(x < xh)
    if(food.pos.x < this.head.x) {
      let there_is_piece = false
      for(let part of this.body) {
        if(this.head.x - piece == part.x && this.head.y == part.y) {
          there_is_piece = true
        }
        

      }
      if(!there_is_piece) {
        this.move('X', -1)
      } else {
        this.move('X', 1)

      }
    }

    //2.b. se a food esta a esquerda(x > xh)
    if(food.pos.x > this.head.x) {
      let there_is_piece = false
      for(let part of this.body) {
        if(this.head.x + piece == part.x && this.head.y == part.y) {
          there_is_piece = true
        }
        

      }
      if(!there_is_piece) {
        this.move('X', 1)
      } else {
        this.move('X', -1)
      }
    }


    //e fazemos o movimento correspondente
    //
    //3. verificar se o movimento colidira com alguma parede, ou seja:
    //
    //yh + 1 >= window.height
    //xh + 1 >= window.width
    //
    //4. verificar se o movimento colidira com alguma parte do corpo, ou seja:
    //
    //xh + velocity == body[i].x
    //yh + velocity == body[i].y
    //
    //5. caso esteja na mesma linha da velocidade apenas continue se movendo.
  }
}

