//parent class



class peaShot {
    constructor(x, y, row) {
        this.peaX = x;
        this.peaY = y + 25;

        this.peaRow = row;
        this.peaVelocity = 4;

        
    }

    display() {
        push();
        imageMode(CENTER);
        image(peashot, this.peaX, this.peaY);
        pop();
    }

    update() {
        //movement speed
        this.peaX += this.peaVelocity;
    }
    
    inBoundCheck() {
        //removes pea if its out of bounds
        if (this.peaX > width) {
            return true;
        }
    }

    colCheck(){
        //checks if pea is colliding with zombies
        for(let i = 0; i < zombieList.length; i++){
            let z = zombieList[i];
            if(dist(z.zombieX, z.zombieY, this.peaX, this.peaY) < 30){
                z.zHealth --;
                peashooterHitSound.setVolume(0.1);
                peashooterHitSound.play();
                return true;
            }
        }
    }
}


