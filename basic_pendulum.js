let CANVAS_SIZE;

let origin;
let ropeLength;
let pendWeight;
let pendRadius;
let pendPosition;
let startAngle;
let gravity;
let energyLoss;

let theta;
let angVelocity;
let angAcceleration;

function setup() {
  CANVAS_SIZE = 500;
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(40);

  origin = createVector(width / 2, 0);
  ropeLength = 200;

  gravity = 1;
  energyLoss = 0.001;

  startAngle = PI / 2;
  theta = startAngle;

  pendWeight = 1;
  pendRadius = 15;

  theta = startAngle;
  angVelocity = 0;
  angAcceleration = pendWeight * gravity * cos(theta);
  pendPosition = createVector(ropeLength * sin(theta), ropeLength * cos(theta));

  translate(origin.x, origin.y);
  stroke(200);
  fill(200);
  line(0, 0, pendPosition.x, pendPosition.y);
  ellipse(pendPosition.x, pendPosition.y, pendRadius, pendRadius);
}

function draw() {
  background(40);
  stroke(200);
  fill(200);
  translate(origin.x, origin.y);

  angVelocity += angAcceleration;
  angVelocity *= 1 - energyLoss;

  theta += angVelocity / ropeLength;
  angAcceleration = -1 * gravity * sin(theta);

  pendPosition = createVector(ropeLength * sin(theta), ropeLength * cos(theta));
  line(0, 0, pendPosition.x, pendPosition.y);
  ellipse(pendPosition.x, pendPosition.y, pendRadius, pendRadius);
  //save(`frame_${frameCount}.png`);
}
