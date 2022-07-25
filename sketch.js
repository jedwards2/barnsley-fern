let x = 0;
let y = 0;
let ferns = [];

function setup() {
  createCanvas(400, 400);
  strokeWeight(0.5);
  background(0);
  for (let i = 0; i < 10; i++) {
    let randomX = random(400);
    let randomSize = random(100) + 50;
    let randomDir1 = random(8) - 5;
    if (randomDir1 < 0 && randomDir1 > -1) {
      randomDir1 -= 1;
    } else if (randomDir1 > 0 && randomDir1 < 1) {
      randomDir1 += 1;
    }
    let barnsley = new Barnsley(randomX, 400, randomSize, randomDir1);
    ferns.push(barnsley);
  }
}

function draw() {
  for (let i = 0; i < 100; i++) {
    for (let x = 0; x < ferns.length; x++) {
      if (ferns[x].checkCount()) {
        stroke(ferns[x].stroke);
        ferns[x].nextPoint();
        ferns[x].drawPoint();
      }
    }
  }
}
