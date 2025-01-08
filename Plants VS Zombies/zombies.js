//parent class
//holds all zombies




// *ASK HOW TO MAKE PLANTS AND ZOMBIES INTERACT*

class Zombie {
    constructor(row, x, zState) {
        this.y = round((row * rectHeight) - 100);
        this.x = x;


        this.row = int(row);
        this.col = int(x / rectWidth);


        this.zState = zState;


    }


    display() {
        push()
        imageMode(CENTER);
        if (this.zState === 0) {
            image(zombieWalk, this.x, this.y, 200, 200);
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
    }

    gridCheck(){ 
        if(plantGrid[this.row][this.col] > 0){
            this.zState = 1
        }
        else{
            this.zState = 0;
        }
    }



} 