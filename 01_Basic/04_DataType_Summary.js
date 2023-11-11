//primative data type
// 1 String
// 2 number
// 3 Boolean
// 4 null
// 5 undefined
// 6 Symbol
// 7 BigInt

//************************** */

//non primitive
// refrence
//call by value whenever we copy it from anywhere its orignal data refrence is not given to you

//it just give you the copy seprately // functional scope

// and your changes will be done in copy

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function Object
//        Object  =>  object

//Array
const hero = ["shaktiman", "naagraj", "doga"];

//Objects
let my = {
  name: "ashutosh",
  age: 22,
};

//Function

const myFunction = function () {
  console.log("nmaste");
};

//**********************MEMORY*************************************** */

//Stack
// All primitive data types are stored in the stack.
// When using stack memory, a copy of the variable is created.
// Any changes made affect only the copy, leaving the original unchanged.

// Example of Stack
let MyYouTubeName = "Ashutoshsg";
let AnotherName = MyYouTubeName; // Copying the value
AnotherName = "MrBeast"; // Modifying the copy

console.log(AnotherName); // Output: MrBeast
console.log(MyYouTubeName); // Output: Ashutoshsg (Original remains unchanged)

//Heap
// Non-primitive data types are stored in the heap.
// When using heap memory, a reference to the variable is stored.
// Any changes made through the reference affect the original value.

// Example of Heap
let userOne = {
  email: "user@gmail.com",
  upi: "123upi",
};

let userTwo = userOne; // Referencing the same object in the heap
userTwo.email = "ashutoshsgangurde@gmail.com"; // also Modifying the original object

console.log(userTwo.email); // Output: ashutoshsgangurde@gmail.com (Original is modified)
console.log(userOne.email); // Output: ashutoshsgangurde@gmail.com (Both references point to the same object)
