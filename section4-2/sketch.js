// テキスト「アニメーション」

// 関数の外で宣言することで全ての関数に適用される
let x, y, vx, vy;
const g = 1; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160, 192, 255); // drawで書いたものを毎回リセット
  ellipse(x, y, 20, 20);
  x += vx; // x= x + vx;
  y += vy;

  // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
  vy = constrain(vy + g, -vyMax, vyMax);
  // // vyMaxは縦方向の最大速度を定義し、よりリアルな動きにするためのもの
  // // 具体的には、
  // vx = vy + g;
  // if (vy > vyMax) {vy = vyMax}
  // if (vy < vyMax) {vy = -vyMax}
  // // のこと。


  // 端の処理パターン (1) 反対側から出てくる
  // if(x > width){ x = 0; }
  // else if(x < 0){ x = width; }
  // if(y > height){ y = 0; }
  // if(y < 0){ y = height; }

　// 端の処理パターン (2) 跳ね返る
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(x < 0 || y > height){ vy = -1 * vy; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
