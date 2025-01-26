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

        //makes suns fall from the sky until y = 750
        if (this.y < 750) {
            this.y += this.ySpeed;
        }
    }


    sunColCheck() {
        //checks if mouse pos is touching the sun
        //and collects it if true
        let d = dist(this.x, this.y, mouseX, mouseY);
        if (d <= this.size / 2) {
            return true;
        }
        else {
            return false;
        }
    }

}