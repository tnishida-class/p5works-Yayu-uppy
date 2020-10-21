// テキスト「繰り返し」
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   let x = 0;
//   while(x < 100){ // 四角を描く座標が描画範囲内であれば続ける
//     rect(x, x, 20, 20);
//     x = x + 20; // 繰り返し1回ごとに場所を動かす
//   }
// }

// for文 シンプルな繰り返しには for 文を用いる
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let x = 0; x < 100; x = x +20){
//     rect(x, x, 20, 20);
//   }
// }

// i++ は「i を 1 増やす」という意味の省略記法
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0; i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }

// function setup() {
//   createCanvas(100,100);
//   background(80);
//   // fill(#FFFFFF);
//   for(let x = 10; x < 100; x = x +10){
//     rect(x, 0, 1, 100);
//   }
// }

// function setup() {
//   createCanvas(100,100);
//   background(196);
//   line(10, 0, 10, 100);
//   line(20, 0, 20, 100);
//   line(30, 0, 30, 100);
// }

// function setup() {
//   createCanvas(100,100);
//   background(196);
//   for(let x = 10; x < 100; x = x +10){
//      line(x, 0, x, 100);
//    }
// }

// function setup() {
//   createCanvas(100,100);
//   background(196);
//   for(let i = 0; i < 10; i++){
//     let x = 10*i;
//     line(x, 0, x, 100);
//   }
// }

// function setup() {
//   createCanvas(100,100);
//   background(196);
//   for(let i = 0; i < 9; i++){
//   if(i < 4){
//     strokeWeight(3);
//   }
//   else if(i < 7){
//     strokeWeight(2);
//   }
//   else{
//     strokeWeight(1);
//   }
//   let x = 10*(i+1);
//   line(x, 0, x, 100);
//   // 線を引くところは上の例のままなので省略
//  }
// }

// function setup() {
//   createCanvas(100,100);
//   background(196);
//   for(let i = 0; i < 10; i++){
//   for(let j = 0; j < 10; j++){
//     if (i % 2 == 0){
//       fill(0);
//     }
//     else{fill(250)}
//
//     // if(j % 2==0){
//     //   fill(0)
//     // }
//     // else{
//     //   fill(250)
//     // }
//     console.log(i, j); // 補足： i,j の変化がわかりやすくなるように入れています
//     rect(i * 10, j * 10, 5, 5);
//   }
//  }
// }

// // 小手調べ
// function setup() {
//   createCanvas(100,100);
//   for(let i = 10; i > 0; i= i-1){
//     let x = 10*i;
//     if(i>5){
//       stroke(255, 0, 0);
//     }
//     else {
//       stroke(0, 0, 255);
//     }
//     ellipse(50, 50, x);
//       }
// }


// // チェッカー
// function setup() {
//   createCanvas(100,100);
//   noStroke();
//   for(let i = 0; i < 8; i++){
//   for(let j = 0; j < 8; j++){
//    if(i % 2 !== 0 && j % 2 == 0 || i % 2 == 0 && j % 2 !== 0){
//      fill(100, 100, 100);
//      console.log(i, j);
//      rect(i * 10, j * 10, 10, 10);
//       if(j<3){
//         fill(250, 0, 0);
//         ellipse(5+i*10, 5+j*10, 9);
//       }
//       if(j>4){
//         fill(0);
//         ellipse(5+i*10, 5+j*10, 9);
//       }
//      }
//    else{
//      noFill();
//    }
//   }
//  }
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


    // arc(50, 50, 60, 60, x*i, (x+1)*i, PIE);
    // arc(50, 50, 55, 55, x*i, (x+1)*i, PIE);
  }



  fill(0, 255, 0);
  ellipse(50, 50, 10);
  fill(255, 0, 0);
  ellipse(50, 50, 5);

}






// for 文を使うと、同じプログラムを以下のように書くことができます
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0; i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }
//
// function setup() {
//   createCanvas(100,100);
//   let s;  // s という名前の変数を宣言する
//   s = 20; // s に 20 を代入する
//   rect(10, 10, s, s); //※後ろ二つは幅と高さ
//   rect(90 - s, 90 - s, s, s);
// }

// 演算
// function setup() {
//   let x = 21;
//   point(x, 46);
//   x = x - 2;     // x - 2 を計算して、その結果を x に再代入するという意味になります。つまり x の値が 2 減ります。
//   point(x, 46);
//   x = x + 9;     // 「x と x + 9 が等しいって？そんなバカな！」って最初は戸惑うと思います。
//   point(x, 46);
// }
