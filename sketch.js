var canvas;
var music;
var ground1,ground2,ground3,ground4
var ball,egdes
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground1 = createSprite(100,580,180,20)
    ground1.shapeColor = "red"
    ground2 = createSprite(300,580,180,20)
    ground2.shapeColor = "blue"
    ground3 = createSprite(500,580,180,20)
    ground3.shapeColor = "yellow"
    ground4 = createSprite(700,580,180,20)
    ground4.shapeColor = "green"

    //create box sprite and give velocity
    ball = createSprite(random(20,780),100,40,40)
    ball.velocityX=2
    ball.velocityY=2
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    if(ground1.isTouching(ball) && ball.bounceOff(ground1)){
     ball.shapeColor = rgb(0,0,255); music.play();
    }
    if(ground2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    } 
    if(ground3.isTouching(ball) && ball.bounceOff(ground3)){
     ball.shapeColor = rgb(153,0,76);
     } 
     if(ground4.isTouching(ball) && ball.bounceOff(ground4)){
     ball.shapeColor = rgb(0,100,0); 
    }


    //add condition to check if box touching surface and make it box
    drawSprites()
}
