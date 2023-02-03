import Fish from "./fish";

// export default class Game {
//     constructor(canvas) {
//         this.ctx = canvas.getContext("2d");
//         this.dimensions = { width: CANVAS_WIDTH, height: CANVAS_HEIGHT };
//         this.canvas = canvas;
//     }

//     draw() {
//         this.ctx.fillStyle = "yellow";
//         this.ctx.beginPath();
//         this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         this.ctx.stroke();
//         this.ctx.closePath();
//         this.ctx.fill();
//     }

//     animate() {
//         this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//         this.fish.draw();
//         requestAnimationFrame(this.animate.bind(this));
//     }

//     start() {
//         this.fish = new Fish(100, 75, 1, 1, 25);
//         this.animate();
//     }
// };

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.canvas = canvas;
        this.fishes = [
            new Fish(0, canvas.height / 2, 3, 0, 20, "lightgreen"),
            new Fish(canvas.width, canvas.height / 3, -3, 0, 25, "orange"),
        ]
    }

    draw() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.fishes.forEach(fish => fish.draw(this.ctx));
    }

    animate() {
        this.draw();
        this.fishes.forEach(fish => fish.update());
        requestAnimationFrame(this.animate.bind(this));
    }

    start() {
        this.animate();
    }
};