// Contains all functions related to Pac-Man

let mouthSpeed = 3; // speed of mouth opening and closing

function drawPacman() {
    noStroke();
    fill("yellow");

    // Set the radius of the mouth
    let mouthRadius = circleSize / 2;

    // Draw Pac-Man
    if (movingDirection === 'RIGHT') {
        arc(circleX, circleY, circleSize, circleSize, QUARTER_PI - ang, -QUARTER_PI + ang, PIE);
    } else if (movingDirection === 'LEFT') {
        arc(circleX, circleY, circleSize, circleSize, PI + QUARTER_PI - ang, PI - QUARTER_PI + ang, PIE);
    } else if (movingDirection === 'UP') {
        arc(circleX, circleY, circleSize, circleSize, -HALF_PI + QUARTER_PI - ang, -HALF_PI - QUARTER_PI + ang, PIE);
    } else if (movingDirection === 'DOWN') {
        arc(circleX, circleY, circleSize, circleSize, HALF_PI + QUARTER_PI - ang, HALF_PI - QUARTER_PI + ang, PIE);
    }
}

function updateMouthAnimation() {
    // Mouth animation logic
    if (open) {
        ang += radians(mouthSpeed);
        if (ang >= radians(45)) { // Maximum mouth opening angle
            open = false;
        }
    } else {
        ang -= radians(mouthSpeed);
        if (ang <= 0) { // Mouth closed
            open = true;
        }
    }
}

function updatePacmanPosition() {
    let speed = sp; // Use the existing speed variable
    // Check the direction and update Pac-Man's position accordingly without changing direction at edges
    if (movingDirection === 'RIGHT') {
        circleX += speed;
    } else if (movingDirection === 'LEFT') {
        circleX -= speed;
    } else if (movingDirection === 'UP') {
        circleY -= speed;
    } else if (movingDirection === 'DOWN') {
        circleY += speed;
    }

    // Keep Pac-Man within the canvas bounds
    circleX = constrain(circleX, circleSize / 2, width - circleSize / 2);
    circleY = constrain(circleY, circleSize / 2, height - circleSize / 2);
}
