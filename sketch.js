var ferryImg,starImg,bgImg;
var star,ferry, starBody;
var song;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ferryImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	song=loadSound("sound/JoyMusic.mp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	song.play();

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	ferry= createSprite(200,400);
	ferry.addAnimation("ferryfly",ferryImg);
	ferry.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 360 && starBody.position.y > 360 ){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {
	if(keyCode === LEFT_ARROW){
		ferry.x=ferry.x-25;
		
	}

	if(keyCode === RIGHT_ARROW){
		ferry.x=ferry.x+25;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	

	//writw code to move fairy left and right
	
}
