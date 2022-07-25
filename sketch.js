let x = 0;
let y = 0;
let ferns = [];

function setup() {
  createCanvas(400, 400);
  strokeWeight(0.5);
  stroke(255);
  background(0);
  let barnsley = new Barnsley(0, 400, 100);
  ferns.push(barnsley);
}

function draw() {
  for (let i = 0; i < 100; i++) {
    for (let x = 0; x < ferns.length; x++) {
      if (ferns[x].checkCount) {
        ferns[x].nextPoint();
        ferns[x].drawPoint();
      }
    }
  }
}
