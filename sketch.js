var astronaut; 
function preload() {
  bgImg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym11.png","images/gym12.png","images/gym1.png","images/gym2.png");
  //eat = loadAnimation("images/eat1.png","eat2.png");
  //drink = loadAnimation("images/drink1.png","drink2.png");
  move = loadAnimation("images/move.png","images/move1.png");



}



function setup() {
  createCanvas(400,400);

 astronaut = createSprite(300,230,200,200);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale = 0.1;
 
 stroke = 3
 text("Instructions:",-200,400);
 text("Up Arrow = Brushing",-200,300);
 text("Down Arrow = Gymming",-200,200);
 text("Left Arrow = Eating",-200,100);
 text("Right Arrow = Bathing",-200,0);
 text("m Key = Moving",-200,-100);

}

function draw() {
  background(bgImg);
  
  

 
 
  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }
/*if (keyDown("DOWN_ARROW")) {
  astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
}
/*if (keyDown("LEFT_ARROW")) {
  astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
}
if (keyDown("RIGHT_ARROW")) {
  astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
}
*/
if (keyDown("m")) {
  astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 5;
    astronaut.velocityY = 3;
    
}

  
drawSprites()
  
}