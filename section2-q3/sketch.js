// // ダーツ
// let cx, cy, maxR;
//
// function setup() {
//   let green = color(0, 255, 0);
//   let red = color(255, 0, 0);
//   let black = color(0);
//   let cream = color(242, 212, 147);
//   createCanvas(400, 400);
//   background(255);
//   stroke(255);
//   strokeWeight(3);
//
//   cx = width / 2;
//   cy = height / 2;
//   maxR = min(width, height);
//
//   drawCircle(black, maxR);
//   drawArcs(green, red, maxR * 0.8);
//   // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
//   drawCircle(red, maxR * 0.05);
// }
//
// function drawCircle(c, r){
//   fill(c);
//   ellipse(cx, cy, r, r);
// }
//
// function drawArcs(c1, c2, r) {
//   for (let i = 0; i < 20; i++) {
//     let start = TWO_PI / 20 * i;
//     let stop = TWO_PI / 20 * (i + 1);
//     fill(i % 2 == 0 ? c1 : c2);
//     arc(cx, cy, r, r, start, stop, PIE);
//   }
// }

// ダーツ
function setup() {
  createCanvas(100,100);
  stroke(240, 240, 240);
  fill(0);
  ellipse(50, 50, 100);
  let i = PI/10;
  for(let y = 0; y < 2; y++){
    for(let x = 0; x < 20; x++){
      if(x%2 == 0){
        fill(0, 255, 0);
      }
      else{
        fill(255, 0, 0);
      }
      arc(50, 50, 80-30*y, 80-30*y, x*i, (x+1)*i, PIE);
      if(x%2 == 0){
        fill(255, 197, 107);
      }
      else{
        fill(0);
      }
      arc(50, 50, 75-30*y, 75-30*y, x*i, (x+1)*i, PIE);
  }
  }
  fill(0, 255, 0);
  ellipse(50, 50, 10);
  fill(255, 0, 0);
  ellipse(50, 50, 5);

}
