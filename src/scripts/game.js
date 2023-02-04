import Fish from "./fish";
import Hook from "./hook";

//smallFish = 20
//bigFish = 25

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.canvas = canvas;
        this.hook = new Hook(canvas.width / 2, 0, 0, 2, "white")
        this.fishes = [

            new Fish(0, (canvas.height / 2), 3, 0, 20, "yellow"), 
            // x, y, directionX, directionY, radius, color 
            new Fish(0, (canvas.height / 3), 4, 0, 25, "yellow"),
            new Fish(0, (canvas.height / 4), 2, 0, 20, "yellow"),
            new Fish(0, (canvas.height / 5), 6, 0, 25, "yellow"),
            new Fish(0, (canvas.height - (canvas.height / 4)), 4, 0, 25, "lightblue"),

            new Fish(canvas.width, canvas.height / 3, -3, 0, 20, "orange"),
            new Fish(canvas.width, canvas.height / 4, -4, 0, 25, "orange"),
            new Fish(canvas.width, canvas.height / 2, -5, 0, 20, "orange"),
            new Fish(canvas.width, canvas.height / 6, -6, 0, 25, "orange"),
            // new Fish(canvas.width / 3, 0, 2, 3, 5, "black"),

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
        this.drawHook();
        this.hook.update();
        requestAnimationFrame(this.animate.bind(this));
    }

    start() {
        this.animate();
    }
};