// 最終課題を制作しよう

let x, y, vx, vy;
let grabbed;
let angle = 0.0;
let img;

function preload() {
  imgA = loadImage('https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  v = 0.04
  vx = 0;
  vy = 0;
  grabbed = false;
}

function draw(){
  background('#202020');
  fill(200);
  text('スペースキー長押しでブラックホール　上矢印で月加速　下矢印で月停止', 20, 20);
  image(imgA, x, y, 40, 40);
  fill(0);
  ellipse(width / 2 + 20, height / 2 + 20, 10, 10);
  image(imgA, x, y, 40, 40);
  angle += 0.02;
  if(keyIsDown(UP_ARROW)){
    angle += v;
   }
  if(keyIsDown(DOWN_ARROW)){
     angle -= v / 2;
  }
  if(keyIsDown(" ".charCodeAt(0))){
    blackhole (width / 2, height / 2);
  }

  if(!grabbed){
    x += vx;
    y += vy;
    if(x < 0 || x > width){ vx = -0.8 * vx; }
    if(y < 0 || y > height){ vy = -0.8 * vy; }
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }
  satellite(10);
}



function mousePressed(){
  grabbed = dist(mouseX, mouseY, x, y) < 40;
}

function mouseDragged(){
  if(grabbed){
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased(){
  if(grabbed){
    grabbed = false;
    vx = (mouseX - pmouseX) / 5;
    vy = (mouseY - pmouseY) / 5;
  }
}

function satellite(r){
  push();
  let theta = 0;
  theta = theta + angle;
  let i = x + cos(theta) * 200;
  let j = y + sin(theta) * 200;
  noStroke();
  fill('#FFFF00');
  arc(i, j, r, r, HALF_PI, 0 - HALF_PI, CHORD);
  fill('#202020');
  arc(i, j, r, r, 0 - HALF_PI, HALF_PI, CHORD);
  pop();
}

// blackhole is only for PLANET
function blackhole(a, b){
  let theta = Math.atan2( y - b, x - a) * 180 / Math.PI;
  x = a + cos(theta) * dist(a, b, x, y);
  y = b + sin(theta) * dist(a, b, x, y);
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}








// backup
// // テキスト「アニメーション」
// // let x, y;
// // let angle = 0.0;
// // let img;
// // function preload() {
// //   imgA = loadImage('https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png');
// // }
// //
// // function setup(){
// //   createCanvas(windowWidth, windowHeight);
// //   x = width / 2;
// //   y = height / 2;
// //   v = 0.04
// // }
// //
// // function draw(){
// //   background('#202020');
// //   image(imgA, x, y, 40, 40);
// //   fill(0);
// //   ellipse(width / 2 + 20, height / 2 + 20, 10, 10);
// //   image(imgA, x, y, 40, 40);
// //   // // 画面から出ないように
// //   // x = constrain(x, 0, width - 40);
// //   // y = constrain(y, 0, height);
// //   angle += 0.02;
// //   if(keyIsDown(UP_ARROW)){
// //     angle += v;
// //    }
// //   if(keyIsDown(DOWN_ARROW)){
// //      angle -= v / 2;
// //   }
// //   if(keyIsDown(" ".charCodeAt(0))){
// //     blackhole (width / 2, height / 2);
// //   }
// //   satellite(10);
// // }
// //
// //
// //
// // function mousePressed(){
// //   grabbed = dist(mouseX, mouseY, x, y) < 30;
// // }
// //
// // function mouseDragged(){
// //   if(grabbed){
// //     x = mouseX;
// //     y = mouseY;
// //   }
// // }
// //
// // function satellite(r){
// //   push();
// //   let theta = 0;
// //   theta = theta + angle;
// //   let i = x + cos(theta) * 200;
// //   let j = y + sin(theta) * 200;
// //   noStroke();
// //   fill('#FFFF00');
// //   arc(i, j, r, r, HALF_PI, 0 - HALF_PI, CHORD);
// //   fill('#202020');
// //   arc(i, j, r, r, 0 - HALF_PI, HALF_PI, CHORD);
// //   pop();
// // }
// //
// // // blackhole is only for PLANET
// // function blackhole(a, b){
// //   let theta = Math.atan2( y - b, x - a) * 180 / Math.PI;
// //   x = a + cos(theta) * dist(a, b, x, y);
// //   y = b + sin(theta) * dist(a, b, x, y);
// // }
// //
// // function windowResized(){
// //   resizeCanvas(windowWidth, windowHeight);
// // }
