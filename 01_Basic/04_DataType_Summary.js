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
