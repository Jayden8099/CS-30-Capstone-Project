// Plants VS Zombies
// Jayden Johnson
// 12/2/2024




//video for seed bar
//https://www.youtube.com/watch?v=KRGTaTbVZkM


const NUM_ROWS = 6; //y
const NUM_COLS = 11;  //x

let rectWidth, rectHeight;
let currentRow, currentCol;

let plantGrid =
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


let draggedPlant = null;






let seedW, seedH;
let collision = false;
let sN;



let sunAmount= 50
let sunList = [];
let sunImage;






//Image Variables
let house;
let fence;
let lawn;
let sidewalk;



//plants
let plantList = [];

let peashooter;
let sunflower;
let wallnut;
let potato;
let repeater;

//seedbar
let seedList = [];

let peashooterSeed;
let sunflowerSeed;
let wallnutSeed;
let potatoSeed;
let repeaterSeed;




function preload() {
  //background
  fence = loadImage('assets/fence.jpg');
  house = loadImage('assets/House.png');
  lawn = loadImage('assets/lawn.PNG');
  sidewalk = loadImage('assets/Sidewalk.png');


  //plants
  peashooter = loadImage('assets/peashooter.gif');
  sunflower = loadImage('assets/sunflower.gif');
  wallnut = loadImage('assets/WallNut.gif');
  potato = loadImage('assets/Potato.gif');
  repeater = loadImage('assets/Repeater.gif');




  //seedbar
  peashooterSeed = loadImage('assets/PeashooterSeedPack.png');
  sunflowerSeed = loadImage('assets/SunflowerSeedPack.png');
  wallnutSeed = loadImage('assets/WallNutSeed.png');
  potatoSeed = loadImage('assets/PotatoMineSeed.png');
  repeaterSeed = loadImage('assets/RepeaterSeedPacket.png')



  //sun
  sunImage = loadImage('assets/sun.gif')
}






function setup() {
  createCanvas(1900, 950);


  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;

  //displays the seedBar
  seedList.push(new seedDisplay(500, 80, 160, 110, 1));
  seedList.push(new seedDisplay(665, 80, 165, 114, 2));
  seedList.push(new seedDisplay(832, 80, 165, 110, 3));
  seedList.push(new seedDisplay(1000, 79, 165, 115, 4));
  seedList.push(new seedDisplay(1170, 80, 165, 110, 5));


}



function draw() {
  background(255);
  determineActiveSquare();
  drawBackground();
  sunDisplay();
  //drawGrid();
  
  



  //used for displaying class
  for (let i = 0; i < plantList.length; i++) {
    plantList[i].update();
    plantList[i].display();
  }
  for (let i = 0; i < seedList.length; i++) {
    seedList[i].display();
    seedList[i].colCheck();
  }
  for (let i = 0; i < sunList.length; i++) {
    sunList[i].display();
    sunList[i].sunColCheck();

  }




  //used for dragging from seedbar
  if (draggedPlant === 1) {
    image(peashooter, mouseX - 25, mouseY - 50, 75, 75);
  }
  else if (draggedPlant === 2) {
    image(sunflower, mouseX - 25, mouseY - 50, 75, 75);
  }
  else if (draggedPlant === 3) {
    image(wallnut, mouseX - 25, mouseY - 50, 75, 75);
  }
  else if (draggedPlant === 4) {
    image(potato, mouseX - 25, mouseY - 50, 75, 75);
  }
  else if (draggedPlant === 5) {
    image(repeater, mouseX - 50, mouseY - 50, 100, 100);
  }
}


//determines what plant is being dragged
function mouseDragged() {
  if (collision && sN && draggedPlant === null) {
    draggedPlant = sN;
    collision = false;
  }


}

//if the mouse is over a valid position drops the selected plant at that location
function mouseReleased() {
  if (draggedPlant) {
    plantList.push(new plants(currentCol, currentRow, draggedPlant, plantGrid));
    draggedPlant = null;
    collision = false;
  }
}




//determines what square the mouse is currently over in the grid
function determineActiveSquare() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}


//draws a grid for debugging
function drawGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      push();
      fill(0, 0, 0, 0);
      stroke(0, 0, 0, 30)

      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
      pop();
    }
  }
}


//draws the house background
//UPDATE LATER FOR MAIN MENU
function drawBackground() {
  image(house, -115, 0);
  image(fence, 190, 0, 1537, 170);
  image(lawn, 190, 165, 1537, 790);
  image(sidewalk, 1727, 0, 200, 960);
}


function sunDisplay(){

  if(frameCount % 720 === 0){
    sunList.push(new sun(0, random(100, width - 100)));
  }






  //sun amount at the top
  push();
  fill(214,181,136)
  rect(280,25,125,160);
  pop();

  push()
  fill(0);
  textSize(35);
  text(sunAmount,325,160);
  pop();
  
  image(sunImage,305,25)
}

















