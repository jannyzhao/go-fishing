import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameBox");
    const ctx = canvas.getContext("2d");

    const CANVAS_WIDTH = canvas.width = 1000;
    const CANVAS_HEIGHT = canvas.height = 600;

    const game = new Game(canvas);
    game.start();
    // game.end();
});