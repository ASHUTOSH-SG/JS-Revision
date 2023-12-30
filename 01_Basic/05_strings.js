const name = "ashutosh";
const repoCount = 40;

console.log(name + repoCount);

// Difference between double quotes and backticks
//Double Quotes (") and Single Quotes ('): In these types of quotes, you concatenate strings and variables using the + operator

// Backticks `` allow string interpolation or placeholders
// Backticks (``): Backticks allow for string interpolation using ${}. This means you can embed expressions and variables directly within the string.

console.log(`hello my name is ${name} and my repo is ${repoCount}`);

// Creating a string using the String constructor
const gameName = new String("Ashutosh");

console.log(gameName[0]); // Accessing characters by index, output: A
console.log(gameName.__proto__); // Output: {} (String objects inherit from the Object prototype)
console.log(gameName.length); // Output: 8 (Length of the string)

// String methods

// substring
// Extracts characters from index 0 to 4 (exclusive)
const newString = gameName.substring(0, 4);
console.log(newString); // Output: Ashu

// slice
// Extracts characters starting from the end (negative index) to index 4
const newString2 = gameName.slice(-7, 4);
console.log(newString2); // Output: Ash

// trim
// Removes leading and trailing spaces from a string
const string3 = "    ashutosh@gmail.com ";
console.log(string3.trim()); // Output: ashutosh@gmail.com

// replace
// Replaces spaces with an empty string
const url = "google. com";
console.log(url.replace(" ", "")); //only replace first occurrence string Output: google.com

const url2 = "www. git hub. com";
console.log(url2.replaceAll(" ", ""); //replace all strings Output: www.github.com

// includes
// Checks if a string contains another string
const email = "ashutosh@gmail.com";
console.log(email.includes("@")); // Output: true

// indexOf
// Returns the index of the first occurrence of a specified value in a string
console.log(email.indexOf("@")); // Output: 8

// toUpperCase
// Converts the string to uppercase
console.log(name.toUpperCase()); // Output: ASHUTOSH

// toLowerCase
// Converts the string to lowercase
console.log(name.toLowerCase()); // Output: ashutosh

// concat
// Concatenates two or more strings
const greeting = "Hello";
const fullName = greeting.concat(" ", name);
console.log(fullName); // Output: Hello ashutosh

// charAt
// Returns the character at a specified index
console.log(name.charAt(2)); // Output: h

// startsWith
// Checks if a string starts with a specified value
console.log(email.startsWith("ashu")); // Output: true

// endsWith
// Checks if a string ends with a specified value
console.log(email.endsWith(".com")); // Output: true
