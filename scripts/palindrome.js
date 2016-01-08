"use strict";

function palindromeCheck(word) {
	word = word.toLowerCase();
	var reverse = word.split("").reverse().join("");
	if (word === reverse) {
		return "Palindrome";
	} else {
		return "NOT a palindrome";
	}
}
console.log(palindromeCheck("racecar"));
console.log(palindromeCheck("dog"));
console.log(palindromeCheck("bob"));
console.log(palindromeCheck("Racecar"));