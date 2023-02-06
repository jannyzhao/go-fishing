import Fish from "./fish";
import Hook from "./hook";

const BIG_FISH = 70; //speed = slow 
const SMALL_FISH = 45; //speed = faster

// const fishArray = [];
export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.canvas = canvas;
        this.hook = new Hook(canvas.width / 2, 0, 0, 3, "black")
        this.fishes = [
            // new Fish({ x: 0, y: Math.random() * canvas.height, dx: 3, dy: 0, size: BIG_FISH }),
            // // x, y, direction\X, directionY, size, color 
            // new Fish({ x: 0, y: Math.random() * canvas.height, dx: 4, dy: 0, size: BIG_FISH }),
            // new Fish({ x: 0, y: Math.random() * canvas.height, dx: 2, dy: 0, size: SMALL_FISH }),
            // new Fish({ x: 0, y: Math.random() * canvas.height, dx: 6, dy: 0, size: BIG_FISH}),
            // new Fish({ x: 0, y: Math.random() * canvas.height, dx: 4, dy: 0, size: BIG_FISH}),

            // new Fish({ x: canvas.width, y: Math.random() * canvas.height, dx: -3, dy: 0, size: SMALL_FISH}),
            // new Fish({ x: canvas.width, y: Math.random() * canvas.height, dx: -4, dy: 0, size: BIG_FISH}),
            // new Fish({ x: canvas.width, y: Math.random() * canvas.height, dx: -5, dy: 0, size: SMALL_FISH}),
            // new Fish({ x: canvas.width, y: Math.random() * canvas.height, dx: -6, dy: 0, size: BIG_FISH}),

        ]
    }

    drawFishes() {
        this.fishes.forEach(fish => fish.draw(this.ctx));
    }

    drawHook() {
        this.hook.draw(this.ctx);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.drawFishes();
        this.fishes.forEach(fish => fish.update());
        // this.drawHook();
        this.hook.update();
        requestAnimationFrame(() => this.animate());
    }

    start() {
        setInterval(() => this.loadFish(), 1000);
        this.animate();
    }

    loadFish() {
        // setInterval to keep loading new fishes every second
        const sizes = [BIG_FISH, SMALL_FISH]
        const size = sizes[Math.floor(Math.random() * sizes.length)];

        const speeds = [5, 6]
        const slowSpeed = 3;
        const speed = speeds[Math.floor(Math.random() * speeds.length)];

        const directions = [0, this.canvas.width]
        const direction = directions[Math.floor(Math.random() * directions.length)];
        
        const fishParams = {
            x: direction,
            y: Math.random() * this.canvas.height, 
            dx: 0, 
            dy: 0, 
            size: size
        }

        if (size === BIG_FISH && direction === 0) {
            fishParams.dx = slowSpeed;
        } else if (size === BIG_FISH && direction === this.canvas.width) {
            fishParams.dx = -slowSpeed;
        } else if (direction === 0) {
            fishParams.dx = speed;
        } else {
            fishParams.dx = -speed;
        }

        this.fishes.push(new Fish(fishParams))
    }
};

// bigFish = slow speed, randomize starting