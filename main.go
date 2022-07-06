//입력은 알파벳 대문자로 제한
// 예 : MADAPP -> AADMPP

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
