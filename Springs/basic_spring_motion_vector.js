let CANVAS_SIZE;

let anchor;
let startPosition;

let gravity;
let energyLoss;

let pendulum;
let spring;

let color1 = "#355070";
let color2 = "#EAAC8B";

function setup() {
  CANVAS_SIZE = 500;
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(color1);

  gravity = createVector(0, 0.01);
  energyLoss = 0.005;

  anchor = createVector(width / 2, 0);
  startPosition = createVector(350, 200);

  stroke(color2);
  fill(color2);

  pendulum = new Particle(startPosition, 25, 2);
  spring = new Spring(150, anchor.dist(startPosition), anchor, startPosition);
}

function draw() {
  background(color1);

  stroke(color2);
  fill(color2);

  spring.show();
  pendulum.show();

  let springForceVector = p5.Vector.sub(pendulum.position, anchor);
  springForceVector.normalize();

  let springForce = springForceVector.mult(
    -1 * spring.K * spring.strechedLength()
  );

  let gravityForce = gravity.normalize().mult(pendulum.weight);

  pendulum.velocity.add(springForce).add(gravityForce);
  pendulum.velocity.mult(1 - energyLoss);
  pendulum.position.add(pendulum.velocity);

  spring.update(pendulum.position);
}
