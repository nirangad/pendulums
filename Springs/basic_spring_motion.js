let CANVAS_SIZE;

let origin;
let ropeStartLength;
let ropeCurrentLength;
let ropeRestLength;

let gravity;
let energyLoss;

let pendWeight;
let pendRadius;
let pendVelocity;

let pendPosition;

let color1 = "#355070";
let color2 = "#EAAC8B";

let K; // Hooke's law constant

function setup() {
  CANVAS_SIZE = 500;
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(color1);

  origin = createVector(width / 2, 0);
  ropeStartLength = 300;
  ropeCurrentLength = ropeStartLength;
  ropeRestLength = 200;

  gravity = 1;
  energyLoss = 0.005;

  pendWeight = 1;
  pendRadius = 25;
  pendVelocity = 0;

  K = 0.01;

  pendPosition = createVector(0, ropeCurrentLength);

  translate(origin.x, origin.y);
  stroke(color2);
  fill(color2);
  line(0, 0, pendPosition.x, pendPosition.y);
  ellipse(pendPosition.x, pendPosition.y, pendRadius, pendRadius);
}

function draw() {
  background(color1);

  translate(origin.x, origin.y);
  stroke(color2);
  fill(color2);
  line(0, 0, pendPosition.x, pendPosition.y);
  ellipse(pendPosition.x, pendPosition.y, pendRadius, pendRadius);

  let force = -1 * K * (ropeCurrentLength - ropeRestLength);
  let acceleration = force / pendWeight;
  pendVelocity += acceleration;
  pendVelocity *= 1 - energyLoss;
  ropeCurrentLength += pendVelocity;
  pendPosition = createVector(0, ropeCurrentLength);
}
