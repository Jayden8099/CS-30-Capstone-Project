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


//SeedBar Variables

//peashooter
let seedX1, seedY1, barLeft1, barRight1, barTop1, barBottom1;

//sunflower
let seedX2, seedY2, barLeft2, barRight2, barTop2, barBottom2;






let seedW, seedH;
let collision = false;
let sN;










//Image Variables
let house;
let fence;
let lawn;
let sidewalk;



//plants
let plantList = [];
let peashooter;
let sunflower;

//seedbar
let peashooterSeed;
let sunflowerSeed;




function preload() {
  //background
  fence = loadImage('assets/fence.jpg');
  house = loadImage('assets/House.png');
  lawn = loadImage('assets/lawn.PNG');
  sidewalk = loadImage('assets/Sidewalk.png');


  //plants
  peashooter = loadImage('assets/peashooter.gif');
  sunflower = loadImage('assets/sunflower.gif');





  //seedbar
  peashooterSeed = loadImage('assets/PeashooterSeedPack.png');
  sunflowerSeed = loadImage('assets/SunflowerSeedPack.png');

}






function setup() {
  createCanvas(1900, 950);


  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
}













function draw() {
  background(255);

  determineActiveSquare();
  drawBackground();
  drawGrid();
  seedBar();



  //used for displaying class
  for (let i = 0; i < plantList.length; i++) {
    plantList[i].update();
    plantList[i].display();
  }




  //used for dragging from seedbar
  if (draggedPlant === 1) {
    image(peashooter, mouseX - 25, mouseY - 50, 75, 75);
  }
  else if (draggedPlant === 2) {
    image(sunflower, mouseX - 25, mouseY - 50, 75, 75);
  }

}


//determines what plant is being dragged
function mouseDragged() {
  if (collision && sN === 1 && draggedPlant === null) {
    draggedPlant = 1;
  }
  else if (collision && sN === 2 && draggedPlant === null) {
    draggedPlant = 2;
  }

}

//if the mouse is over a valid position drops the selected plant at that location
function mouseReleased() {
  if (draggedPlant === 1) {
    plantList.push(new plants(currentCol, currentRow, 1, plantGrid));
    draggedPlant = null;
  }
  else if (draggedPlant === 2) {
    plantList.push(new plants(currentCol, currentRow, 2, plantGrid));
    draggedPlant = null;
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





//Holds all plants and locations
class plants {
  constructor(col, row, type, plantGrid) {
    this.col = col;
    this.row = row;
    this.type = type;
    this.plantGrid = plantGrid;
  }

  //updates the grid to the selected plant
  update() {
    if (this.type === 1 && this.plantGrid[this.row][this.col] === 0) {
      this.plantGrid[this.row][this.col] = 1;
    }
    else if (this.type === 2 && this.plantGrid[this.row][this.col] === 0) {
      this.plantGrid[this.row][this.col] = 2;
    }
  }







  display() {
    for (let x = 0; x < NUM_COLS; x++) {
      for (let y = 0; y < NUM_ROWS; y++) {
        if (this.plantGrid[y][x] === 1) {
          if (x > 0 && x < 10 && y > 0) {
            image(peashooter, x * rectWidth + 50, y * rectHeight + 35, 75, 75);
          }
        }
        else if (this.plantGrid[y][x] === 2) {
          if (x > 0 && x < 10 && y > 0) {
            image(sunflower, x * rectWidth + 50, y * rectHeight + 35, 75, 75);
          }
        }
      }
    }
  }





}



function seedBar() {

  //Peashooter
  push();
  rectMode(CENTER);
  seedX1 = 500;
  seedY1 = 80;
  seedW = 175;
  seedH = 125;

  barLeft1 = seedX1 - seedW / 2;
  barRight1 = seedX1 + seedW / 2;
  barTop1 = seedY1 - seedH / 2;
  barBottom1 = seedY1 + seedH / 2;

  fill(255, 255, 255, 0);
  noStroke();
  rect(seedX1, seedY1, seedW, seedH);
  image(peashooterSeed, seedX1 - seedW / 2, seedY1 - seedH / 2, 175, 125);
  pop();

  if (mouseX > barLeft1 && mouseX < barRight1) {
    if (mouseY > barTop1 && mouseY < barBottom1) {
      collision = true;
      sN = 1;

    }
    else {
      collision = false;
      sN = null;
    }
  }



  //sunflower

  push();
  rectMode(CENTER);
  seedX2 = 687.5;
  seedY2 = 80;

  barLeft2 = seedX2 - seedW / 2;
  barRight2 = seedX2 + seedW / 2;
  barTop2 = seedY2 - seedH / 2;
  barBottom2 = seedY2 + seedH / 2;

  fill(255, 255, 255, 0);
  noStroke();

  rect(seedX2, seedY2, seedW, seedH);
  image(sunflowerSeed, seedX2 - seedW / 2, seedY2 - seedH / 2, 175, 125);
  pop();

  if (mouseX > barLeft2 && mouseX < barRight2) {
    if (mouseY > barTop2 && mouseY < barBottom2) {
      collision = true;

      sN = 2;

    }
    else {
      collision = false;
      sN = null;
    }
  }




















}