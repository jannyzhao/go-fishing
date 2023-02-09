export default class Bubbles {
    constructor({ x, y, dx, dy, radius}) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = "white";
        ctx.fill();
        // ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.closePath();
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
    }
}
