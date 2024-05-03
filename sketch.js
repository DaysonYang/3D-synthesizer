let pg
let pg1
let pg2
let pg3
let pg4
let pg5
let pg6
let a=0
let b=0
let c=0
let d=0
let e=0
let f=0
let drum
let bass
let t =0

function preload() {
  drum =loadSound('drum.mp3')
  bass =loadSound ('bass.mp3')
}
function setup() {
   drum.loop();
   bass.loop();
   bass.amp(0);
  

  //
  createCanvas(500, 500, WEBGL);
  //
  pg =createGraphics(100,100);
  pg.background(200);
  pg = createGraphics(200, 200);
  pg.textSize(10);
  //text
  pg1 = createGraphics(200, 200);
  pg1.textSize(45);
  pg2 = createGraphics(200, 200);
  pg2.textSize(45);
  pg3 = createGraphics(200, 200);
  pg3.textSize(45);
  pg4 = createGraphics(200, 200);
  pg4.textSize(45);
  pg5 = createGraphics(200, 200);
  pg5.textSize(45);
  pg6 = createGraphics(200, 200);
  pg6.textSize(45);
  //camera
  camera(0, -30, 100, 0, 0, 0, 0, 1, 0);
  perspective(PI/3, 1, 5*sqrt(3), 500*sqrt(4));
  //
}
function draw() {
   
    
 // rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //background
  background(0);
  noStroke();
  strokeWeight(2);
  orbitControl();
  //box
  noFill();
  
  //circle b
  translate(0,0,50);
  //fill(80,150,249)
  
  texture(pg1);
  circle(-10,-20, 20);
  pg1.background(8*b,15*b,24.9*b);
 //circle d
  rotateY(radians(90));
  translate(-25,-20,25)
  //fill(200,160,100)
  texture(pg2);
  circle(50,0, 20);
  pg2.background(20*d,16*d*2,10*d/2+d);
  //circle a
   rotateY(radians(180));
   translate(-50,50,50);
   fill(80,250,249)
 
   texture(pg3);
   circle(-10,-20, 40);
   pg3.background(8*a,25*a,24.9*a);
  //circle c
  rotateY(radians(270));
   translate(0,0,75);
   fill(100,120,200)

   texture(pg4);
   circle(-30,-20, 20);
   pg4.background(10*c,12*c,20*c);
  //circle e
  translate(-15,5,-49);
  rotateX(radians(270));
  fill(180,130,200);
  texture(pg5);
  circle (0,0,30);
  pg5.background(18*e,13*e,20*e);
 
  //circle f
  translate(0,-20,-70);
  rotateX(radians(180));
  fill(120,180,200)
  texture(pg6);
  circle (0,0,30);
  pg6.background(12*f,18*f,20*f);
  //splash page
  rotateX(radians(90));
  rotateZ(radians(180));
  translate(-30,-25,90)
  strokeWeight(1);
  stroke(2);
  
  texture(pg);
  
  pg.text('It is an audio synthesizer that contains  ',10,30)
 
  pg.text('6 different sounds in a 3D environment.',10,40)
  pg.text('Those sounds can be acticvated by ',10,50)
  pg.text('pressing a, b, c, d, e, f on the keyboard.',10,60)
   pg.text('There are also the drum set and ',10,70) 
  pg.text('a bass loop in the setting.',10,80)
  pg.text('by Tianqi Yang and Yuxuan Jing',40,150)
  pg.text('please click this window to play',20,100)
  
  
  square(24+t,24+t,30)
  pg.background(250)
 
  if (mouseIsPressed === true) {
    
  t=10000
 
  bass.amp(1);
  }
  
  
 //test
  console.log(a,b,c,d,e,f);
}
function keyPressed() {
  //b
  if (key === 'b') {
    if(b===0){
      b= random(1,25)
    }
    else{
      b=0
    }
  }
  //d
  if (key === 'd') {
    if(d===0){
      d=random(1,10);
    }
    else{
      d=0  
    }
  }
  //a
  if (key === 'a') {
    if(a===0){
      a=random(0,30)
    }
    else{
      a=0
    }
  }
//c
  if (key === 'c') {
    if(c===0){
      c=random(1,40)
    }
    else{
      c=0
    }
  }
//e
  if (key === 'e') {
    if(e===0){
      e=random(0,10);
      
    }
    else{
      e=0
    }
  }
  //f
  if (key === 'f') {
    if(f===0) {
      f=random(0,100);
   }
    else{
      f=0
    }
  }
  
}
function playSound(key) {
    let soundFile;
    switch (key) {
        case 'a':
            soundFile = 'sound 1.wav'; 
           break;
        case 'b':
            soundFile = 'sound 2.wav'; 
            break;
        case 'c':
            soundFile = 'sound 3.wav'; 
            break;
        case 'd':
            soundFile = 'sound 4.wav'; 
            break;
        case 'e':
            soundFile = 'sound 5.wav'; 
            break;
        case 'f':
            soundFile = 'sound 6.wav'; 
            break;
        // Add more cases as needed
        default:
            // If the key doesn't match any case, do nothing
            return;
    }
    const audio = new Audio(soundFile);
    audio.play();
    
}
document.addEventListener('keydown', function(event) {
    // Call playSound function with the key pressed
    playSound(event.key);
});
