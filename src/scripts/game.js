import Fish from "./fish";
import Hook from "./hook";

//smallFish = 30
//bigFish = 50

const BIG_FISH = 70;
const SMALL_FISH = 40; 
const spaceshipImage = new Image();
spaceshipImage.src = "./assets/spaceship02.png"

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.canvas = canvas;
        this.hook = new Hook(canvas.width / 2, 0, 0, 3, "black")
        this.fishes = [
            new Fish(0, (canvas.height / 2), 3, 0, BIG_FISH), 
            // x, y, directionX, directionY, radius, color 
            new Fish(0, (canvas.height / 3), 4, 0, BIG_FISH),
            new Fish(0, (canvas.height / 4), 2, 0, SMALL_FISH),
            new Fish(0, (canvas.height / 5), 6, 0, BIG_FISH),
            new Fish(0, (canvas.height - (canvas.height / 4)), 4, 0, BIG_FISH),

            new Fish(canvas.width, canvas.height / 3, -3, 0, SMALL_FISH),
            new Fish(canvas.width, canvas.height / 4, -4, 0, BIG_FISH),
            new Fish(canvas.width, canvas.height / 2, -5, 0, SMALL_FISH),
            new Fish(canvas.width, canvas.height / 6, -6, 0, BIG_FISH),

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
        // this.ctx.drawImage(spaceshipImage, 0, 0);
        this.drawFishes();
        this.fishes.forEach(fish => fish.update());
        this.drawHook();
        this.hook.update();
        requestAnimationFrame(this.animate.bind(this));
    }

    start() {
        this.animate();
    }
};