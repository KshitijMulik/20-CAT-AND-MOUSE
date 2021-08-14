var bg;
var tomImage1,tomImage2,tomImage3,tomImage4;
var tom;
var jerryIameg1,jerryImage2,jerryImage3,jerryImage4;
var jerry;

function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    tomImage1=loadAnimation("images/cat1.png");
    tomImage2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImage3=loadAnimation("images/cat4.png")
    jerryImage1=loadAnimation("images/mouse1.png");
    jerryImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImage3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation("tomsleeping",tomImage1);
    tom.scale=0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerrystanding",jerryImage1);
    jerry.scale=0.2;


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x < (tom.width-jerry.widht)/2){
    tom.velocityX=0;
    tom.addAnimation("tomImage",tomImage3);
    tom.x=300;
    tom.scale=0.2;
    tom.changeAnimation("tomlastImage","tomImage4");
    jerry.addAnimation("jerryImage",jerryImage3);
    jerry.changeAnimation("jerryImage")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomrunning",tomImage2);
    tom.changeAnimation("tomrunning");

    jerry.addAnimation("jerryTeasing",jerryImage2);
    jerry.frameDelay=25;
    jerry.changeAnimation("jerryTeasing");
}

}
