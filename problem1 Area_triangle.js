function calculateTriangleArea(base, height) {
    // Edge case: Check if base or height is negative
    if (base < 0 || height < 0) {
        console.log("Invalid number, base and height must be positive numbers.");
        return;
    }

    // Edge case: If base or height is zero, the area should be 0.0
    if (base === 0 || height === 0) {
        console.log("The area of the triangle is 0.0");
        return;
    }

    // Calculate the area using the formula (Base * Height) / 2
    let area = (base * height) / 2;

    // Print the result with a formatted string
    console.log(`The area of the triangle is ${area.toFixed(1)}`);
}

// Test cases

// Test case 1: Base = 10, Height = 5
calculateTriangleArea(10, 5); // Expected output: "The area of the triangle is 25.0"

// Test case 2: Base = 0, Height = 5
calculateTriangleArea(0, 5); // Expected output: "The area of the triangle is 0.0"

// Test case 3: Base = 8, Height = 0
calculateTriangleArea(8, 0); // Expected output: "The area of the triangle is 0.0"

// Edge case 1: Negative base
calculateTriangleArea(-3, 5); // Expected output: "Invalid number, base and height must be positive numbers."

// Edge case 2: Negative height
calculateTriangleArea(10, -2); // Expected output: "Invalid number, base and height must be positive numbers."

// Edge case 3: Both base and height are negative
calculateTriangleArea(-4, -3); // Expected output: "Invalid number, base and height must be positive numbers."
