const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    var arr=[]
    var arr2=""
    for(let i = 0;i<line.length;i++){
        arr.push(line.charCodeAt(i));  //아스키 코드로 변환
    }
    arr.sort(function(a, b)  {  //오름차순 정렬
        return a - b;
    });
    for(let i=0;i<line.length;i++){
       arr2+=String.fromCharCode(arr[i])   //아스키 코드 -> 문자로 변환
    }
    console.log(arr2)
    rl.close()
});
rl.on("close", () => {
    process.exit();
});
  