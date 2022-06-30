package main

import (
	"fmt"
	"math/rand"
	"sort"
)

func quickSort(arr []byte) []byte { //퀵소트 구현부

	if len(arr) <= 1 {
		return arr
	}

	median := arr[rand.Intn(len(arr))]

	lowPart := make([]byte, 0, len(arr))
	highPart := make([]byte, 0, len(arr))
	middlePart := make([]byte, 0, len(arr))

	for _, item := range arr {
		switch {
		case item < median:
			lowPart = append(lowPart, item)
		case item == median:
			middlePart = append(middlePart, item)
		case item > median:
			highPart = append(highPart, item)
		}
	}

	lowPart = quickSort(lowPart)
	highPart = quickSort(highPart)

	lowPart = append(lowPart, middlePart...)
	lowPart = append(lowPart, highPart...)

	return lowPart
}

func main() {
	var str string
	fmt.Printf("영문자를 입력해주세요:")
	fmt.Scanln(&str)
	b := []byte(str)                    //아스키 코드값으로 변환한 뒤 b에 저장
	sort.Slice(b, func(i, j int) bool { //1번방법 - sort사용
		return b[i] < b[j]
	})
	fmt.Println(string(b))            //1번방법 출력
	fmt.Println(string(quickSort(b))) //2번 방법 - 퀵소트 사용

}
