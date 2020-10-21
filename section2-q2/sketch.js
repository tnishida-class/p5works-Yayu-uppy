// // チェッカー
// function setup() {
//   createCanvas(200, 200);
//   let size = width / 8;
//   noStroke();
//   for(let i = 0; i < 8; i++){
//     for(let j = 0; j < 8; j++){
//       // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
//     }
//   }
// }



// チェッカー
function setup() {
  createCanvas(100,100);
  noStroke();
  for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
   if(i % 2 !== 0 && j % 2 == 0 || i % 2 == 0 && j % 2 !== 0){
     fill(100, 100, 100);
     console.log(i, j);
     rect(i * 10, j * 10, 10, 10);
      if(j<3){
        fill(250, 0, 0);
        ellipse(5+i*10, 5+j*10, 9);
      }
      if(j>4){
        fill(0);
        ellipse(5+i*10, 5+j*10, 9);
      }
     }
   else{
     noFill();
   }
  }
 }
}
