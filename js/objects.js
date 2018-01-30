var centerX;
var centerY;
var inc;
var system;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //initialize variables
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
    inc = 2 * PI / 2;
    system = new Array();

    var b = new Beam(0);
    system.push(b);
}

function draw() {
    background('#212121');

    // Draw the Plasma Globe Base
    noFill();
    stroke('#FAFAFA');
    strokeWeight(10);
    ellipse(centerX, centerY, 400, 400);
    noStroke();
    fill('#4FC3F7');
    ellipse(centerX, centerY, 50, 50);

    // Generate and Draw Beams

    if (inc > 20) {
        var i = random(-15, 15);
        system.push(new Beam(i));
        inc = 0;
    }

    displayAll();
    clean();
    inc += 1;
}

function displayAll() {
    for (var x = 0; x < system.length; x++) {
        system[x].display();
    }
}

function clean() {
    for (var x = 0; x < system.length; x++) {
        if (system[x].life <= 0) {
            system.shift();
        }
    }
}

function Beam(i) {
    this.i = i;
    this.direction = this.i / abs(this.i);

    this.color1 = color('#E1BEE7');
    this.color2 = color('#4FC3F7');

    this.life = 7;

    this.display = function() {
        var x = centerX + 200 * sin(radians(this.i));
        var y = centerY + 200 * cos(radians(this.i));
        var x2 = (x + centerX) / 2 + 50;
        var y2 = (y + centerY) / 2 - 50;
        var x3 = (x + centerX) / 2 - 50;
        var y3 = (y + centerY) / 2 + 50;

        fill(this.color1);
        noStroke();
        ellipse(
            x,
            y,
            50,
            50
        );
        noFill();
        stroke(this.color2);
        strokeWeight(3);
        bezier(
            x, y,
            x2, y2,
            x3, y3,
            centerX, centerY
        );

        this.life -= .05;
        this.i += this.direction;
    }
}