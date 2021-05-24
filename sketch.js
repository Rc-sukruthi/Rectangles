var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 30, 90);
  movingRect = createSprite(400,300,80,30);

  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
    && movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  drawSprites();
}