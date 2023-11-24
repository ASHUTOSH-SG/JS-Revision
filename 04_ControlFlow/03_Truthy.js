const userEmail = "ashu@gmail.com";

if (userEmail) {
  //no comparison userEmail is truthy value
  console.log("got user");
} else {
  console.log("dont");
}

//falsy value----------------------------------
//false
// 0 (zero)
// -0 (-ve)
//BigInt 0n
//"" (empty string)
//null
//undefine
//NAN (not a number)

//truthy values--------------------------------

//"0"
//"false" (complete string :) )
//" "  (space)
//[]
//{}
//function(){}

if (userEmail.length === 0) {
  console.log("array is empty");
} else {
  console.log("is email");
}

const emptyobj = {};

if (Object.keys(emptyobj).length === 0) {
  console.log("empty");
}

//nullish coalescing operator (??)--------------
//null
//undefine

let val1;
val1 = 5 ?? 10; //5
val1 = null ?? 10; //10

val1 = undefined ?? 15; //15
val1 = null ?? 10 ?? 10; //10

console.log(val1); //

//turnary operator----------------------------

//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
