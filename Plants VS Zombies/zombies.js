//parent class
//holds all zombies


class Zombie {
    constructor(row, x, plantGrid) {
        this.row = row;
        this.x = width;
        
        this.plantGrid = plantGrid;
        this.col = x / NUM_COLS;
    }

    display() {
         image(zombieWalk, this.x, this.row * rectHeight - 30, 200, 200);
        
    }
    update() {
        this.x -= 0.4;
    }















}