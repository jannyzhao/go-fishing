import Game from "./scripts/game";

//adding DOMContentLoaded to ensure canvas element is loaded before accessing it
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameBox");
    const ctx = canvas.getContext("2d");

    const CANVAS_WIDTH = canvas.width = 1000;
    const CANVAS_HEIGHT = canvas.height = 600;

    const game = new Game(canvas);
    game.start();

    // console.log(game)
    // console.log(ctx)
    // console.log(fish)
    
});