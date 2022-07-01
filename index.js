const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("영문자를 입력해주세요")
rl.on("line", (line) => {
    let arr=[]
    let str=""
   
    for(let i = 0;i<line.length;i++){
        arr.push(line.charCodeAt(i));  //아스키 코드로 변환
    }
    for (let i= 0; i < line.length; i++ ){
		if (arr[i] < 65 || arr[i] > 90 ){
			console.log("대문자를 입력해주세요.")
            process.exit();
		}
	}
    arr.sort(function(a, b)  {  //오름차순 정렬
        return a - b;
    });
    for(let i=0;i<line.length;i++){
       str+=String.fromCharCode(arr[i])   //아스키 코드 -> 문자로 변환
    }
    console.log(str)
    rl.close()
    rl.on("close", () => {
        process.exit();
    });
});

  