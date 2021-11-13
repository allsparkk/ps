var speed=0
var newy=600

function preload()
{
	astro1img=loadImage('images/astro2 (1).png')
   background1=loadImage('images/planet.jpg')
   p1=loadImage('images/2p.jpg')
   
}

function setup() {
	createCanvas(800, 700);
	astrounot=new Astrounot()
	g1=new Platform()
   sip=new ship()


   basegroup=new Group()
   base2group=new Group()


   for(var i=0; i<30;i++){
      
	b1=new Base(newy)
   newy-=150
   basegroup.add(b1.body)
   base2group.add(b1.body2)
   }

	



}


function draw() {
   console.log(astrounot.body.y)
 
  background(background1);
  astrounot.body.velocityY+=0.3
  astrounot.body.collide(g1.body)
  astrounot.body.collide(basegroup)
  astrounot.body.collide(base2group,gravity)
  if(keyDown("up")&& astrounot.body.velocityY==0){
     astrounot.body.velocityY=-10.11
  }
  if(keyDown("left")&& astrounot.body.velocityY!==0){
     astrounot.body.x-=5
  }
  if(keyDown("right")&& astrounot.body.velocityY!==0){
	astrounot.body.x+=5
 }
 
  
  camera.position.y=astrounot.body.y-200



  drawSprites();
 
}

function gravity(astro,base){
   astro.velocityY=0.5
}




