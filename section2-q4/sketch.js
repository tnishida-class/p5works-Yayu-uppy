// ギリシャ国旗
// function setup() {
//   const blue = color(0, 51, 160);
//   createCanvas(270, 180);
//   // noStroke();
//   background(255);
//
//   let d = height / 9; // 縞1本の太さ
//
//   for(let i = 0; i < 9; i++){
//     // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
//     rect(0, i * d, width, (i + 1) * d);
//   }
//
//   fill(blue);
//   let size = d * 5;
//   rect(0, 0, size, size);
//
//   fill(255);
//   // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
// }

// バーレーン

function setup() {
  const firebrick = color(178,34,34);
  const white = color(240, 240, 240);
  createCanvas(270, 180);
  noStroke();
  let d = height / 5; // 縞1本の太さ
  let e = width / 4;
  let i = 0;
  fill(firebrick);
  rect(0, 0, width, height);

  fill(white);
  for(let f = 0; f < 5; f++){
    triangle(e, 0+f*d, e+50, d/2+f*d, e, d+f*d);
    }
  rect(0, 0, 2*d, height);
}



// save
// fill(white);
// triangle(e, 0, e*2, d/2, e, d);
// triangle(e, d, e*2, d/2+d, e, d*2);
