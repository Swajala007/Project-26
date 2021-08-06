class PlayerArcher {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;

      this.image = loadImage("assets/playerArcher.png")
    }

    
    display() {
      
      if(keyIsDown(RIGHT_ARROW) && this.angle<-0.77){
        this.angle += 0.02;
      }
      if(keyIsDown(LEFT_ARROW) && this.angle>-1.55){
        this.angle -= 0.02;
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