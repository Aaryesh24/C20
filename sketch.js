var movingrect, rect;


function setup() {
  createCanvas(800,400);
  movingrect = createSprite(500,200,80,30);
  movingrect.shapeColor="green";
  rect = createSprite(200,200,30,80);
  rect.shapeColor="green";
  rect.debug=true;
  movingrect.debug=true;
}

function draw() {
  background("black");  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if (movingrect.x-rect.x<movingrect.width/2+rect.width/2 && 
    rect.x-movingrect.x<movingrect.width/2+rect.width/2 &&
    movingrect.y-rect.y<movingrect.height/2+rect.height/2 &&
    rect.y-movingrect.y<movingrect.height/2+rect.height/2) {
    rect.shapeColor="red";
    movingrect.shapeColor="red";
  }else {
    movingrect.shapeColor="green";
    rect.shapeColor="green";
  }

  drawSprites();
}