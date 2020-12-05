var thicknes,wall; 
var bullet,speed,weight;

function setup() { 
  createCanvas(1600,400);
   bullet = createSprite(150, 200, 50, 10); 
   wall = createSprite(1200,200,60,height/2); 
   speed = random(150,1300); 
     weight = random(30,52); 
        thickness = random(22,83);}
   function draw() { 
     background("black");
    bullet.velocityX = 60;
    

    if(hasCollided(bullet,wall)){ 
      bullet.velocityX=0; 
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness); 
      if(damage>10){ 
      wall.shapeColor=color(255,0,0); }
      if(damage<10){ 
        wall.shapeColor=color(0,255,0);
       }
       }
    drawSprites(); } 

    function hasCollided(lbullet,lwall){
    bulletRightEdge=lbullet.x +lbullet.width; 
    wallLeftEdge=lwall.x; 
   if(bulletRightEdge>=wallLeftEdge){ 
   return true; } 
   {
    return false;
   }
   }
    








