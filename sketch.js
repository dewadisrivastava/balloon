var air,database,airImage,airImage2,airImage3
var position,city

function preload(){
city=loadImage("cityImage.png")
airImage=loadImage("hotairballoon1.png")
airImage2=loadImage("hotairballoon2.png")
airImage3=loadImage("hotairballoon3.png")
}

function setup(){
  createCanvas(700,700)

  air=createSprite(250,600,50,50)
  air.addImage("air",airImage)
  air.scale=0.4

}

function draw(){
  background(city)
  drawSprites()

  if(keyDown("UP_ARROW")){
    air.y=air.y-10
    air.addImage("air",airImage2)
  }

  if(keyDown("DOWN_ARROW")){
    air.y=air.y+10
    air.addImage("air",airImage3)
  }

  if(keyDown("LEFT_ARROW")){
    air.x=air.x-10
    air.addImage("air",airImage)
  }

  if(keyDown("RIGHT_ARROW")){
    air.x=air.x+10
    air.addImage("air",airImage2)
  }
  text("use arrow keys to move the balloon",200,100)
}