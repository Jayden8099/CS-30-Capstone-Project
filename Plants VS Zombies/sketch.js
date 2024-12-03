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
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]];


let draggedPlant;








//Image Variables
let house;
let fence;
let lawn;
let sidewalk;


let plantList = [];


let peashooter;







function preload() {
  fence = loadImage('assets/fence.jpg');
  house = loadImage('assets/House.png');
  lawn = loadImage('assets/lawn.PNG');
  sidewalk = loadImage('assets/Sidewalk.png');



  peashooter = loadImage('assets/peashooter.gif');

}






function setup() {
  createCanvas(1900, 950);


  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;

  plantList.push(new plants(1, 1, 1, plantGrid));

}













function draw() {
  background(255);
  determineActiveSquare();
  drawBackground();
  drawGrid();


  for (let i = 0; i < plantList.length; i++) {
    plantList[i].update();
    plantList[i].display();
  }





  if (draggedPlant === 1) {
    image(peashooter, mouseX - 25, mouseY - 50, 75, 75);
  }

}



function mouseDragged() {
  draggedPlant = 1;

}

function mouseReleased() {
  draggedPlant = 0;
}










function determineActiveSquare() {
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}


function drawGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      push();
      fill(0, 0, 0, 0);
      stroke(0, 0, 0, 30)

      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
      pop();
      // if (plantGrid[y][x] === 1) {
      //   if (x > 0 && x < 10 && y > 0) {
      //     image(peashooter, x * rectWidth + 50, y * rectHeight + 35, 75, 75);
      //   }
      // }

    }
  }
}



function drawBackground() {
  image(house, -115, 0);
  image(fence, 190, 0, 1537, 170);
  image(lawn, 190, 165, 1537, 790);
  image(sidewalk, 1727, 0, 200, 960);
}






class plants {
  constructor(col, row, type, plantGrid) {
    this.col = col;
    this.row = row;
    this.type = type;
    this.plantGrid = plantGrid;
  }

  update() {
    if(this.type === 1){
      this.plantGrid[this.col][this.row] = 1;
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
      }
    }
  }





}