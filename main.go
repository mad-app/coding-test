package main

import (
	"fmt"
	"os"
	"sort"
)

func main() {
	var str string
	fmt.Printf("영문자를 입력해주세요:")
	fmt.Scanln(&str)

	b := []byte(str) //아스키 코드값으로 변환한 뒤 b에 저장
	for i := 0; i < len(b); i++ {
		if b[i] < 65 || b[i] > 90 {
			fmt.Printf("대문자를 입력해주세요.")
			os.Exit(0)
		}
	}
	sort.Slice(b, func(i, j int) bool {
		return b[i] < b[j]
	})
	fmt.Println(string(b))
}
