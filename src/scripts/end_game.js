const FULL_PENGUIN = new Image();
FULL_PENGUIN.src = "./assets/full_penguin.png"

export default class EndGame {
    constructor(score) {
        this.score = score;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.font = "20px Comic Sans MS", "Comic Sans";
        ctx.stroke();
        ctx.fillText(`You scored ${this.score} points! Press ENTER to PLAY AGAIN`, 250, 250);
        ctx.closePath();
        FULL_PENGUIN.onload = () => {
            ctx.drawImage(FULL_PENGUIN, 375, 275, 250, 250)
        }
    }
}