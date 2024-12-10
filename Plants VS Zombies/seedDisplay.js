//Parent Class
class seedDisplay {
    constructor(x, y, w, h, type) {
      this.x = x; //xpos
      this.y = y;//ypos
      this.w = w;//width
      this.h = h;//height
      this.type = type;//which seed it being drawn
  
  
  
      this.left = this.x - this.w / 2
      this.right = this.x + this.w / 2
      this.top = this.y - this.h / 2
      this.bottom = this.y + this.h / 2
    }
    display() {
      if (this.type === 1) {
        push();
        rectMode(CENTER);
        fill(255, 255, 255, 0);
        noStroke();
  
  
        rect(this.x, this.y, this.w, this.h);
        image(peashooterSeed, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        pop();
      }
      else if(this.type === 2){
        push();
        rectMode(CENTER);
        fill(255, 255, 255, 0);
        noStroke();
  
  
        rect(this.x, this.y, this.w, this.h);
        image(sunflowerSeed, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        pop();
  
      }
      else if(this.type === 3){
        push();
        rectMode(CENTER);
        fill(255, 255, 255, 0);
        noStroke();
  
  
        rect(this.x, this.y, this.w, this.h);
        image(wallnutSeed, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        pop();
  
      }
    }
  
    colCheck() {
  
      if (mouseX > this.left && mouseX < this.right) {
        if (mouseY > this.top && mouseY < this.bottom) {
          collision = true;
          if (this.type === 1) {
            sN = 1;
          }
          else if(this.type === 2){
            sN = 2;
          }
          else if(this.type === 3){
            sN = 3;
          }
  
        }
        else {
          collision = false;
          sN = null;
        }
      }
    }
  }