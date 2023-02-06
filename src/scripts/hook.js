export default class Hook {
    constructor(x, y, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.directionX = dx;
        this.directionY = dy;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.closePath();
    }

    update() {
        this.x += this.directionX;
        this.y += this.directionY;

        
    }
}