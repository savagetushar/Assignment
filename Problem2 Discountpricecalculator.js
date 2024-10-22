function calculateFinalPrice(originalPrice) {
    // Edge case: Check if the price is negative
    if (originalPrice < 0) {
        console.log("Invalid price, the price must be a non-negative number.");
        return;
    }

    let finalPrice = originalPrice;

    // Apply a 10% discount if the price is greater than $20
    if (originalPrice > 20) {
        finalPrice = originalPrice * 0.9; // Apply a 10% discount
    }

    // Print the result with a formatted string
    console.log(`The final price of the item is: ${finalPrice.toFixed(1)}`);
}

// Test cases

// Test case 1: Original price = $25
calculateFinalPrice(25); // Expected output: "The final price of the item is: 22.5"

// Test case 2: Original price = $20
calculateFinalPrice(20); // Expected output: "The final price of the item is: 20.0"

// Test case 3: Original price = $15
calculateFinalPrice(15); // Expected output: "The final price of the item is: 15.0"

// Edge case 1: Negative price
calculateFinalPrice(-5); // Expected output: "Invalid price, the price must be a non-negative number."
