const FISH_LEFT = new Image();
FISH_LEFT.src = "./assets/fish-left.png"

const FISH_RIGHT = new Image();
FISH_RIGHT.src = "./assets/fish-right.png"

export default class Fish {
    constructor({x, y, dx, dy, size}) {
        this.x = x;
        this.y = y;
        this.directionX = dx;
        this.directionY = dy;
        this.size = size;
    }

    draw(ctx) {
        const image = this.directionX < 0 ? FISH_LEFT : FISH_RIGHT 
        ctx.drawImage(image, this.x, this.y, this.size * 2, this.size)
    }
    
    update() {
        this.x += this.directionX;
        this.y += this.directionY; 
    }
}

