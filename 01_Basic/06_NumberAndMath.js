// Numbers

// Primitive Number
const score = 400;
console.log(score); // Output: 400

// Number Object
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]

// String Length of Number
console.log(balance.toString().length); // Output: 3 (Length of the string representation of the number)

// Formatted String with Decimal Places
console.log(balance.toFixed(2)); // Output: "100.00" (Formatted as a string with two decimal places)

// String Representation with Precision
const otherNumber = 23.8956;
console.log(otherNumber.toPrecision(3)); // Output: "23.9" (String representation with three significant digits)

// Locale-Specific Formatting
const hundred = 1000000;
console.log(hundred.toLocaleString("en-IN")); // Output: "10,00,000" (Formatted as a string with locale-specific formatting)

//*****************Math********************** */

// Logging the Math Object
console.log(Math); // Output: [object Math] (Math is an object in JavaScript)

// Absolute Value
console.log(Math.abs(-4)); // Output: 4 (Absolute value - negative becomes positive, positive remains the same)

// Rounding Methods
console.log(Math.round(4.5)); // Output: 5 (Rounds to the nearest integer)
console.log(Math.ceil(4.2)); // Output: 5 (Rounds up to the nearest integer)
console.log(Math.floor(4.2)); // Output: 4 (Rounds down to the nearest integer)

// Minimum Value
console.log(Math.min(4, 2, 5, 6)); // Output: 2 (Returns the minimum value among the provided numbers)

// Random Number Generation
console.log(Math.random()); // Output: A random decimal between 0 (inclusive) and 1 (exclusive)

// For a dice game where you want values between 1 and 10:
console.log(Math.random() * 10 + 1); // Output: A random decimal between 1 and 10

// Dice Game Simulation
const min = 1;
const max = 6;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
// Output: A random integer between 1 and 6 (inclusive)
