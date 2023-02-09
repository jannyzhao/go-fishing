import Fish from "./fish";
import Hook from "./hook";
import StartGame from "./start_game";
import EndGame from "./end_game";
import Bubbles from "./bubbles";
// import Timer from "./timer";

const BIG_FISH = 50; //speed = slow 
const SMALL_FISH = 30; //speed = faster
// const GOLDEN_FISH = 30; //speed = fastest

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.canvas = canvas;
        this.hook = new Hook(canvas.width / 3, 0, 0, 0, "black", canvas.height)
        this.fishes = [];
        this.score = 0;
        this.startgame = new StartGame(20, 20, 250);
        this.startTimer = 20;
        // this.timer = new Timer(30);
        this.bubbles = new Bubbles(canvas.width / 3, canvas.height / 3, 0, 0, 50) 
    }

    drawBubbles() {
        this.bubbles.draw(this.ctx);
    }

    drawFishes() {
        this.fishes.forEach(fish => fish.draw(this.ctx));
    }

    drawHook() {
        this.hook.draw(this.ctx);
    }

    drawStartGame() {
        this.startgame.draw(this.ctx);
    }

    drawEndGame() {
        this.endgame.draw(this.ctx);
    }

    timerDisplay() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.font = "25px Comic Sans MS", "Comic Sans";
        this.ctx.stroke();
        this.ctx.fillText(`TIME LEFT: ${this.startTimer}`, this.canvas.width / 30, this.canvas.height / 8);
        // this.ctx.fillText(`TIME LEFT: ${Math.floor(this.timer.timeRemaining / 60)}`, this.canvas.width / 30, this.canvas.height / 8);

        this.ctx.closePath();
    }

    scoreDisplay() {
        // Display the score
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.font = "25px Comic Sans MS", "Comic Sans";
        this.ctx.stroke();
        this.ctx.fillText(`SCORE: ${this.score}`, this.canvas.width / 30, this.canvas.height / 15);
        this.ctx.closePath();
    }

    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.scoreDisplay();
        this.timerDisplay();
        this.drawFishes();
        this.bubbles.update();
        this.drawBubbles();
        this.fishes.forEach(fish => fish.update());
        this.drawHook();
        this.hook.update();
        this.fishHookCollide();
        this.raf = requestAnimationFrame(() => this.animate());
        
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
                    this.hook.directionY = -6;
                } else if (fish.size === SMALL_FISH) {
                    this.score += 10;
                    this.hook.directionY = -6;
                }
                this.fishes = this.fishes.filter(f => f !== fish);
                this.scoreDisplay();
            }
        });
    }

    start() {
        this.drawStartGame();
        document.addEventListener("keydown", e => {
            if (e.code === "Enter") {
                this.startGame()
            }
        });
    }

    end() {
        this.endgame = new EndGame(this.score);
        this.drawEndGame();
        cancelAnimationFrame(this.raf);
        // document.removeEventListener("keydown", this.spaceListener);
        // clearInterval(this.startTimer);
        document.addEventListener("keydown", this.replayListener);
    }

    replayListener(e) {
        if (e.code === "Enter") {
            location.reload();
        }
    }

    startGame() {
        document.addEventListener("keydown", e => {
            if (e.code === "Space") {
                this.hook.directionY = 6; // 5 is the speed, should match directionY
            }
        });

        setInterval(() => this.loadFish(), 500);
        this.animate();
        let time = setInterval(() => {
            this.startTimer--;
            if (this.startTimer === -1) {
                this.end();
                clearInterval(time);
            }
        }, 1000);
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
            y: Math.random() * this.canvas.height + 75 , 
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