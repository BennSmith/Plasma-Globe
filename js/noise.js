var centerX;
var centerY;
var iter; // for repetetive motion
var n;
var iterC;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //initialize variables
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
    iter = 0;
    n = 0;
    iterC = 0;
}

function draw() {
    //background(255);
    //flush the screen so the animation is smooth.

    var eY = centerY + 60 * noise(n);
    fill(255);
    noStroke();
    //draw the ellipse at the changing X position, and add noise to the Y to give it some jitter.
    var c = color(76 + 100 * sin(iterC), 175 - constrain(100 * sin(iterC), 0, 100), 80);
    fill(c);
    rect(iter, 0, 100, windowHeight);
    //ellipse(iter, eY, 100, 100);
    // original .52 angle
    //rEllipse(centerX, centerY, 150, 150, 15, radians(0));
    iter += 1;
    n += .001;
    //reset variable to the left side when it hits the right side.
    if (iter > windowWidth) {
        iter = 0;
    }

    iterC += .01;
}

function rEllipse(x, y, w, h, depth, angle) {
    if (depth <= 0) {

    } else {
        ellipse(x, y, w, h);
        x = x + w * sin(angle);
        y = y + h * cos(angle);
        console.log(map(mouseX, 0, windowWidth, 0, 2 * PI));
        angle += map(mouseX, 0, windowWidth, 0, 2 * PI);
        rEllipse(x, y, w * .8, h * .8, depth - 1, angle);
    }
}