// Plants VS Zombies
// Jayden Johnson
// 12/2/2024

let NUM_ROWS = 5;
let NUM_COLS = 9;

let rectWidth, rectHeight;
let currentRow, currentCol;

let plantGrid =
  [[0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]];


let draggedPlant = 1;






//Image Variables
let mainBG;

let peashooter;











function preload() {
  mainBG = loadImage('assets/Main_BG.png');
  peashooter = loadImage('assets/peashooter.gif');
}






function setup() {
  createCanvas(1900, 1000);
  imageMode(CENTER);

  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
}

function draw() {
  background(255);
  determineActiveSquare();
  drawBackground();
  drawGrid();

}


function determineActiveSquare() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}


function drawGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(0,0,0,0);
      rect(x * rectWidth + 300, y * rectHeight + 150, rectWidth, rectHeight);
      if(plantGrid[y][x]=== 1){
        image(peashooter,currentCol*rectWidth,currentRow*rectHeight,100,100);
      }

    }
  }
}



function drawBackground() {
  image(mainBG, width / 2, height / 2, 1900, 1000);
}