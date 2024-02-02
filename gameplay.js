// Contains game logic including initializing the game, playing the game, and displaying game over

function initializeGame() {
    dots = [];
    ghosts = [];
    score = 0;
    gameOver = false;

    let ghostColors = ['red', 'pink', 'cyan', 'orange'];

    for (let i = 0; i < numDots; i++) {
        dots.push({ 
            x: random(10, width - 10),
            y: random(10, height - 10) 
        });
    }

    for (let i = 0; i < numGhosts; i++) {
        ghosts.push({
            x: random(width),
            y: random(height),
            speedX: random(-3, 3),
            speedY: random(-3, 3),
            color: random(ghostColors)
        });
    }
}

function playGame() {
    background("black");

    updatePacmanPosition();
    updateMouthAnimation();
    drawPacman();

    fill(255, 183, 197);
    dots.forEach((dot, index) => {
        ellipse(dot.x, dot.y, 10, 10);
        if (dist(circleX, circleY, dot.x, dot.y) < circleSize) {
            dots.splice(index, 1);
            score++;
        }
    });

    function updateGhostPosition(ghost) {
        // Move the ghost
        ghost.x += ghost.speedX;
        ghost.y += ghost.speedY;
    
        // Handle boundary bouncing
        if (ghost.x - 25 <= 0 || ghost.x + 25 >= width) ghost.speedX *= -1;
        if (ghost.y - 25 <= 0 || ghost.y + 25 >= height) ghost.speedY *= -1;
    
        // Check for collision with Pac-Man
        if (dist(circleX, circleY, ghost.x, ghost.y) < circleSize) {
            gameOver = true;
        }
    }

    // Move all ghosts and handle boundary bouncing
    ghosts.forEach(ghost => {
        updateGhostPosition(ghost);
    });

    // Display the ghosts
    ghosts.forEach(ghost => {
        drawGhost(ghost.x, ghost.y, ghost.color);
    });

    // Display the score
    fill("white");
    textSize(20);
    text("Score: " + score, 80, 50);

    fill("white");
    textAlign(CENTER, CENTER);
    textSize(50);
    textStyle(BOLD);
    text("WELCOME TO PAC-MAN'S WORLD", windowWidth / 2 , windowHeight / 2 - 300);
    textSize(20);
    textStyle(ITALIC);
    text("Use arrow keys to move around. Press and release mouse to change size.", windowWidth / 2 , windowHeight / 2 + 300);
}

function displayGameOver() {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(64);
    textStyle(BOLD);
    text("GAME OVER", width / 2, height / 2 - 60);
    textSize(24);
    text("Final Score: " + score, width / 2, height / 2 + 5);

    // Play Again button with rounded corners
    let buttonWidth = 200;
    let buttonHeight = 50;
    let cornerRadius = 10;

    fill(100);
    rect(width / 2 - buttonWidth / 2, height / 2 + 100, buttonWidth, buttonHeight, cornerRadius);
    fill(255);
    textSize(19);
    text("Play Again", width / 2, height / 2 + 125);

    // Check if the mouse is over the button
    if (
        mouseX > width / 2 - buttonWidth / 2 &&
        mouseX < width / 2 + buttonWidth / 2 &&
        mouseY > height / 2 + 100 &&
        mouseY < height / 2 + 150
    ) {
        fill(150);
        rect(width / 2 - buttonWidth / 2, height / 2 + 100, buttonWidth, buttonHeight, cornerRadius);
        fill(255);
        textSize(19);
        text("Play Again", width / 2, height / 2 + 125);
    }
}

function mouseClicked() {
    let buttonWidth = 200;
    let buttonHeight = 50;

    if (
        mouseX > width / 2 - buttonWidth / 2 &&
        mouseX < width / 2 + buttonWidth / 2 &&
        mouseY > height / 2 + 100 &&
        mouseY < height / 2 + 150
    ) {
        initializeGame(); // Reset the game
    }
}
