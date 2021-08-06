class ComputerArcher {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;

      this.image = loadImage("assets/computerArcher.png")
    }

    
    display() {
      
      if(keyIsDown(UP_ARROW) && this.angle<1.47){
        this.angle += 0.05;
      }
      if(keyIsDown(DOWN_ARROW) && this.angle>-0.01){
        this.angle -= 0.05;
      }
      fill("#676e6a");
      push();
      translate(this.x, this.y);
      rotate(this.angle);
     image(this.image,0,0, this.width, this.height);
      pop();
      noFill();
    }
  }