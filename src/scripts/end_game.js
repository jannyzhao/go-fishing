const FULL_PENGUIN = new Image();
FULL_PENGUIN.src = "./assets/full_penguin.png"

export default class EndGame {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.score = 0;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.font = "20px Comic Sans MS", "Comic Sans";
        ctx.stroke();
        ctx.fillText(`You caught ${this.score} fish! Press ENTER to PLAY AGAIN`, 250, 250);
        ctx.closePath();
        FULL_PENGUIN.onload = () => {
            ctx.drawImage(FULL_PENGUIN, 375, 275, 250, 250)
        }
    }
}