export default class Fish {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.directionX = dx;
        this.directionY = dy;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx) {
        // const img = new Image ();
        // img.onload = () => {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
        // };
        // img.src = "./assets/ufo.png"

    }

    update() {
        this.x += this.directionX;
        this.y += this.directionY; //this line will make the fix go diagonally
    }
}