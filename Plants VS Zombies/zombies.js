//parent class
//holds all zombies




// *ASK HOW TO MAKE PLANTS AND ZOMBIES INTERACT*

class Zombie{
    constructor(row, x, zState) {
        this.zombieY = round((row * rectHeight) + 50);
        this.zombieX = x;

        this.row = int(row);
        this.col = int(x / rectWidth);


        this.zState = zState;

        this.zHealth = 15;

    }


    display() {
        push()
        imageMode(CENTER);
        if (this.zState === 0) {
            image(zombieWalk, this.zombieX, this.zombieY, 200, 200);
            fill(0,0,0,0);
            rectMode(CENTER);
            
        }
        else {
            image(zombieAttack, this.zombieX, this.zombieY, 200, 200);
        }
        pop();

        
    }

    update() {
        if (this.zState === 0) {
            this.zombieX -= 0.4;
        }
        this.row = int(this.row);
        this.col = int(this.zombieX / rectWidth);

    }

    gridCheck() {
        if (plantGrid[this.row][this.col] >= 1 && plantGrid[this.row][this.col] !== 7) {
            this.zState = 1
        }
        else {
            this.zState = 0;
        }
    }
}