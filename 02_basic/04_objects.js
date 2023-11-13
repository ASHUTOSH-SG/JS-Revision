//singleton object
//It's a single, unique instance of an objec
const tinderUser = new Object();

//non singleton object
//Regular objects that can have multiple instances.
const tinderUser2 = {};
tinderUser2.id = "123";
tinderUser2.name = "ashutosh";

console.log(tinderUser2);

// objects in object
const regularUser = {
  email: "ashutoshsgangurde@",
  fullname: {
    uusernaem: {
      firstnaem: "asutosh",
      lastname: "gangurde",
    },
  },
};
console.log(regularUser.fullname?.uusernaem.firstnaem);

//?
//available or not

//what if we want to assign the any object to other object

//Object.assign()
//The Object.assign() static method copies all properties and element from one or more source objects to a target object. It returns the modified target object.

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

//but for simplicity we always use sprade operator
const T = { ...target, ...source };
console.log(T);

//array of object
//it useful when we are dealing with the objects
const users = [
  {
    id: 1,
    email: "ashutosh@",
  },
  {
    id: 2,
    email: "kunal@",
  },
  {
    id: 3,
    email: "om@",
  },
];

console.log(users[1].email);
// user is our array
//and users[1] is our object
//so we an acsses it by dot operator

//Object.keys
//how to extract the key and value from object
//this will return the array so that we can applay the loop and other functions

console.log(Object.keys(regularUser)); //[ 'email', 'fullname' ]

console.log(Object.values(regularUser));
// //[
//     'ashutoshsgangurde@',
//     { uusernaem: { firstnaem: 'asutosh', lastname:'gangurde' } } ]

//destructuring the Object

const course = {
  coursename: "js",
  price: "2323",
  instrouctor: "MDN",
};

//normal
// course.instrouctor

//destructure object
const { instrouctor: I } = course;
console.log(I);

//API

//all values come in the from of the json
//jason have key string and value also

// {
//   "name": "asda";
//   "course": "sadasd";
//   "price": "asdasd";
// }
