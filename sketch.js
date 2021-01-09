var jani,jerry,tani,tom,bg,timage,jimage,jlast,tlast,bgpic

function preload() {
    //load the images here
    jimage = loadImage("jerryOne.png")
    jani = loadAnimation("jerryTwo.png","jerryThree.png")
    jlast = loadAnimation("jerryFour.png")
    timage = loadImage("tomOne.png")
    tani = loadAnimation("tomTwo.png","tomThree.png")
    tlast = loadAnimation("tomFour.png")
    bgpic = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400)
    bg.addImage(bgpic)

    jerry = createSprite(200,550)
    jerry.addImage(jimage)
    jerry.scale = 0.2

    tom = createSprite(800,550)
    tom.addImage(timage)
    tom.scale = 0.2
}

function draw() {

    background(255);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2 + 100){
        tom.velocityX = 0
        tom.addAnimation("stop",tlast)
        tom.changeAnimation("stop")
        jerry.addAnimation("stop2",jlast)
        jerry.changeAnimation("stop2")
    }
    
    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("running",tani);
      tom.changeAnimation("running");

      jerry.addAnimation("teasing",jani);
      jerry.changeAnimation("teasing");
  }


}
