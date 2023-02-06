
const spaceshipImage = new Image();
spaceshipImage.src = "./assets/spaceship02.png"

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
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // ctx.fill();
        ctx.drawImage(spaceshipImage, this.x, this.y, this.radius, this.radius);
        ctx.closePath();
    }
    
    update() {
        this.x += this.directionX;
        this.y += this.directionY; //this line will make the fix go diagonally
    }
}
