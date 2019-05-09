var snake
var w = 600
var h = 600
var piece = 15
var velocity = piece
var food
var prev
function setup() {
  createCanvas(w, h)

  //starts the snake
  snake = new Snake(createVector(w/4, h/4)) 

  //starts the food
  food = new Food(createVector(w/2, h/2))
  frameRate(10)

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
  keyPressed()
}


