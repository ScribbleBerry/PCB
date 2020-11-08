class paper {
    constructor(x, y, r){
        var options={
            restituition:0.3,
            isStatic: false,
            density: 1.2,
            friction: 0.5          
        }
        this.body = Bodies.circle(x, y, 20, 20, options);
        this.width = 30
        this.height= 30

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}