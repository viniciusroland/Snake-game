var snake
var w = 900
var h = 600
var piece = 15
var velocity = piece
var food
var prev

function keyPressed() {
  //|| prev == LEFT_ARROW to continue moving
  if(keyCode === LEFT_ARROW || prev === LEFT_ARROW && prev != RIGHT_ARROW) {
    prev = LEFT_ARROW
    snake.move('X', -1)
  }
  if(keyCode === RIGHT_ARROW || prev === RIGHT_ARROW && prev != LEFT_ARROW) {
    prev = RIGHT_ARROW
    snake.move('X', 1)
  }
  if(keyCode === UP_ARROW || prev === UP_ARROW && prev != DOWN_ARROW) {
    prev = UP_ARROW
    snake.move('Y', -1)
  }
  if(keyCode === DOWN_ARROW || prev === DOWN_ARROW && prev != UP_ARROW) {
    prev = DOWN_ARROW
    snake.move('Y', 1)
  }
}

function setup() {
  createCanvas(w, h)

  //starts the snake
  snake = new Snake(createVector(w/4, h/4)) 

  //starts the food
  food = new Food(createVector(w/2, h/2))
  frameRate(30)

}


function draw() {
  background(51)

  //shows the food
  food.show()

  //shows the snake
  snake.show()

  //checks for food to eat
  snake.eat(food)

  //ai
  //think about the next move
  snake.think_move(food)

  //checks for deaths
  snake.death()


  //checks for arrow keys to move the snake
  //keyPressed()
}


