var alphabatnum = Array.from({ length: 30 }, (v, i) => 0); //해당 문자의 인덱스를 담기 위한 변수
var alphabat = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //해당 인덱스에 해당하는 알파벳

function check(str) {
  //입력이 대문자인지 체크
  var c = true;
  for (i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") continue;
    else {
      c = false;
      break;
    }
  }
  return c;
}

function sort(str) {
  //아스키 코드를 활용한 정렬 함수 구현
  for (var i = 0; i < str.length; i++) {
    var a = "A";
    var index = str.charCodeAt(i) - a.charCodeAt(0);
    alphabatnum[index]++;
  }

  var s = "";

  for (var i = 0; i < 26; i++) {
    for (var j = 0; j < alphabatnum[i]; j++) {
      s = s + alphabat[i];
    }
  }

  return s;
}

const readline = require("readline"); //readline을 하기 위한 하나의 모듈

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var str = ""; //문자열 저장 변수

process.stdout.write("문자열을 입력하세요: "); //줄바꿈 없이 문자열 입력받기

rl.on("line", function (line) {
  str = line;
  var c = check(str);

  if (!c) {
    console.log("문자열 입력은 대문자로만 가능합니다.");
  } else {
    console.log("정렬하기 전 문자열: ", str);
    str = sort(str);
    console.log("정렬한 후 문자열: ", str);
  }

  rl.close();
}); //문자열 한 번 입력받음
