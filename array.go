package main

import (
	"fmt"
	"sort"
	"strings"
)

func main() {
	str := "ReDsUn"

	upper := strings.ToUpper(str)
	splited := strings.Split(upper,"")
	sort.Strings(splited)
	fmt.Println(strings.Join(splited,""))
}