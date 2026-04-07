// for...of on array
const arr = [1, 2, 3, 4, 5, 6];

console.log("Using for...of on array:");
for (const num of arr) {
    console.log(num);
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6

// for...in on array
console.log("\nUsing for...in on array:");
for (const key in arr) {
    console.log(key); // Outputs array indices
}
// Output:
// 0
// 1
// 2
// 3
// 4
// 5

// for...of on string
const greeting = "hello world";
console.log("\nUsing for...of on string:");
for (const char of greeting) {
    console.log(`Each char is ${char}`);
}
// Output:
// Each char is h
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d

// for...of on map
const map = new Map();
map.set('IN', "India");
map.set('FR', "France");

console.log("\nUsing for...of on map:");
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// Output:
// IN :- India
// FR :- France

// for...in on map (not recommended)
console.log("\nUsing for...in on map (not recommended):");
for (const key in map) {
    console.log(key); // Outputs map property names
}
// Output:
// 0
// 1

// for...in on object
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
};

console.log("\nUsing for...in on object:");
for (const key in myObject) {
    console.log(myObject[key]);
}
// Output:
// javascript
// c++
// ruby



//----------------------------more-------------------------


// for...of Loop:----------------------

// Applicability:
// Arrays: Ideal for iterating over elements of an array.
// Maps: Suitable for iterating over entries (key-value pairs) in a map.
// Objects: Not applicable directly; throws an error. Use Object.values(), Object.keys(), or Object.entries() for objects.

// Key Characteristics:
// Provides a simple syntax for iterating over iterable objects.
// Guarantees order of iteration for arrays and maps.
// Cannot be used directly with plain objects.

// for...in Loop:---------------------

// Applicability:
// Arrays: Not recommended. Iterates over array indices and additional properties.
// Maps: Not recommended. Iterates over properties, including internal properties of the Map object.
// Objects: Suitable for iterating over properties of an object.

// Key Characteristics:
// Iterates over enumerable properties of an object.
// Can be used with arrays and maps, but not recommended due to potential unexpected behavior.
// Suitable for iterating over properties of plain objects.

// Summary:
// Use for...of with arrays and maps for simplicity and clarity.
// Use for...in with objects when you need to iterate over the properties of an object.
// Avoid using for...in with arrays and maps due to potential unexpected behavior.

// Using for...of with array
const arrr = [1, 2, 3];
for (const num of arr) {
    console.log(num);
}

// Using for...in with object
const myObjectt = { a: 1, b: 2 };
for (const key in myObject) {
    console.log(key, myObject[key]);
}
