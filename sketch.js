function setup() {
  createCanvas(800,400);
  FixedRect=createSprite(200, 100, 50, 50);
  FixedRect2=createSprite(200, 400, 50, 50);
  FixedRect2.velocityY=-2;
  MovingRect=createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  MovingRect.x = mouseX; 
  MovingRect.y = mouseY; 
 
  if(isTouching(FixedRect2,MovingRect)) {
    MovingRect.shapeColor= "blue";
    FixedRect2.shapeColor= "blue";
  }
  else {
    MovingRect.shapeColor= "black";
    FixedRect2.shapeColor= "black";
  }
  bounceOff(FixedRect,FixedRect2);
  drawSprites();
}
function isTouching(object1,object2) {
  if (object1.width/2+object2.width/2>=object1.x-object2.x
    &&object1.width/2+object2.width/2>=object2.x-object1.x
    &&object1.height/2+object2.height/2>=object1.y-object2.y
    &&object1.height/2+object2.height/2>=object2.y-object1.y){ 
   return true
  }
  else {
    return false
  }
}
function bounceOff(object1,object2) {
  if(object1.width/2+object2.width/2>=object1.x-object2.x&&object1.width/2+object2.width/2>=object2.x-object1.x){
    object1.velocityX=object1.velocityX*-1;
    object2.velocityX=object2.velocityX*-1;
  }
  if(object1.height/2+object2.height/2>=object1.y-object2.y
    &&object1.height/2+object2.height/2>=object2.y-object1.y){
      object1.velocityY=object1.velocityY*-1;
      object2.velocityY=object2.velocityY*-1;
  }
}