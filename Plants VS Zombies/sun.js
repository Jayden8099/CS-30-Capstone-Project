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
        imageMode(CENTER);
        image(sunImage, this.x, this.y)
        pop();

        circle(this.x, this.y, this.size);
        let d = dist(this.x, this.y, mouseX, mouseY);
        if (d <= this.size / 2) {
            fill(255, 0, 0);
        }
        else {
            fill(255);
        }



        //fill(255); noStroke;
        if (this.y < 750) {
            this.y += this.ySpeed;
        }
        else {
            return;
        }
    }
    sunColCheck() {

    }

}