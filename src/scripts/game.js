import Fish from "./fish";
import Hook from "./hook";

const BIG_FISH = 50; //speed = slow 
const SMALL_FISH = 30; //speed = faster
// const GOLDEN_FISH = 30; //speed = fastest

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.canvas = canvas;
        this.hook = new Hook(canvas.width / 3, 0, 0, 5, "black", canvas.height)
        this.fishes = [];
        this.score = 0;
    }

    // toggleScreen(id, toggle) {
    //     const ele = document
    // }

    drawFishes() {
        this.fishes.forEach(fish => fish.draw(this.ctx));
    }

    drawHook() {
        this.hook.draw(this.ctx);
    }

    scoreDisplay() {
        // Display the score
        this.ctx.beginPath();
        this.ctx.createLinearGradient(0, 0, 200, 0);
        this.ctx.fillStyle = "black";
        this.ctx.font = "25px Comic Sans MS", "Comic Sans";
        this.ctx.stroke();
        // this.ctx.shadowColor = "black";
        // this.ctx.shadowBlur = 10;
        this.ctx.fillText(`FISH: ${this.score}`, this.canvas.width / 30, this.canvas.height / 15);
        this.ctx.closePath();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.scoreDisplay();
        this.drawFishes();
        this.fishes.forEach(fish => fish.update());
        this.drawHook();
        this.hook.update();
        this.fishHookCollide();
        requestAnimationFrame(() => this.animate());
    }

    fishHookCollide() {
        this.fishes.forEach((fish) => {
            const dx = this.hook.x - fish.x;
            const dy = this.hook.y - fish.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const isColliding = distance < this.hook.radius + (fish.size);

            if (isColliding) {
                if (fish.size === BIG_FISH) {
                    this.score += 5;
                } else if (fish.size === SMALL_FISH) {
                    this.score += 10;
                }
                this.fishes = this.fishes.filter(f => f !== fish);
                this.scoreDisplay();
            }
        });
    }

    start() {
        // Add a button.
        // this.ctx.strokeStyle = "white"
        // this.ctx.beginPath();
        // this.ctx.roundRect(450, 250, 100, 50, [40])
        // this.ctx.stroke();
        this.ctx.font = "25px Comic Sans MS", "Comic Sans";
        this.ctx.stroke();
        this.ctx.fillText(`Press ENTER to START GAME`, 350, 250);
        this.ctx.closePath();
        // Add event listener for keydown Enter to call startGame()

        document.addEventListener("keydown", e => {
            if (e.code === "Enter") {
                this.startGame()
            }
        });
    }

    startGame() {
        document.addEventListener("keydown", e => {
            if (e.code === "Space") {
                this.hook.directionY = 5; // 5 is the speed, should match directionY
            }
        });

        setInterval(() => this.loadFish(), 500);
        this.animate();
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