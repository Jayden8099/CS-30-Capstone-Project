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

//seedbar
let seedList = [];

let peashooterSeed;
let sunflowerSeed;
let wallnutSeed;




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





  //seedbar
  peashooterSeed = loadImage('assets/PeashooterSeedPack.png');
  sunflowerSeed = loadImage('assets/SunflowerSeedPack.png');
  wallnutSeed = loadImage('assets/WallNutSeed.png')

}






function setup() {
  createCanvas(1900, 950);


  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;

  //displays the seedBar
  seedList.push(new seedDisplay(500, 80, 160, 110, 1));
  seedList.push(new seedDisplay(665, 80, 165, 114, 2));
  seedList.push(new seedDisplay(832, 80, 165, 110, 3));
}













function draw() {
  background(255);

  determineActiveSquare();
  drawBackground();
  drawGrid();




  //used for displaying class
  for (let i = 0; i < plantList.length; i++) {
    plantList[i].update();
    plantList[i].display();
  }
  for (let i = 0; i < seedList.length; i++) {
    seedList[i].display();
    seedList[i].colCheck();
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
}


//determines what plant is being dragged
function mouseDragged() {
  if (collision && sN === 1 && draggedPlant === null) {
    draggedPlant = 1;
    collision = false;
  }
  else if (collision && sN === 2 && draggedPlant === null) {
    draggedPlant = 2;
    collision = false;
  }
  else if (collision && sN === 3 && draggedPlant === null) {
    draggedPlant = 3;
    collision = false;
  }

}

//if the mouse is over a valid position drops the selected plant at that location
function mouseReleased() {
  if (draggedPlant === 1) {
    plantList.push(new plants(currentCol, currentRow, 1, plantGrid));
    draggedPlant = null;
    collision = false;

  }
  else if (draggedPlant === 2) {
    plantList.push(new plants(currentCol, currentRow, 2, plantGrid));
    draggedPlant = null;
    collision = false;

  }
  else if (draggedPlant === 3) {
    plantList.push(new plants(currentCol, currentRow, 3, plantGrid));
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
    else if (this.type === 3 && this.plantGrid[this.row][this.col] === 0) {
      this.plantGrid[this.row][this.col] = 3;
    }
  }







  display() {
    for (let x = 0; x < NUM_COLS; x++) {
      for (let y = 0; y < NUM_ROWS; y++) {
        if (this.plantGrid[y][x] === 1) {
          if (x > 0 && x < 10 && y > 0) {
            image(peashooter, x * rectWidth + 35, y * rectHeight + 20, 100, 100);
          }
        }
        else if (this.plantGrid[y][x] === 2) {
          if (x > 0 && x < 10 && y > 0) {
            image(sunflower, x * rectWidth + 35, y * rectHeight + 20, 100, 100);
          }
        }
        else if (this.plantGrid[y][x] === 3) {
          if (x > 0 && x < 10 && y > 0) {
            image(wallnut, x * rectWidth + 35, y * rectHeight + 25, 100, 100);
          }
        }
      }
    }
  }
}














