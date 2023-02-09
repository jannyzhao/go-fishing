const HOOK_IMAGE = new Image();
HOOK_IMAGE.src = './assets/fish-hook.png';

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
        ctx.lineWidth = 1;
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        ctx.drawImage(HOOK_IMAGE, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }

    update() {
        this.x += this.directionX;
        this.y += this.directionY;

        if (this.y >= this.canvasHeight) {
            this.directionY = -this.directionY;
        } else if (this.y === 0){
            this.directionY = 0;
        }
    }
}
