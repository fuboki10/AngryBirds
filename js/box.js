class Box{
    constructor(x, y, w, h)
    {
        this.body = Bodies.rectangle(x, y, w, h);
        World.add(world, this.body);
        this.w = w;
        this.h = h;
    }

    show()
    {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(122);
        rectMode(CENTER);
        imageMode(CENTER);
        image(boxImg, 0, 0, this.w, this.h);
        pop();
    }
}