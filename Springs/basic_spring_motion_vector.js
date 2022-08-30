let CANVAS_SIZE;

let origin;
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

  gravity = 1;
  energyLoss = 0.005;

  origin = createVector(width / 2, 0);
  startPosition = createVector(300, 350);

  stroke(color2);
  fill(color2);

  pendulum = new Particle(startPosition, 25);
  spring = new Spring(200, origin.dist(startPosition), origin, startPosition);
  spring.show();
  pendulum.show();

  let a = createVector(0, 0);
  let b = createVector(3, 4);
  let c = p5.Vector.sub(b, a);
  console.table(a);
  console.table(b);
  console.table(c);
  console.table(c.mag());
  c.normalize();
  console.table(c);
}

function draw() {
  background(color1);

  stroke(color2);
  fill(color2);

  spring.show();
  pendulum.show();

  let springForce = -1 * spring.K * spring.strechedLength();
  let gravityForce =
    (pendulum.weight * gravity * pendulum.position.x) / spring.length;
  let accOrigin = (springForce - gravityForce) / pendulum.weight;
  pendulum.velocity += accOrigin;
  pendulum.velocity *= 1 - energyLoss;
  spring.length += pendulum.velocity;
  p5.Vector.add(pendulum.position, pendulum.velocity);

  spring.update(pendulum.position);
}
