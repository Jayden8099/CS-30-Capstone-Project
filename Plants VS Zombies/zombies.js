//parent class
//holds all zombies




// *ASK HOW TO MAKE PLANTS AND ZOMBIES INTERACT*

class Zombie {
    constructor(row, x, zState) {
        this.y = round((row * rectHeight) + 50);
        this.x = x;


        this.peaX;
        this.peaY;


        this.row = int(row);
        this.col = int(x / rectWidth);


        this.zState = zState;

        this.zHealth = 3;

    }


    display() {
        push()
        imageMode(CENTER);
        if (this.zState === 0) {
            image(zombieWalk, this.x, this.y, 200, 200);
            fill(0,0,0,0);
            rectMode(CENTER);
            rect(this.x, this.y,this.w,this.h);
        }
        else {
            image(zombieAttack, this.x, this.y, 200, 200);
        }
        pop();
    }

    update() {
        if (this.zState === 0) {
            this.x -= 0.4;
        }
        this.row = int(this.row);
        this.col = int(this.x / rectWidth);

    }

    gridCheck() {
        if (plantGrid[this.row][this.col] >= 1) {
            this.zState = 1
        }
        else {
            this.zState = 0;
        }
    }


    colCheck() {
        if (this.peaX > this.left) {
            if (this.peaY > this.top && this.peaY < this.bottom) {
                
            }
        }
    }
    deathCheck() {
        if (this.zState === 3) {
            return true;
        }
    }

}