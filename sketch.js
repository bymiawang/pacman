// This file will initialize the p5 sketch, including the setup and draw functions

let dots = [];
let ghosts = [];
let pacmanSpeed = 4;
let ghostSpeed = 2;
let numDots = 10;
let numGhosts = 3;
let circleX, circleY, ang = 0, open, sp, circleSize;
let score = 0;
let gameWon = false;
let gameOver = false;
let movingDirection = 'RIGHT';

function setup() {
    createCanvas(windowWidth, windowHeight);
    circleX = width / 2;
    circleY = height / 2;
    angleMode(RADIANS);
    circleSize = 55;
    open = true;
    sp = 3;
    initializeGame();
}

function draw() {
    background(0);
    if (!gameOver & !gameWon) {
        playGame();
        if (dots.length === 0) {
            gameWon = true;
        }
    } else if (gameWon) {
        displayGameWon();
    } else {
        displayGameOver();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
