// Wildcard Matching
package main

import "fmt"

func main() {
	fmt.Println("hello World")
}

func isMatch(s string, p string) bool {
	if len(p) == 0 {
		return len(s) == 0
	}
	if len(p) == 1 {
		return len(s) == 1 && (s[0] == p[0] || p[0] == '.')
	} else if p[1] != '*' { // p[1] != '*'
		return len(s) > 0 && (s[0] == p[0] || p[0] == '.') && isMatch(s[1:], p[1:])
	} else {
		if len(s) > 0 && (s[0] == p[0] || p[0] == '.') {
			return isMatch(s[1:], p[2:]) || isMatch(s[1:], p)
		} else {
			return isMatch(s, p[2:])
		}
	}
}
