class Bird{
    constructor(x, y, w, h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        //this.sprite = loadImage(src);
    };

    show() {
        //image(this.sprite, this.x, this.y, this.w, this.h);
        fill(255);
        circle(this.x, this.y, this.w);
    }
}