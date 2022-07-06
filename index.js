const readline = require('readline');

// 인터페이스 객체
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ChangeUpperCase(input) {
  const upper = input.toUpperCase();
  return upper
};

function CompareString(input) {
  const myRegExp = /^[A-Z]+$/;
  return myRegExp.test(input)  //test() true,false반환
};

// 알파벳 순으로 정렬해서 입력값에 맞는 파일명을 찾아 그파일 내용 출력
console.log("대문자로만 문자열 입력가능");
read.on('line',function(text){
  let str = text;
  read.close();
  if(str != ChangeUpperCase(str)){
    console.log("소문자 입력불가");
  }else if(CompareString(str)){
    var splitstr = str.split('');
    splitstr.sort();
    console.log("입력내용 알파벳순으로 정렬해서 출력: "+ splitstr.join(''));
  }else{
    console.log("숫자,특수문자 입력불가");
  }
});
