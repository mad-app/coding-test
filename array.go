//알파벳 대문자로만 입력만 받기"
package main

import (
	"fmt"
	"sort"
	"strings"
)

func main() {
	str := "REDBEEN"

	splited := strings.Split(str, "")
	sort.Strings(splited)
	fmt.Println(strings.Join(splited, ""))
}
