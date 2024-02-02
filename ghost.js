// Contains functions related to ghosts

function drawGhost(x, y, color) {
    fill(color);
    rect(x, y, 50, 25); 
    ellipse(x + 25, y, 50, 50); 
    fill("white"); 
    ellipse(x + 15, y - 5, 15, 15);
    ellipse(x + 35, y - 5, 15, 15);
    fill("blue"); 
    ellipse(x + 15, y - 5, 10, 10);
    ellipse(x + 35, y - 5, 10, 10);
}

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