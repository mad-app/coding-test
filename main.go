package main

import (
	"fmt"
	"regexp"
	"sort"
	"strings"
)

func CheckNoUpper(s string) bool {
	match, _ := regexp.MatchString("[^A-Z]", s)
	return match
}

//입력값 대문자이외엔 입력불가, 출력시 abc순으로 정렬
func main() {

	var strinput string
	fmt.Println("대문자로만 텍스트 입력가능 ")
	fmt.Scan(&strinput)
	if strings.ToUpper(strinput) != strinput {
		fmt.Println("대문자 이외에는 입력불가")
	} else if CheckNoUpper(strinput) {
		fmt.Println("입력불가")
	} else {
		strinput := strings.Split(strinput, "")
		sort.Sort(sort.StringSlice(strinput))
		sumstr := strings.Join(strinput, "")
		fmt.Println("알파벳 순으로 정렬: " + sumstr)
	}
}
