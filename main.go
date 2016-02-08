package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
)

var digit = []string{
	"",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
}

var teen = []string{
	"ten",
	"eleven",
	"twelve",
	"thirteen",
	"fourteen",
	"fifteen",
	"sixteen",
	"seventeen",
	"eightteen",
	"nineteen",
}

var tens = []string{
	"",
	"",
	"twenty",
	"thirty",
	"forty",
	"fifty",
	"sixty",
	"seventy",
	"eighty",
	"ninety",
}

func decomposeInteger(integer int64) {
	pos := integer % 1000
	pos /= 100
	if pos > 0 {
		fmt.Printf("%s hundred ", digit[pos])
	}

	pos = integer % 100

	if pos < 20 && pos > 9 {
		pos = integer % 10
		fmt.Printf("%s ", teen[pos])
	} else {
		pos /= 10
		if pos > 0 {
			fmt.Printf("%s ", tens[pos])
		}

		pos = integer % 10
		if pos > 0 {
			fmt.Printf("%s ", digit[pos])
		}
	}
}

func main() {
	value := os.Args[1]
	integer, err := strconv.ParseInt(value, 10, 64)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(integer)
	if integer > 1000 {
		thousands := integer / 1000
		decomposeInteger(thousands)
		fmt.Printf("thousand ")
	}
	decomposeInteger(integer)
	fmt.Println()
}
