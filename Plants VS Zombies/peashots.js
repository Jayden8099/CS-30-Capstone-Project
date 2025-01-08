//parent class



class peaShot {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.peaVelocity = 5;
    }

    display() {
        image(peashot, this.x, this.y);
    }

    update() {
        this.x += this.peaVelocity
    }

    inBoundCheck(){
        if(this.x > width){
            return true;
        }
    }
}


