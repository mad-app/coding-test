const readline = require('readline');

// 인터페이스 객체
const read1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isUpperCase(input) {
  const upper =input.toUpperCase();
  return upper
};

function compare_abc(input) {
  const abc = input;
  const myRegExp = /^[A-Z]+$/;
  return myRegExp(abc)
};

console.log("대문자로만 문자열 입력가능");
// 알파벳 순으로 정렬해서 입력값에 맞는 파일명을 찾아 그파일 내용 출력

read1.on('line',function(text){
  var str='';
      var str = text;
      read1.close();
if(str != isUpperCase(str)){
  console.log("소문자 입력불가");
}else if(compare_abc(str) === true){
  var Split = str.split('');
Split.sort();
console.log("입력내용 알파벳순으로 정렬해서 출력: "+ Split.join(''));
}
else{
  console.log("숫자,특수문자 입력불가");

}
});
