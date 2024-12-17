//Parent Class
//used to display the seedbar
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
      push();
      rectMode(CENTER);
      fill(255, 255, 255, 0);
      noStroke();

      textAlign(CENTER);
      textSize(25);

      if (this.type === 1) {
        rect(this.x, this.y, this.w, this.h);
        image(peashooterSeed, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        if(sunAmount < 100){
          fill(255,0,0);
          text('100',540,120)
        }
        else{
          fill(0);
          text('100',540,120)
        }
      }
      else if(this.type === 2){
        rect(this.x, this.y, this.w, this.h);
        image(sunflowerSeed, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        if(sunAmount < 50){
          fill(255,0,0);
          text('50',715,121)
        }
        else{
          fill(0);
          text('50',715,121)
        }
      }
      else if(this.type === 3){
        rect(this.x, this.y, this.w, this.h);
        image(wallnutSeed, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        if(sunAmount < 75){
          fill(255,0,0);
          text('75',880,121)
        }
        else{
          fill(0);
          text('75',880,121)
        }
      }
      else if(this.type === 4){
        rect(this.x, this.y, this.w, this.h);
        image(potatoSeed, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        if(sunAmount < 50){
          fill(255,0,0);
          text('50',1055,121)
        }
        else{
          fill(0);
          text('50',1055,121)
        }
      }
      else if(this.type === 5){
        rect(this.x, this.y, this.w, this.h);
        image(repeaterSeed , this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        if(sunAmount < 200){
          fill(255,0,0);
          text('200',1215,121)
        }
        else{
          fill(0);
          text('200',1215,121)
        }
      }
      pop();
    }
  
    colCheck() {
  
      if (mouseX > this.left && mouseX < this.right) {
        if (mouseY > this.top && mouseY < this.bottom) {
          collision = true;
          if (this.type) {
            sN = this.type;
          }

  
        }
        else {
          collision = false;
          sN = null;
          
        }
      }
    }
  }