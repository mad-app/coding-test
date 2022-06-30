package main

import (
	"fmt"
	"regexp"
	"sort"
	"strings"
	"time"
)

func IsUpper(s string) string {
	if strings.ToUpper(s) != s {
		return "fail"
	}
	return s
}

func compare_abc(s string) bool {
	match, _ := regexp.MatchString("[^A-Z]", s)
	return match
}

func main() {
	//입력값 대문자이외엔 입력불가, 출력시 abc순으로 정렬

	var str string
	fmt.Println("대문자로 텍스트 입력 ")
	fmt.Scan(&str)
	if IsUpper(str) != str {
		fmt.Println("소문자 입력불가")
	} else if compare_abc(str) == true {
		fmt.Println("특수문자,소문자입력불가")

	} else {
		str1 := str
		cut1 := strings.Split(str1, "")
		sort.Sort(sort.StringSlice(cut1))
		sum := strings.Join(cut1, "")
		fmt.Println("알파벳 순으로 정렬: " + sum)

	}
	time.Sleep(time.Second * 8)
}
