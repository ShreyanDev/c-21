var fixedrect,movingrect,car,wall;
function setup() {
  createCanvas(1000,800);
 fixedrect =  createSprite(400, 350, 50, 50);
 fixedrect.shapeColor = "yellow"

 movingrect =  createSprite(500, 400, 50, 80);
 movingrect.shapeColor = "yellow"

 car = createSprite(100, 150, 30, 30);
 car.shapeColor = "purple"
 car.velocityX = 4


wall = createSprite(800, 150, 20, 50);
wall.shapeColor = "blue"
}

function draw() {
  background("black");
  movingrect.x = mouseX, movingrect.y = mouseY;
  if (isTouching( car, wall)){

    car.shapeColor = "white"

  }

  bounceOff(car, wall);
  drawSprites();
}

