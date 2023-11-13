Object.create;
//Constructor:
// It's like a blueprint for creating objects.
// Object.create is a tool to make new objects based on an existing one.
// singleton from in the constructor

// Singleton:
// Think of it like having just one special instance of something.
// In JavaScript, you make sure a class has only one object, and you can always access that one.
//single ton will not from in the literal

// Literal:
// A quick way to make objects using curly braces {} or arrays using square brackets [].

// in array we have only value to decide key will be aalways 0 1 2 3 4

//in oject we can define the key along with the VALUE

//key : value
const JsUser = {
  name: "Ashutosh",
  age: 22,
  location: "Nashik",
  isLoggedIn: false,
  lastLogInDays: ["monday", "sunday"],
};

//two types of acessing the object

//1-Dot Notation
console.log(JsUser.email);
//not possible in when
//1-Dynamic Property Access:
//2-Property Names with Special Characters:
//3-Not Suitable for Property Names with Spaces

//2-Bracket Notation:
console.log(JsUser["email"]);
//overcomes the all three drawbacks of the Dot notation
//square notation is best way

//Q ----------------------------
//make one symbol and add that in objects key and print

// Create a symbol
const mySymbol = Symbol("unique");

// Create an object with a key using the symbol
const myObject = {
  [mySymbol]: "This is a value associated with the symbol key",
  // we have to add our symbol in the []
  //if we declare it directly it wiil be remain the string
};

// Access and print the value using the symbol key
console.log(myObject[mySymbol]);

// change the value in the object
JsUser.email = "ashutoshsgangurde@gmail.com";

// to stop the further changes in the object

//Object.freeze(JsUser);
JsUser.email = "ashutosh@gmail.com";
// will not change

console.log(JsUser);
//ashutoshsgangurde@gmail.com

JsUser.greeting = function () {
  console.log("hello bhai log");
};

JsUser.greeting2 = function () {
  console.log(`hello bhai log,`);
};

console.log(JsUser.greeting());
