// Arrays of Marvel and DC heroes
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Attempt to push the entire DC heroes array into the Marvel heroes array
// marvel_heros.push(dc_heros) // Incorrect, would add the entire DC array as a single element

// Uncomment the following to see the incorrect result
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Concatenate two arrays using push and spread operator
// const allHeros = marvel_heros.concat(dc_heros) // Using concat
// console.log(allHeros);

// Use the spread operator to create a new array combining Marvel and DC heroes
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

// Nested array with varying levels of depth
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flatten the nested array using the flat method with Infinity as the depth
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// Check if a given value is an array
console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh")); // Convert a string to an array of characters
console.log(Array.from({ name: "hitesh" })); // Convert an object to an array (interesting but not recommended)

// Create an array from individual values using Array.of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

// Difference between push, concat, and spread:
// - push: Adds elements to the end of an array
// - concat: Concatenates arrays, creating a new array
// - spread: Expands an array into individual elements, useful for creating new arrays or function arguments
