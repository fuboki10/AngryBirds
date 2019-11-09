class Bird{
    constructor(x, y, r)
    {
        this.body = Bodies.circle(x, y, r);
        World.add(world, this.body);
        Matter.Body.setMass(this.body, this.body.mass*4);
        this.r = r;
    };

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        imageMode(CENTER);
        image(birdImg, 0, 0, this.r * 2, this.r * 2);
        pop();
    }
}