// // backup練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
// let count;
// let cycle;
//
// function setup(){
//   createCanvas(200, 200);
//   count = 0;
//   cycle = 100;
// }
//
// function draw(){
//   background(160, 192, 255);
//   count = (count + 1) % cycle;
//   // ↑countがcycleを超えるとcountをリセットする？
//   // BLANK[1]
//   let size = count
//   ellipse(width / 2, height / 2, size);
//
// }



// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 2) % cycle;
  // ↑countがcycleを超えるとcountをリセットする？
  // BLANK[1]
  let size;
  if (count < 50) {
    size = 100 - count
  }
  else {
    size = count
  }
  ellipse(width / 2, height / 2, size);

}
