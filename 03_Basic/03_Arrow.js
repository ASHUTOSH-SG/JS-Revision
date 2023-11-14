const user = {
  username: "ashutosh",
  price: 333,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
    //.this refer to the current contex

    console.log(this);
    //output {
    //     username: 'sam',
    //     price: 333,
    //     welcomeMessage: [Function: welcomeMessage]
    //   }
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this);
//empty object {}

//console.log(this);
//browser engine showes window object insted of empty

//here in node engine empty object {}

//------------------------------------this in function--------------------
// function chai() {
//   let username = "Ashutosh";
//   console.log(this.username); //undefine // this not work in function
// }

chai();

//---------------------------Arrrow------------------
// Arrow functions do not have their own execution context. Instead, they inherit the execution context of the surrounding function or scope.
// Arrow functions cannot be used as constructors.
const chai = () => {
  let username = "Ashutosh";
  console.log(this.username); //undefine // this not work in function
};

//chai();

//normal arrow function-------------------------------
const addTwo = (num1, num2) => {
  return num1 + num2;
};

//emplicite arrow function-----------------------------
//if yo use {} you have to use return
//insted it will assume return

const addTwoo = (num1, num2) => num1 + num2;

//object must be pass in{}
const addTwoo0 = (num1, num2) => {
  {
    ashytosh: "22";
  }
};

console.log(addTwo(3, 4));
