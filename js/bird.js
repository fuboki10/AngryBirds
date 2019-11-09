class Bird{
    constructor(x, y, r)
    {
        this.body = Bodies.circle(x, y, r);
        World.add(world, this.body);
        this.x = x;
        this.y = y;
        this.r = r;
    };

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        rectMode(CENTER);
        circle(0, 0, this.r * 2);
        pop();
    }
}