import Fish from "./fish";
import Hook from "./hook";

const BIG_FISH = 70; //speed = slow 
const SMALL_FISH = 45; //speed = faster

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.canvas = canvas;
        this.hook = new Hook(canvas.width / 2, 0, 0, 3, "black")
        this.fishes = [];
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
        // setInterval to keep loading new fishes every second
        setInterval(() => this.loadFish(), 500);
        this.animate();
    }

    getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    loadFish() {
        const sizes = [BIG_FISH, SMALL_FISH]
        const size = sizes[Math.floor(Math.random() * sizes.length)];

        const speeds = [6, 7];
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
}

// bigFish = slow speed, randomize starting