class Particle {
  constructor(position, radius, weight = 1, velocity = null) {
    this.position = position;
    this.radius = radius;
    this.weight = weight;
    this.velocity = velocity == null ? createVector(0, 0) : velocity;
  }

  update(position, velocity) {
    this.position = position;
    if (velocity !== undefined) {
      this.velocity = velocity;
    }
  }

  show() {
    ellipse(this.position.x, this.position.y, this.radius, this.radius);
  }
}
