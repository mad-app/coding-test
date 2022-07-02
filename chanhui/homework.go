package main

import (
	"bufio"
	"fmt"
	"os"
)

func sortStr(text string) string { //문자열 정렬
	const alphabat = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //해당 인덱스에 해당하는 알파벳

	alphabatdata := [26]int{0} //알파벳 인덱스에 해당하는 데이터의 개수
	s := ""

	for i := 0; i < len(text); i++ {
		ind := text[i] - 'A'
		alphabatdata[ind] = alphabatdata[ind] + 1
	}

	for i := 0; i < len(alphabat); i++ {
		for j := 0; j < alphabatdata[i]; j++ {
			s = s + string(alphabat[i])
		}
	}
	return s
}

func check(test string) bool { //입력이 대문자인지 체크
	c := true
	for i := 0; i < len(test); i++ {
		if test[i] < 'A' || test[i] > 'Z' {
			c = false
			break
		}
	}

	return c
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	fmt.Printf("문자열을 입력하세요: ")
	scanner.Scan()
	text := scanner.Text()

	if !check(text) {
		fmt.Printf("문자열 입력은 대문자로만 가능합니다.")
	} else {
		fmt.Printf("정렬 전 문자열 : %s\n", text)
		fmt.Printf("정렬 후 문자열 : %s\n", sortStr(text))
	}
}
