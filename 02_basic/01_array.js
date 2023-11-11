// Array
// Collection of elements
// Contiguous
// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

//Deep Copy:
// A deep copy creates a completely independent copy of the original array.
// Changes in the copied array don't affect the original, and vice versa.

// Shallow Copy:
// A shallow copy creates a new array, but the elements inside the new array still reference the same objects as the original array.
// Changes to the objects inside the copied array may affect the original array, and vice versa.

const myArr = [0, 12, 3, 4, 5, 6, 7];

const myHeros = ["shaktiman", "hatim"];

const myArray2 = new Array(1, 2, 3, 4);

// Array Methods

// Push
myArr.push(8);
console.log(myArr);
// Output: [0, 12, 3, 4, 5, 6, 7, 8]
// Adds the element 8 to the end of the array.

// Pop
myArr.pop();
console.log(myArr);
// Output: [0, 12, 3, 4, 5, 6, 7]
// Removes the last element (8) from the array.

// Unshift
myArr.unshift(-1);
console.log(myArr);
// Output: [-1, 0, 12, 3, 4, 5, 6, 7]
// Adds the element -1 to the beginning of the array.

// Shift
myArr.shift();
console.log(myArr);
// Output: [0, 12, 3, 4, 5, 6, 7]
// Removes the first element (-1) from the array.

// Includes
console.log(myArr.includes(5));
// Output: true
// Checks if the array includes the element 5.

// Index Of
console.log(myArr.indexOf(4));
// Output: 3
// Returns the index of the first occurrence of the element 4 in the array.

// Join
console.log(myArr.join(", "));
// Output: "0, 12, 3, 4, 5, 6, 7"
// Joins all array elements into a string separated by a comma and space.

// Slice
const slicedArray = myArr.slice(2, 5);
console.log(slicedArray);
// Output: [3, 4, 5]
// Creates a new array containing elements from index 2 to 4 (5-1).

// Splice
const splicedArray = myArr.splice(2, 3, 100, 200);
console.log(myArr);
// Output: [0, 12, 100, 200, 6, 7]
// Removes 3 elements starting from index 2, and inserts 100 and 200 at that position.

// Difference Between Slice and Splice
// - Slice does not modify the original array; it returns a new array.
// - Splice modifies the original array by removing or replacing elements.
