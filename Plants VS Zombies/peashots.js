//parent class



class peaShot {
    constructor(x, y) {
        this.x = x;
        this.y = y + 25;

        this.peaVelocity = 5;
    }

    display() {
        push();
        imageMode(CENTER);
        image(peashot, this.x, this.y);
        pop();
    }

    update() {
        this.x += this.peaVelocity;


        
    }

    inBoundCheck() {
        if (this.x > width) {
            return true;
        }
    }
}


