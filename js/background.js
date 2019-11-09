class Background{
    constructor(x, y, w, h, context, src)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.context = context;
        this.sprite = new Image();
        this.sprite.src = src;
    };

    draw() {
        this.context.drawImage(this.sprite, this.x, this.y, this.w, this.h);
    }
}