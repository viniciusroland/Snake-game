var snake;
var food;
var size;



class Snake {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.total = 0;
		this.tail = [];
	}
	show() {
		fill(255);
		for(var j = 0; j < this.total; j++){

		}
		rect(this.x, this.y, this.size, this.size);
	}
	move() {
		keyPressed();
		fill(255);
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, size, size);
		}
	}
}

class Food {
	constructor(x, y, size){
		this.pos = createVector(x, y);
		this.size = size;
	}
	show() {
		fill(200);
		rect(this.pos.x, this.pos.y, this.size, this.size);
	}
}



function keyPressed() {
	if(snake.total == snake.tail.length) {
		for(var i = 0; i < snake.tail.length-1; i++) {
			snake.tail[i] = snake.tail[i+1];
		}
	}
	snake.tail[snake.total-1] = createVector(snake.x, snake.y);

	if(keyCode === UP_ARROW) {
		snake.y += -size;
	} else if (keyCode === DOWN_ARROW) {
		snake.y += size;
	} else if (keyCode === LEFT_ARROW) {
		snake.x += -size;
	} else if (keyCode === RIGHT_ARROW) {
		snake.x += size;
	}
	return false;
}

function eat() {
	if (dist(food.pos.x, food.pos.y, snake.x, snake.y) < 5) {
		snake.total++;
		console.log(snake.total);
		pickLocation();
		
	}
}
function pickLocation() {
	var col = floor(width/size);
	var row = floor(height/size);
	food.pos.x = floor(random(col))*size;
	food.pos.y = floor(random(row))*size;
	//food.pos.mult(size);
}

function setup() {
	size = 15;
	createCanvas(700, 350);
	snake = new Snake(45, 45, size);
	food = new Food(90, 90, size);
	frameRate(10);
}


function draw() {
	background(51);
	food.show();
	snake.move();
	snake.show();
	eat();
}
