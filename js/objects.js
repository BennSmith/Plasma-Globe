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
}

function draw() {
    ellipse(centerX, centerY, 50, 50);
}

function bob() {
    this.x = 4;
    this.y = 100;

}