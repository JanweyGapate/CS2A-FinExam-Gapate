// sortingAlgoBubble.js

function bubbleSort(arr) {
    const n = arr.length;
        let swapped;
            let comparisons = ""; //String to store comparison details
    do {
            swapped = false;
                    for (let i = 0; i < n - 1; i++) {
                                if (arr[i] > arr[i + 1]) {
                                                // Swap elements
                                                                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                                                                                swapped = true;
                                                                                                comparisons += `${arr[i + 1]} <-> ${arr[i]} `; //Record swap
                                                                                                            } else {
                                                                                                                            comparisons += `${arr[i]} > ${arr[i+1]} `; //Record comparison
                                                                                                                                        }
        }
                comparisons += "\n"; //New line after each pass
                    } while (swapped);
    return { sortedArray: arr, comparisonProcess: comparisons };
    }

function processNumbers() {
    const numbers = [];
        for (let i = 0; i < 10; i++) {
                let num;
                        do {
                                    num = parseFloat(prompt(`Enter number ${i + 1}:`));
                                                if (isNaN(num)) {
                                                                console.error("Invalid input. Please enter a number.");
                                                                            }
                                                                                    } while (isNaN(num));
                                                                                            numbers.push(num);
                                                                                                }
    const result = bubbleSort(numbers);
        console.log("Sorted Array:", result.sortedArray);
            console.log("\nComparison Process:\n", result.comparisonProcess);
            }
processNumbers();
