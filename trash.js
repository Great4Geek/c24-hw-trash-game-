class trash{
  constructor(x,y,height,width,angle){
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body); 
    Matter.Body.setAngle(this.body,angle);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
  }
};

