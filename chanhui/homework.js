const readline = require("readline"); //readline을 하기 위한 하나의 모듈

function checkStr(str) {
  //입력이 대문자인지 체크
  let c = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] < "A" || str[i] > "Z") {
      c = false;
      break;
    }
  }
  return c;
}

function sortStr(str) {
  //아스키 코드를 활용한 정렬 함수 구현
  const alphabatnum = Array.from({ length: 26 }, (v, i) => 0); //해당 문자의 인덱스를 담기 위한 변수
  const alphabat = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //해당 인덱스에 해당하는 알파벳
  for (let i = 0; i < str.length; i++) {
    const a = "A";
    let index = str.charCodeAt(i) - a.charCodeAt(0);
    alphabatnum[index]++;
  }

  let s = "";

  for (let i = 0; i < alphabat.length; i++) {
    for (let j = 0; j < alphabatnum[i]; j++) {
      s = s + alphabat[i];
    }
  }

  return s;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  process.stdout.write("문자열을 입력하세요: "); //줄바꿈 없이 문자열 입력받기

  rl.on("line", function (line) {
    if (!checkStr(line)) {
      console.log("문자열 입력은 대문자로만 가능합니다.");
    } else {
      console.log("정렬하기 전 문자열: ", line);
      console.log("정렬한 후 문자열: ", sortStr(line));
    }

    rl.close();
  }); //문자열 한 번 입력받음
}

main();
