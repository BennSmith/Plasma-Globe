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
    var b1 = new bob();
    b1.display();
    var b2 = new bob();
    b2.x = 40;
    b2.display();
}

function bob() {
    this.x = 200;
    this.y = 100;

    this.display = function() {
        ellipse(this.x, this.y, 60, 60);
    }
}