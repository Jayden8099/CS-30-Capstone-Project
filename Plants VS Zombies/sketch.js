// Plants VS Zombies
// Jayden Johnson
// 12/2/2024

const NUM_ROWS = 6;
const NUM_COLS = 11;

let rectWidth, rectHeight;
let currentRow, currentCol;

let plantGrid =
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];


let draggedPlant = 1;






//Image Variables
let house;
let fence;
let lawn;
let sidewalk;





let peashooter;







function preload() {
  fence = loadImage('assets/fence.jpg');
  house = loadImage('assets/House.png');
  lawn = loadImage('assets/lawn.PNG')
  sidewalk = loadImage('assets/Sidewalk.png');



  peashooter = loadImage('assets/peashooter.gif');

}






function setup() {
  createCanvas(1900, 1000);
  

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
      fill(0, 0, 0, 0);
      stroke(0, 0, 0, 30)
      //rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
      if (plantGrid[y][x] === 1) {
        if (x > 0 && x < 10 && y > 0) {
          image(peashooter, x * rectWidth + 50, y * rectHeight + 25, 75, 75);
        }
      }

    }
  }
}



function drawBackground() {
  image(house, -115, 0);
  image(fence, 190, 0, 1537, 170);
  image(lawn, 190, 165, 1537, 850)
  

  image(sidewalk, 1727, 0, 200, 1000);
}