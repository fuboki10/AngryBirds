class Bird{
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

    step(x, y){
        if (x > 0 && this.x + this.w < canvas.width || x < 0 && this.x > 0)
        {
            if (x > 0)
                x = Math.min(x, canvas.width - this.x - this.w);

            this.x += x;
        }
        if (y > 0 && this.y + this.h < canvas.height || y < 0 && this.y > 0)
        {
            if (y > 0)
                y = Math.min(y, canvas.height - this.y - this.h);
                
            this.y += y;
        }
    }

}

/*
pixelsLeft,
pixelsTop,
spriteWidth,
spriteHeight,
canvasPosX,
canvasPosY,
spriteWidth,
spriteHeight
*/