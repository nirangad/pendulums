let CANVAS_SIZE;

let origin;
let gravity;
let energyLoss;

let ropeLength_1;
let pendWeight_1;
let pendRadius_1;
let pendPosition_1;
let startAngle_1;

let theta_1;
let angVelocity_1;
let angAcceleration_1;

let ropeLength_2;
let pendWeight_2;
let pendRadius_2;
let pendPosition_2;
let startAngle_2;

let theta_2;
let angVelocity_2;
let angAcceleration_2;

function setup() {
  CANVAS_SIZE = 500;
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(40);

  origin = createVector(width / 2, 0);
  ropeLength_1 = 200;
  ropeLength_2 = 100;

  gravity = 1;
  energyLoss = 0.001;

  startAngle_1 = PI / 2;
  theta_1 = startAngle_1;

  startAngle_2 = PI / 4;
  theta_2 = startAngle_2;

  pendWeight_1 = 5;
  pendRadius_1 = 15;

  pendWeight_2 = 3;
  pendRadius_2 = 10;

  angVelocity_1 = 0;
  angAcceleration_1 = pendWeight_1 * gravity * cos(theta_1);
  pendPosition_1 = createVector(
    ropeLength_1 * sin(theta_1),
    ropeLength_1 * cos(theta_1)
  );

  angVelocity_2 = 0;
  angAcceleration_2 = pendWeight_2 * gravity * cos(theta_2);
  pendPosition_2 = createVector(
    ropeLength_2 * sin(theta_2),
    ropeLength_2 * cos(theta_2)
  );

  translate(origin.x, origin.y);
  stroke(200);
  fill(200);
  line(0, 0, pendPosition_1.x, pendPosition_1.y);
  ellipse(pendPosition_1.x, pendPosition_1.y, pendRadius_1, pendRadius_1);

  line(pendPosition_1.x, pendPosition_1.y, pendPosition_2.x, pendPosition_2.y);
  ellipse(pendPosition_1.x, pendPosition_1.y, pendRadius_2, pendRadius_2);
}

function draw() {
  background(40);
  stroke(200);
  fill(200);
  translate(origin.x, origin.y);

  angVelocity_1 += angAcceleration_1;
  angVelocity_1 *= 1 - energyLoss;

  theta_1 += angVelocity_1 / ropeLength_1;
  angAcceleration_1 = -1 * gravity * sin(theta_1);

  pendPosition_1 = createVector(
    ropeLength_1 * sin(theta_1),
    ropeLength_1 * cos(theta_1)
  );

  angVelocity_2 += angAcceleration_2;
  angVelocity_2 *= 1 - energyLoss;

  theta_2 += angVelocity_2 / ropeLength_2;
  angAcceleration_2 = -1 * gravity * sin(theta_2);

  pendPosition_2 = createVector(
    ropeLength_2 * sin(theta_2),
    ropeLength_2 * cos(theta_2)
  );

  line(0, 0, pendPosition_1.x, pendPosition_1.y);
  ellipse(pendPosition_1.x, pendPosition_1.y, pendRadius_1, pendRadius_1);

  translate(pendPosition_1.x, pendPosition_1.y);
  line(0, 0, pendPosition_2.x, pendPosition_2.y);
  ellipse(pendPosition_2.x, pendPosition_2.y, pendRadius_2, pendRadius_2);
  //save(`frame_${frameCount}.png`);
}
