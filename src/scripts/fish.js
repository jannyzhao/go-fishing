const SPACESHIP_LEFT = new Image();
SPACESHIP_LEFT.src = "./assets/spaceship-left.png"

const SPACESHIP_RIGHT = new Image();
SPACESHIP_RIGHT.src = "./assets/spaceship-right.png"

export default class Fish {
    constructor({x, y, dx, dy, size}) {
        this.x = x;
        this.y = y;
        this.directionX = dx;
        this.directionY = dy;
        this.size = size;
    }

    draw(ctx) {
        const image = this.directionX < 0 ? SPACESHIP_LEFT : SPACESHIP_RIGHT
        ctx.drawImage(image, this.x, this.y, this.size, this.size)
    }
    
    update() {
        this.x += this.directionX;
        this.y += this.directionY; 
    }
}
