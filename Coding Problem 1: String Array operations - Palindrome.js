// Get input strings from the user using prompt()
const word1 = prompt("Enter the first word:");
const word2 = prompt("Enter the second word:");

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove spaces and convert to lowercase for case-insensitive comparison
  const cleanStr = str.replace(/ /g, '').toLowerCase();
  // Reverse the string
  const reversedStr = cleanStr.split('').reverse().join('');
  // Check if the original and reversed strings are equal
  return cleanStr === reversedStr;
}

// Log the original and reversed strings, and whether they are palindromes
console.log("Original word 1:", word1);
console.log("Reversed word 1:", word1.split('').reverse().join(''));
console.log("Is word 1 a palindrome?", isPalindrome(word1));

console.log("Original word 2:", word2);
console.log("Reversed word 2:", word2.split('').reverse().join(''));
console.log("Is word 2 a palindrome?", isPalindrome(word2));
