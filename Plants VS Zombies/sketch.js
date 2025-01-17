// Plants VS Zombies
// Jayden Johnson
// 12/2/2024




const NUM_ROWS = 6; //y
const NUM_COLS = 11;  //x

let rectWidth, rectHeight;
let currentRow, currentCol;


//contains the rows and columns of all plants
let plantGrid =
  [[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
  [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7]];




//used for plant dragging system
let draggedPlant = null; // 1 = peashooter, 2 = Sunflower, 3 = Wallnut, 4 = Potato Mine, 5 = Repeater
let seedW, seedH;
let collision = false;
let sN;


//curency system
let sunAmount = 5000
let sunList = [];
let sunImage;
let plantCost;






//Image Variables

//Background
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

//plant abilities

let peaList = [];
let peashot;




//seedbar
let seedList = [];

let peashooterSeed;
let sunflowerSeed;
let wallnutSeed;
let potatoSeed;
let repeaterSeed;

//Zombies
let zombieList = [];

let zombieWalk;
let zombieDeath;
let zombieAttack;


let score = 0;

let lossCheck = false;
let deathScreen;
let restartTimer = 10;









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

  //plant abilities
  peashot = loadImage('assets/peashot.png');




  //seedbar
  peashooterSeed = loadImage('assets/PeashooterSeedPack.png');
  sunflowerSeed = loadImage('assets/SunflowerSeedPack.png');
  wallnutSeed = loadImage('assets/WallNutSeed.png');
  potatoSeed = loadImage('assets/PotatoMineSeed.png');
  repeaterSeed = loadImage('assets/RepeaterSeedPacket.png')



  //sun
  sunImage = loadImage('assets/sun.gif')

  //zombies
  zombieWalk = loadImage('assets/zombiewalk.gif');
  zombieAttack = loadImage('assets/zombieattack.gif');
  zombieDeath = loadImage('assets/zombiewalk.gif');


  //deathscreen
  deathScreen = loadImage('assets/deathscreen.png');
}






function setup() {
  createCanvas(1900, 950);


  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;


  //Creates a starter zombie
  zombieList.push(new Zombie(int(random(5) + 1), width, 0))


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
  zombieSpawner();
  reset();
  //drawGrid();





  //used for displaying classes
  //checks if you have lost the game before running
  if (lossCheck === false) {
    for (let i = 0; i < plantList.length; i++) {
      plantList[i].update();
      plantList[i].display();
      plantList[i].abilities();
      plantList[i].death();
    }
    for (let i = 0; i < peaList.length; i++) {
      peaList[i].display();
      peaList[i].update();
      peaList[i].colCheck();

      //checks if peashots are in the bounds of the screen and removes if they are not
      if (peaList[i].inBoundCheck()) {
        peaList.splice(i, 1)
      }
      //checks if peashots have hit a zombie and removes if true
      else if (peaList[i].colCheck()) {
        peaList.splice(i, 1);
      }


    }
    for (let i = 0; i < seedList.length; i++) {
      seedList[i].display();
      seedList[i].colCheck();
    }
    for (let i = 0; i < sunList.length; i++) {
      sunList[i].display();

      //checks if the Mouse pos is within the hitbox of a sun
      //and adds money and removes sun if true
      if (sunList[i].sunColCheck()) {
        sunAmount += 25;
        sunList.splice(i, 1);

      }
    }
    for (let i = 0; i < zombieList.length; i++) {
      zombieList[i].display();
      zombieList[i].update();
      zombieList[i].gridCheck();

      //checks if a zombie still has health and removes it if dead
      if (zombieList[i].zHealth <= 0) {
        zombieList.splice(i, 1);
        score++;
      }
    }
  }





  //used for dragging from seedbar
  //checks if you have the money to buy a plant
  //displays dragged plant at mouse pos
  if (draggedPlant === 1) {
    plantCost = 100;
    if (sunAmount >= plantCost) {
      image(peashooter, mouseX - 25, mouseY - 50, 75, 75);
    }
  }
  else if (draggedPlant === 2) {
    plantCost = 50;
    if (sunAmount >= plantCost) {
      image(sunflower, mouseX - 25, mouseY - 50, 75, 75);
    }
  }
  else if (draggedPlant === 3) {
    plantCost = 75;
    if (sunAmount >= plantCost) {
      image(wallnut, mouseX - 25, mouseY - 50, 75, 75);
    }
  }
  else if (draggedPlant === 4) {
    plantCost = 50;
    if (sunAmount >= plantCost) {
      image(potato, mouseX - 25, mouseY - 50, 75, 75);
    }
  }
  else if (draggedPlant === 5) {
    plantCost = 175;
    if (sunAmount >= plantCost) {
      image(repeater, mouseX - 50, mouseY - 50, 100, 100);
    }
  }
}


