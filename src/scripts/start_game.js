const HAPPY_PENGUIN = new Image();
HAPPY_PENGUIN.src = "./assets/happy_penguin.png"

const SLEEPY_PENGUIN = new Image(60, 45);
SLEEPY_PENGUIN.src = "./assets/sleepy_penguin.png"

const GONE_FISHING_PENGUIN = new Image();
GONE_FISHING_PENGUIN.src = "./assets/gone_fishing_penguin.png"

export default class StartGame {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.font = "25px Comic Sans MS", "Comic Sans";
        ctx.stroke();
        ctx.fillText(`Press ENTER to START GAME`, 325, 250);
        ctx.closePath();
        SLEEPY_PENGUIN.onload = () => {
            ctx.drawImage(SLEEPY_PENGUIN, 0, 300, 250, 250)
        }
        GONE_FISHING_PENGUIN.onload = () => {
            ctx.drawImage(GONE_FISHING_PENGUIN, 375, 300, 250, 250)
        }
        HAPPY_PENGUIN.onload = () => {
            ctx.drawImage(HAPPY_PENGUIN, 750, 300, 250, 250)
        }
    }
}