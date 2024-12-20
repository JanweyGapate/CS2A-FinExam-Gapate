
// Get input arrays from the user
const numbers = prompt("Enter numbers separated by commas:").split(",").map(Number);
const names = prompt("Enter names separated by commas:").split(",");

// Merge arrays
const mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort numbers numerically in reverse
const sortedNumbers = numbers.slice().sort((a, b) => b - a);
console.log("Sorted Numbers (Reverse):", sortedNumbers);

// Sort names alphabetically
const sortedNames = names.slice().sort();
console.log("Sorted Names (Alphabetical):", sortedNames);
