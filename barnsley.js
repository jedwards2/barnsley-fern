class Barnsley {
  constructor(xStart, yStart, size, dir1) {
    this.x = 0;
    this.y = 0;
    this.callCount = 0;
    this.xStart = xStart - size / 2;
    this.yStart = yStart - size;
    this.size = size;
    this.dir1 = dir1;
    this.dir2 = dir1 * -1;
    this.stroke = [12, random(255), 12];
  }

  checkCount() {
    if (this.callCount < this.size * 50) {
      return true;
    }
    return false;
  }

  nextPoint() {
    console.log(this.dir1, this.dir2);
    this.callCount += 1;

    let nextX;
    let nextY;
    let r = random();

    if (r < 0.01) {
      nextX = 0;
      nextY = 0.16 * this.y;
    } else if (r < 0.86) {
      nextX = 0.85 * this.x + 0.04 * this.y;
      nextY = -0.04 * this.x + 0.85 * this.y + 1.6;
    } else if (r < 0.93) {
      nextX = 0.2 * this.x + -0.26 * this.y;
      nextY = 0.23 * this.x + 0.22 * this.y + 1.6;
    } else {
      nextX = -0.15 * this.x + 0.28 * this.y;
      nextY = 0.26 * this.x + 0.24 * this.y + 0.44;
    }

    this.x = nextX;
    this.y = nextY;
  }

  drawPoint() {
    // let px = map(this.x, -2.182, 2.6558, this.xStart, this.xStart + this.size);
    let px = map(
      this.x,
      this.dir1,
      this.dir2,
      this.xStart,
      this.xStart + this.size
    );
    let py = map(this.y, 0, 9.9983, this.yStart + this.size, this.yStart);
    point(px, py);
  }
}
