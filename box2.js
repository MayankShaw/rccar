class Box2{
    constructor(x,y,width,height){
        var box2_options ={
            restitution: 0.3,
            friction:5,
            density:1
        }
        this.box2=Bodies.rectangle(x,y,width,height,box2_options);
        World.add(world,this.box2);
this.width=width
this.height=height
    }
    display () {
        fill("green");
        rectMode(CENTER);
        rect(this.box2.position.x,this.box2.position.y,this.width,this.height);
    }
}
