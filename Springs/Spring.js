class Spring {
  constructor(restLength, length, from, to, fixedStart = true, k = 0.01) {
    this.restLength = restLength;
    this.length = length;
    this.from = from;
    this.to = to;
    this.fixed = fixedStart;
    this.K = k;
  }

  strechedLength() {
    this.length = this.from.dist(this.to);
    return this.length - this.restLength;
  }

  update(to, from, length) {
    this.to = to;
    if (from !== undefined && !this.fixed) {
      this.from = from;
    }

    if (length !== undefined) {
      this.length = length;
    }
  }

  show() {
    line(this.from.x, this.from.y, this.to.x, this.to.y);
  }
}
