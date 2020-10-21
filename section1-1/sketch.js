function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(178, 100, 162);
  triangle(12,220,116,120,116,10);
  fill(94, 185, 84);
  triangle(0,208,106,108,106,0);
  fill(255);
  textSize(32);
  textFont("serif");
  text("17", 68, 100);
}

// triangle(12,120,116,120,116,10);
// triangle(0,108,106,108,106,0);

function setup() {
  createCanvas(100,100);
  let s;  // s という名前の変数を宣言する
  s = 20; // s に 20 を代入する
  rect(10, 10, s, s);
  rect(90 - s, 90 - s, s, s);
}