//determines what plant is being dragged
// 1 = Peashooter, 2 = Sunflower, 3 = Wallnut, 4 = Potato Mine, 5 = Repeater

function mouseDragged() {
  if (collision && sN && draggedPlant === null) {
    draggedPlant = sN;
    collision = false;
  }


}

//if the mouse is over a valid position drops the selected plant at that location
//subtracts the price of plant from total and pushes new plants object
function mouseReleased() {
  if (draggedPlant && plantGrid[currentRow][currentCol] === 0) {
    if (draggedPlant && sunAmount >= plantCost) {
      plantList.push(new plants(currentCol, currentRow, draggedPlant, plantGrid));
      sunAmount -= plantCost;
    }
  }
  //resets the dragged plant and collision
  draggedPlant = null;
  collision = false;

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
function drawBackground() {
  image(house, -115, 0);
  image(fence, 190, 0, 1537, 170);
  image(lawn, 190, 165, 1537, 790);
  image(sidewalk, 1727, 0, 200, 960);




  push();
  textSize(64);
  fill(0);
  text('Score: ' + score, width - 600, 100)






  pop();
}



function sunDisplay() {
  //every 720 frames(12 seconds) a sun falls from the sky
  if (frameCount % 720 === 0 && lossCheck === false) {
    sunList.push(new sun(0, random(100, width - 100)));
  }

  //sun amount at the top
  //tells you how much money you have
  push();
  fill(214, 181, 136)
  rect(280, 25, 125, 160);
  pop();

  push()
  fill(0);
  textSize(35);
  textAlign(CENTER);
  text(sunAmount, 342.5, 160);
  pop();
  image(sunImage, 306, 25)
}


function zombieSpawner() {
  //every 720 frames(12 seconds) a zombie spawns in a random row
  if (score < 15) {
    if (frameCount % 720 === 0 && lossCheck === false) {
      zombieList.push(new Zombie(int(random(5) + 1), width, 0))
    }
  }
  if (score < 40 && score > 15) {
    if (frameCount % 540 === 0 && lossCheck === false) {
      zombieList.push(new Zombie(int(random(5) + 1), width, 0))
    }
  }
}



function reset() {
  //used for if a zombie touches the house on the left
  //causing you to lose the game
  if (lossCheck === true) {
    push();
    fill(100, 0, 100);
    rect(0, 0, width, height)
    imageMode(CENTER);
    image(deathScreen, width / 2, height / 2)


    fill(255);
    textSize(64);
    text(restartTimer, width / 2 - 25, height / 2 + 300)
    pop();


    //resets all the plants, suns, and zombies
    plantGrid = [[7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
    [8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7]];

    plantList = [];
    zombieList = [];
    peaList = [];
    sunList = [];
    score = 0;

    //every 60 frames (1 sec) the timer -1 until it hits 0
    //then the game restarts
    if (frameCount % 60 === 0) {
      restartTimer--;
      if (restartTimer === 0) {
        lossCheck = false;
        restartTimer = 5;
      }
    }
  }

}
















