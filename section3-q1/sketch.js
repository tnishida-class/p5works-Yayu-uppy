// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
// function setup(){
//   createCanvas(400, 400);
//   background(255);
//   balloon("I love keyakizaka46");
// }
//
// function balloon(t){
//   let w = textWidth(t);
//   let h = textAscent() + textDescent();
//   let p = 50;
//   fill(0);
//   rect(0, 0, w + p * 2, h + p * 2);
//   fill(255);
//   text(t, p, h + p);
// }



function setup(){
  createCanvas(400, 400);
  background(255);
  noStroke();
  balloon("I love keyakizaka46", 50, 50, 150);
}

function balloon(t, cx, cy, b){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 50;
  let x = cx;
  let y = cy;
  fill(b);
  rect(0 + x, 0 + y, w + p * 2 + 2 * x, h + p * 2 + 2 * y, 30);
  fill(255);
  text(t, p + x, h + p + y);

}
