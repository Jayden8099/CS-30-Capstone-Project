//parent class
//holds all zombies


class Zombie {
    constructor(row, x, plantGrid) {
        this.y = row * rectHeight;
        this.x = width;

        this.plantGrid = plantGrid;
        this.col = int(x / NUM_COLS);
        this.row = row;
    }

    display() {
        if (isEating === false) {
            image(zombieWalk, this.x, this.y- 30, 200, 200);
        }
        else if (isEating) {
            image(zombieAttack, this.x, this.y- 30, 200, 200);
        }
    }



    update() {
        if (isEating === false) {
            this.x -= 0.4;
        }


        for (let x = 0; x < NUM_COLS; x++) {
            for (let y = 0; y < NUM_ROWS; y++) {
                if (plantGrid[ythis.row][this.col] > 0) {
                    isEating = true;
                }
                else if(plantGrid[this.row][this.col] === 0){
                    isEating = false;
                }
            }
        }
    }
















}