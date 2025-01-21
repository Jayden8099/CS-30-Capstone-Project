//parent class
//holds all zombies



class Zombie {
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
        }
        else {
            image(zombieAttack, this.zombieX, this.zombieY, 200, 200);
            fill(255, 0, 0);
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
            if (plantGrid[this.row][this.col] === 8) {
                lossCheck = true;
            }
            this.zState = 1
            for (let i = 0; i < plantList.length; i++) {
                if (this.row === plantList[i].row && this.col === plantList[i].col) {
                    plantList[i].beingAte = true;
                }
            }
        }

        else {
            this.zState = 0;
        }

        //used for potato mine
        if (plantGrid[this.row][this.col] === 4) {
            this.zHealth -= 15;
            potatoMineExplosion.setVolume(0.5);
            potatoMineExplosion.play();
            for (let i = 0; i < plantList.length; i++) {
                if (this.row === plantList[i].row && this.col === plantList[i].col) {
                    plantList[i].beingAte = true;
                }
  
            }
        }
    }
}


