class Box{
    constructor(x,y,width,height){
        var box_options ={
            restitution: 0.3,
            friction:5,
            density:1
        }
        this.box=Bodies.rectangle(x,y,width,height,box_options);
        World.add(world,this.box);
this.width=width
this.height=height
    }
    display () {
        fill("black");
        rectMode(CENTER);
        rect(this.box.position.x,this.box.position.y,this.width,this.height);
    }
}
