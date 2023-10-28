let score = "33"; //33
let score2 = "33a"; //NAN  not an number but type is number :)
let score3 = undefined; //NaN
let scoree = "ashutosh"; //Nan
let score4 = null; //0
let score5 = true; //1
//let score6 = False; //0

console.log(typeof score); //string

// conversion
//String to Number Conversion:
let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber); // 33

//Q
// convert 0 into boolean

let IsLoggedOUT = 0;
let ConvertBoolean = Boolean(IsLoggedOUT);
console.log(typeof ConvertBoolean); //boolean
console.log(ConvertBoolean); // False

// String to Boolean Conversion:
// You can also convert a string to a boolean using the Boolean() function. Empty strings result in false, and non-empty strings result in true.

let emptyString = " ";
let nonEmptyString = "Ashutosh";

let isEmptyString = Boolean(emptyString);
let isNonEmptyString = Boolean(nonEmptyString);

console.log(isEmptyString); // false
console.log(isNonEmptyString); // true

// Number to Boolean Conversion:
// You can convert a number to a boolean using the Boolean() function. Any non-zero number is converted to true, and 0 is converted to false.

let number = 1;
let isTrue = Boolean(number); // true

//Number to String Conversion:
// To convert a number to a string, you can use the String() function or simply concatenate an empty string ("") to the number.

let numberr = 42;
let numberAsString = String(number);
console.log(typeof numberAsString); // "string"
console.log(numberAsString); // "42"
