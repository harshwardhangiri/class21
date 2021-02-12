var fixedRect,movingRect;
var fixed1,fixed2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixed1= createSprite(100, 200, 50, 80);
  fixed2= createSprite(300, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixed1.shapeColor="green";
  fixed2.shapeColor="green";
  fixedRect.shapeColor="green"
}
function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log("movingrect "+movingRect.x);
  console.log("fixedrect "+fixedRect.x);

 if( istouching(movingRect,fixed2)){
fixed2.velocityY=2;
 }
 if( istouching(movingRect,fixed1)){
  fixed1.velocityY=2;
   }
   if( istouching(movingRect,fixedRect)){
    fixedRect.velocityY=-2;
     }
  drawSprites();
}


