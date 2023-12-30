// Object Literal:
// An object literal is created to represent a user. It includes properties like 'username' and 'signedIn',
// along with a method 'toLowerCase' to convert the username to lowercase.
const user = {
    username: "ashutosh",
    signedIn: true,
    toLowerCase: function () {
      // A method to convert the username to lowercase
      this.username = this.username.toLowerCase();
    },
  };
  
  // Accessing a property of the object
  console.log(user.username); // Output: ashutosh
  
  // Constructor Function:
  // The User constructor function is defined to create user objects with properties and methods.
  // Instances are created using the new keyword.
  function User(username, signedIn) {
    this.username = username;
    this.signedIn = signedIn;
  
    // Adding a method to the prototype
    User.prototype.toLowerCase = function () {
      this.username = this.username.toLowerCase();
    };
  }
  
  // Creating an instance using the constructor function
  const newUser = new User("JohnDoe", true);
  
  // Accessing a property of the instance
  console.log(newUser.username); // Output: JohnDoe
  
  // Using the method from the prototype
  newUser.toLowerCase();
  console.log(newUser.username); // Output: johndoe
  
  // ES6 Classes:
  // The NewUser class is introduced in ES6, providing a cleaner syntax for creating constructor functions and prototypes.
  // Methods can be added directly inside the class.
  class NewUser {
    constructor(username, signedIn) {
      this.username = username;
      this.signedIn = signedIn;
    }
  
    // Adding a method directly in the class
    toLowerCase() {
      this.username = this.username.toLowerCase();
    }
  }
  
  // Creating an instance using the class
  const newerUser = new NewUser("JaneDoe", false);
  
  // Accessing a property of the instance
  console.log(newerUser.username); // Output: JaneDoe
  
  // Using the method directly from the class
  newerUser.toLowerCase();
  console.log(newerUser.username); // Output: janedoe
  