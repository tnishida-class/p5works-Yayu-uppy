// テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(windowWidth, windowHeight);
  background (200);

  calendar(2019, 10);

  // // うるう年判定
  // for(let i = 2020; i <= 2100; i++){
  //   if(isLeapYear(i)){
  //     console.log(i + "年はうるう年です");
  //   }
  //   else{
  //     console.log(i + "年はうるう年ではありません");
  //   }
  // }

  // // 曜日判定
  // let i = dayOfWeek(1980, 01, 01);
  // let j = dayOfWeekAsString(i);
  // console. log(j + "曜日です");

}

// 月の日数から引いていく？
function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  let days = daysInMonth(y, m);
  for(let i = 0; i < 7; i++){
    for(let j = 1; j < 7; j++){
      rect(i * 50, j*50, 50, 50);
    }
  }

  for(let i = 0; i < 7; i++){
    let day = dayOfWeekAsString(i)
    text(day, i * 50 + 20, 50 + 20, 50, 50);
  }

  for(let i = dow; i < 7; i++){
    text(i - dow + 1, i * 50, 50 + 50, 50, 50);
  }

  for(let i = 0; i < 7; i++){
    text(days - dow, i* 50, 50 + 50 +50, 50, 50);
  }

  // for(let i = 0; i < 7; i++){
  //   text(i - dow +1 +7, i* 50, 50 + 50 +50, 50, 50);
  // }
  // for(let i = 0; i < 7; i++){
  //   text(i - dow +1 +7 +7, i * 50, 50 + 50 +50 +50, 50, 50);
  // }


  // for(let d = 1; d <= daysInMonth(y, m); d++){
  //   // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  // }
}


function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  return isLeapYear(y) ? 366 : 365;
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  // 1970年1月4日は日曜日＝結果は0
  let count = 0;
  for(let i = 1970; i <= y - 1; i++){
    count += daysInYear(i);
  }
  count = count + dayOfYear(y, m, d) - 4;
  let j = count%7;
  return j;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}

















// 元のコード
// // テキスト「関数を作る(2) 値を戻す関数」～「総仕上げ：カレンダーを描画しよう」
// function setup(){
//   createCanvas(200, 200);
//   calendar(2019, 10);
//
//   for(let i = 2000; i <= 2100; i++){
//     if(isLeapYear(i)){
//       console.log(i + "年はうるう年です");
//     }
//     else{
//       console.log(i + "年はうるう年ではありません");
//     }
//   }
// }
//
// function calendar(y, m){
//   let dow = dayOfWeek(y, m, 1);
//   for(let d = 1; d <= daysInMonth(y, m); d++){
//     // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
//   }
// }
//
// function isLeapYear(y){
//   return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
// }
//
// function daysInYear(y){
//   // BLANK[1]
// }
//
// function daysInMonth(y, m){
//   if(m == 2){
//     return isLeapYear(y) ? 29 : 28;
//   }
//   else if(m == 4 || m == 6 || m == 9 || m == 11){
//     return 30;
//   }
//   else{
//     return 31;
//   }
// }
//
// function dayOfYear(y, m, d){
//   let count = 0;
//   for(let i = 1; i < m; i++){
//     count += daysInMonth(y, i);
//   }
//   return count + d;
// }
//
// function dayOfWeek(y, m, d){
//   // BLANK[2]
// }
//
// function dayOfWeekAsString(dow){
//   const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
//   return a[dow];
// }
//
