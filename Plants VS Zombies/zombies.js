//parent class
//holds all zombies



class Zombie {
    constructor(row, x, zState) {
        this.zombieY = round((row * rectHeight) + 50);
        this.zombieX = x;

        this.row = int(row);
        this.col = int(x / rectWidth);

        //checks what the score is and changes the difficulty
        //makes the game eventually end instead of not being able to lose
        if (score < 10) {
            zombieTimer = 720;
            this.zHealth = 15;
            this.xSpeed = 0.4;
        }
        if (score >= 10 && score < 20) {
            zombieTimer = 360;
            this.zHealth = 16;
            this.xSpeed = 0.8;
        }
        if (score >= 20 && score < 30) {
            zombieTimer = 180;
            this.zHealth = 20;
            this.xSpeed = 0.9;
        }
        if (score >= 30) {
            zombieTimer = 90;
            this.zHealth = 20;
            this.xSpeed = 1.2;
        }


        this.zState = zState;



    }


    display() {
        //displays zombie walking or eating based on zState
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
        //updates zombies pos
        if (this.zState === 0) {
            this.zombieX -= this.xSpeed;
        }
        this.row = int(this.row);
        this.col = int(this.zombieX / rectWidth);

    }

    gridCheck() {
        //checks if a zombie is at the house causing you to lose
        //or if a zombie is touching a plant
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

        else {//resets zombie to walking
            this.zState = 0;
        }

        //used for potato mine
        //insta kills any zombies and kills mine aswell
        if (plantGrid[this.row][this.col] === 4) {
            this.zHealth -= 50;
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


