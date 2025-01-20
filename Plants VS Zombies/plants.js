//parent class
//Holds all plants and locations
class plants {
  constructor(col, row, type, plantGrid) {
    this.col = col;
    this.row = row;
    this.type = type;
    this.plantGrid = plantGrid;


    this.x;
    this.y;

    this.beingAte = false;




    if (type !== 3) {
      this.health = 360;
    }
    else {
      this.health = 720;
    }

  }

  //updates the grid to the selected plant
  update() {
    for (let x = 0; x < NUM_COLS; x++) {
      for (let y = 0; y < NUM_ROWS; y++) {
        if (x > 0 && x < 10 && y > 0) {
          if (this.plantGrid[this.row][this.col] === 0) {
            this.plantGrid[this.row][this.col] = this.type;
          }
        }
      }
    }
  }

  display() {
    push();
    imageMode(CENTER);

    for (let x = 0; x < NUM_COLS; x++) {
      for (let y = 0; y < NUM_ROWS; y++) {
        if (this.plantGrid[y][x] === 1) {
          if (x > 0 && x < 10 && y > 0) {
            image(peashooter, x * rectWidth + rectWidth / 2, y * rectHeight + rectHeight / 2, 100, 100);
          }
        }
        else if (this.plantGrid[y][x] === 2) {
          if (x > 0 && x < 10 && y > 0) {
            image(sunflower, x * rectWidth + rectWidth / 2, y * rectHeight + rectHeight / 2, 100, 100);
          }
        }
        else if (this.plantGrid[y][x] === 3) {
          if (x > 0 && x < 10 && y > 0) {
            image(wallnut, x * rectWidth + rectWidth / 2, y * rectHeight + rectHeight / 2, 100, 100);
          }
        }
        else if (this.plantGrid[y][x] === 4) {
          if (x > 0 && x < 10 && y > 0) {
            image(potato, x * rectWidth + rectWidth / 2, y * rectHeight + rectHeight / 2, 100, 100);
          }
        }
        else if (this.plantGrid[y][x] === 5) {
          if (x > 0 && x < 10 && y > 0) {
            image(repeater, x * rectWidth + rectWidth / 2, y * rectHeight + rectHeight / 2, 100, 100);
          }
        }
      }
    }
    pop();
  }
  abilities() {
    //PLANT ABILITYS
    //peashot ability

    //normal peashooter
    if (this.plantGrid[this.row][this.col] === 1 && frameCount % 120 === 0) {
      peaList.push(new peaShot(this.col * rectWidth + rectWidth / 2, this.row * rectHeight + 30, this.row))
    }


    //rapid peashooter
    if (this.plantGrid[this.row][this.col] === 5 && frameCount % 80 === 0) {
      peaList.push(new peaShot(this.col * rectWidth + rectWidth / 2, this.row * rectHeight + 30, this.row))
    }
    //sunflower ability
    if (this.plantGrid[this.row][this.col] === 2 && frameCount % 840 === 0) {
      sunList.push(new sun(this.row * rectHeight + 30, this.col * rectWidth + rectHeight / 2))
    }


  }

  death(){
    if(this.beingAte === true){
      if(this.type === 4){
        this.health -= 360;
      }
      this.health--;
      this.beingAte = false; 
    }

    //removes the plant from the plantGrid and plantList
    for (let i = 0; i < plantList.length; i++) {
      if (plantList[i].health <= 0) {
        plantGrid[this.row][this.col] = 0
        plantList.splice(i, 1);
      }
    }
  }

  //cleans up draw loops slightly
  actions(){
    this.update();
    this.display();
    this.abilities();
    this.death();
  }

}



