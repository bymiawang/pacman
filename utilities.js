// Contains utility functions or variables that don't neatly fit into other categories

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        movingDirection = 'LEFT';
    } else if (keyCode === RIGHT_ARROW) {
        movingDirection = 'RIGHT';
    } else if (keyCode === UP_ARROW) {
        movingDirection = 'UP';
    } else if (keyCode === DOWN_ARROW) {
        movingDirection = 'DOWN';
    }
}

function mousePressed() {
    circleSize += 10;
}

function mouseReleased() {
    circleSize -= 10;
}
