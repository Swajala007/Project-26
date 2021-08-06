class Obstacle {
    constructor(x, y) {
        var op = {
            restitution:-0.5,
            friction:-1.5,
            density:-1.5,
            isStatic:true
        }
      
     
    this.image = loadImage("assets/arrow.png");
    this.tower1 = loadImage("assets/dots.png");
    this.trajectery = []
    this.width = 50;
    this.height = 10;

    this.body = Bodies.rectangle(850,100,this.width,this.height,op );
    World.add(world, this.body);

    }

    shoot(){
        var velocity = p5.Vector.fromAngle(computerArcher.angle)
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
        Matter.Body.setAngle(this.body,PI/5);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
       imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

        if(this.body.velocity.x > 0 && this.body.position.x > 300){
          var position = [this.body.position.x,this.body.position.y];
          this.trajectery.push(position)
         }
         for(var z = 0; z < this.trajectery.length; z++){
           image(this.image,this.trajectery[z][0],this.trajectery[z][1],5,5);
         }
      }
    }