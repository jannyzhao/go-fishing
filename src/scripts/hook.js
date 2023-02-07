export default class Hook {
    constructor(x, y, dx, dy, color, canvasHeight) {
        this.x = x;
        this.y = y;
        this.directionX = dx;
        this.directionY = dy;
        this.color = color;
        this.canvasHeight = canvasHeight;
        this.radius = 20;
    }

    draw(ctx) {
        
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    
        ctx.fillStyle = "lightblue";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
    }

    update() {
        this.x += this.directionX;
        this.y += this.directionY;

        if (this.y >= this.canvasHeight || this.y === 0) {
            this.directionY = -this.directionY;
        }
    }

}