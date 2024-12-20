
// Get input from the user
const subArray1 = prompt("Enter sub-array 1 (names) separated by commas:").split(",");
const subArray2 = prompt("Enter sub-array 2 (ages) separated by commas:").split(",").map(Number);

// Validate that sub-arrays have the same length
if (subArray1.length !== subArray2.length) {
    console.error("Error: Sub-arrays must have the same length.");
} else {
    // Restructure into a multi-dimensional array
    const restructuredArray = [];
    for (let i = 0; i < subArray1.length; i++) {
        restructuredArray.push([subArray1[i], subArray2[i]]);
    }

    // Log the restructured array
    console.log("Restructured Array:");
    for (const subArray of restructuredArray) {
        console.log(subArray);
    }
                         }
