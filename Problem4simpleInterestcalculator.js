function calculateSimpleInterest(principle, rate, time) {
    // Calculate the simple interest using the formula
    let simpleInterest = (principle * rate * time) / 100;

    // Print the result with a formatted string
    console.log(`The simple interest is: ${simpleInterest.toFixed(1)}`);
}

// Test cases

// Test case 1: Principle = 1000, Rate = 5, Time = 3
calculateSimpleInterest(1000, 5, 3); // Expected output: "The simple interest is: 150.0"

// Test case 2: Principle = 1500, Rate = 7, Time = 5
calculateSimpleInterest(1500, 7, 5); // Expected output: "The simple interest is: 525.0"

// Test case 3: Principle = 0, Rate = 6, Time = 2
calculateSimpleInterest(0, 6, 2); // Expected output: "The simple interest is: 0.0"

// Edge case 1: Zero principle, rate, or time
calculateSimpleInterest(1000, 0, 2); // Expected output: "The simple interest is: 0.0"
calculateSimpleInterest(0, 5, 3); // Expected output: "The simple interest is: 0.0"
