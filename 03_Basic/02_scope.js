// Global scope
let a = 300;

if (true) {
  // Block scope
  let a = 10; // Redeclaration of 'a' in block scope
  const b = 20; // Variable declared with 'const'
  var c = 30; // Variable declared with 'var'

  console.log("Block scope", a); // Output: 10
}

console.log(a); // Output: 300 (Global scope 'a' remains accessible)
//console.log(b); // Error: 'b' is not accessible outside of block scope
console.log(c); // Output: 30 ('c' declared with 'var' remains accessible)

//nested scope ---------------------------

function parent() {
  const IceCream = "choclate";
  function child() {
    const IceCream2 = "american dryfruits";
    console.log(IceCream); //acessing the parent icecream
  }
  //console.log(IceCream2);//outside scope

  child(); //choclate
  //child function can acsses the parent function but child cant
}

parent();

//if else-------------------------------

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "yt";
    console.log(username + website);
  }
  //console.log(website); not in scope
}
//console.log(username); not in scope

//-----------------------------------example of declaring function and just the overview
// of the hosting

//Function Hoisting: Function declarations are moved to the top of their scope, and their entire function body is also hoisted. This means that you can call a function before it is actually defined in the code
console.log(addone(5));
// so here we have declare the addone function befor the function
//it will run

function addone(num) {
  return num + 1;
}

//Variable Hoisting: Variable declarations are moved to the top of their scope, but their initializations remain in place. This means that you can use the variable before it is assigned a value, but it will have the default value of undefined.
console.log(addTwo(5));
// but here it will not  run here b-coz we are using the variable addTwo before the declaring
const addTwo = function (num) {
  return num + 2;
};
