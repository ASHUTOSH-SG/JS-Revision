//function
//no parameter
function number() {
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");
  console.log("5");
  console.log("6");
  console.log("7");
}

// functionsRefrence =number,  () =execution
number(); // no arguments

//with parameter

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}
//console.log does't return any thing

//refer with the arguments
addTwoNumber(2, 3); //5
addTwoNumber(2, "3"); //3 concider 2 also a string
addTwoNumber(2, "a"); //3a
addTwoNumber(2, null); //2

// we can define the variable in function so that we can return it
function addTwoNumberR(number1, number2) {
  let result = number1 + number2;
  return result; // we can directly add * number1 + number2* in the return insted of variable :)
  console.log("done"); // it will never exicute ones the function return nothing will be exicute further in the function
}

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("enter user name first");
    return;
  }
  return `${username} just logged in`;
  //ashutosh just logged in
}

console.log(loginUserMessage("ashutosh"));

console.log(loginUserMessage()); //enter user name first
//undefined

//now use this in the shopping cart
// but in this function you dont have parameter user can add as many products

//REST OPERATOR--------------------------
//... is sprade operator also rest operator
//here we using rest
// rest is used for combining
//spread is used for separate
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 300, 400, 500)); //[ 400, 500 ]
//first two elements stored in val1 and val2, and remaining will display

// handle object in the function----------------------------

const user = {
  username: "ashutosh",
  price: 122,
};

function handleObject(anyobject) {
  console.log(`username is ${anyobject.user} and price is ${anyobject.price}`);
}

handleObject(user);

handleObject({
  username: "sam",
  price: 128,
});

//HANDLE ARRAY---------------------------------

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
