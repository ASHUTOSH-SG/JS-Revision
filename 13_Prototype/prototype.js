// JavaScript is a prototype based language, so, whenever we create a function using JavaScript, 
// JavaScript engine adds a prototype property inside a function, Prototype property is basically an object
//  (also known as Prototype object), where we can attach methods and properties in a prototype object, 
//  which enables all the other objects to inherit these methods and properties.

// There are different ways to create an object, one of the way is to create an object using function constructor.


// function constructor 
function Person(name, job, yearOfBirth){    
    this.name= name; 
    this.job= job; 
    this.yearOfBirth= yearOfBirth; 
} 
// this will show Person's prototype property. 
console.log(Person.prototype); 
//output object


//