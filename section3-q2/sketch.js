// 練習問題：神戸市のマーク(市章)
function setup(){
  createCanvas(400, 400);
  background(255);
  kobeCity(100, 200, 100);
  // kobeUniv(300, 200, 100);
}

function kobeCity(x, y, size){
  push();
  noFill();
  stroke(67, 171, 96);
  strokeWeight(size * 0.25);
  strokeCap(SQUARE);
  arc(x + size * 0.25, y, size, size, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  // BLANK[1]
  arc(x - size/1.9 + size * 0.25, y, size, size, PI + QUARTER_PI, PI * 2 + QUARTER_PI);
  pop();
}

// // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
// function kobeUniv(x, y, size){
//   const red = color(196, 0, 0);
//   const blue = color(14, 47, 146);
//   const green = color(22, 131, 46);
//   const gray = color(77);
// }
