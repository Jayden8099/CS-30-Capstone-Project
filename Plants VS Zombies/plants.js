//parent class
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
      if (this.plantGrid[this.row][this.col] === 0) {
        this.plantGrid[this.row][this.col] = this.type;
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
          else if (this.plantGrid[y][x] === 4) {
            if (x > 0 && x < 10 && y > 0) {
              image(potato, x * rectWidth + 35, y * rectHeight + 25, 100, 100);
            }
          }
          else if (this.plantGrid[y][x] === 5) {
            if (x > 0 && x < 10 && y > 0) {
              image(repeater, x * rectWidth + 35, y * rectHeight + 25, 100, 100);
            }
          }
        }
      }
    }
}
