// variables
const word1 = prompt("Enter the first word:", "RACECAR");
const word2 = prompt("Enter the second word:", "RECORDER");

//To reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

//To check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = reverseString(str);
    return str === reversedStr;
}

//To reverse and check the words
const reversedWord1 = reverseString(word1);
const reversedWord2 = reverseString(word2);
const isWord1Palindrome = isPalindrome(word1);
const isWord2Palindrome = isPalindrome(word2);

//original and reversed strings
alert(`Original word 1: ${word1}, Reversed: ${reversedWord1}`);
alert(`Original word 2: ${word2}, Reversed: ${reversedWord2}`);

//palindrome check results
alert(`Is '${word1}' a palindrome? ${isWord1Palindrome}`);
alert(`Is '${word2}' a palindrome? ${isWord2Palindrome}`);