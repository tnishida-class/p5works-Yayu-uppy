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


// 練習問題：吹き出し
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 50, 150, "#003462" );
}

function balloon(t, a, b, c){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 50;
  fill(c);
  rect(0 + a, 0 + b, w + p * 2, h + p * 2);
  fill(255);
  text(t, p + a, h + p + b);
}
