function compareNumbers(number1, number2) {
    // Check if both numbers are equal
    if (number1 === number2) {
        console.log("Both numbers are equal");
    } 
    // Check if number1 is greater than number2
    else if (number1 > number2) {
        console.log(`${number1} is larger than ${number2}`);
    } 
    // If number2 is greater than number1
    else {
        console.log(`${number2} is larger than ${number1}`);
    }
}

// Test cases

// Test case 1: number1 = 5, number2 = 10
compareNumbers(5, 10); // Expected output: "10 is larger than 5"

// Test case 2: number1 = 7, number2 = 7
compareNumbers(7, 7); // Expected output: "Both numbers are equal"

// Test case 3: number1 = -1, number2 = -10
compareNumbers(-1, -10); // Expected output: "-1 is larger than -10"

// Edge case 1: Both numbers are zero
compareNumbers(0, 0); // Expected output: "Both numbers are equal"

// Edge case 2: Negative numbers, number1 = -5, number2 = -3
compareNumbers(-5, -3); // Expected output: "-3 is larger than -5"
