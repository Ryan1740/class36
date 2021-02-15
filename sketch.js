var database;
var playercount;
var gameState=0;
var player,form, game;
function setup(){
  createCanvas(400,400);
  database= firebase.database();
  //game =createSprite(100,100,10,10)
  game=new Game();
 game.getState();
 game.start();
  
}


function draw(){
  //drawSprites();
 // form=new Form;
 // form.display();
 
}
