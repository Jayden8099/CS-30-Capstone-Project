//parent class


class sun {
    constructor(y, x) {
        this.x = x;
        this.y = y;
        this.size = 50;
        this.ySpeed = 1.5;
    }

    display() {
        push();
        fill(0, 0, 0, 0); noStroke();
        circle(this.x, this.y, this.size);
        pop();

        push();
        imageMode(CENTER);
        image(sunImage, this.x, this.y)
        pop();


        if (this.y < 750) {
            this.y += this.ySpeed;
        }
    }


    sunColCheck() {
        let d = dist(this.x, this.y, mouseX, mouseY);
        if (d <= this.size / 2) {
            return true;
        }
        else {
            return false;
        }
    }

}