// Synchronous Code:
//In synchronous programming, tasks are executed one after the other in a sequential order. 
//Each task must complete before the next one starts.
console.log("20");

// Asynchronous Concept Explanation:
// Tasks can be initiated at the same time and continue executing without waiting for other tasks to complete.
// Callbacks, Promises, and Async/Await are common asynchronous patterns in JavaScript.

//---js is not asynchronous----:)
//b-cox it is single thread

// 1. setTimeout:------------------------------------------------------
// Using setTimeout to schedule a function to run after a delay of 2000 milliseconds (2 seconds)
setTimeout(function(){
    console.log("gangurde");
}, 2000);

// This line will be executed immediately without waiting for the setTimeout function to finish
console.log("Ashutosh");

// 2. setInterval:------------------------------------------------------
// Using setInterval to repeatedly execute a function every 1000 milliseconds (1 second)
setInterval(function(){
    console.log("Repeating every 1 second");
}, 1000);

// 3. Promise:
// Creating a Promise: A Promise is an object representing the eventual completion or failure of an asynchronous operation.
const myPromise = new Promise(function(resolve, reject) {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(function() {
        // Resolving the promise after the operation completes successfully
        resolve("Operation successful!");
    }, 2000); // Simulating a 2-second delay
});

// Using the Promise: The `then` method is called when the Promise is resolved, and `catch` is called when there's an error.
myPromise.then(function(result) {
    console.log(result); // Output the result when the Promise is resolved
}).catch(function(error) {
    console.error(error); // Output an error if the Promise is rejected
});

// Example of Promise:
//user ask for number 0 -9
//and if the number is below 5 
//written resolve
//if not rejected
// Creating a Promise to generate a random number and resolve/reject based on a condition
var ans = new Promise((resolve, reject) => {
    var n = Math.floor(Math.random() * 10);
    if (n < 5) {
        return resolve();
    } else {
        return reject();
    }
});

// Using the Promise:
ans.then(function() {
    console.log("below"); // Output when the Promise is resolved
}).catch(function() {
    console.log("above"); // Output when the Promise is rejected
});

// 4. fetch API:-----------------------------------------------------------
// Using fetch to make an asynchronous API request
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Async/Await Concept Explanation:
// Async/await in JavaScript simplifies asynchronous code and makes it look more like synchronous code.
// Async Functions: Functions declared with async keyword return Promises.
// Await Operator: await is used inside an async function to wait for a Promise to resolve.

//  It helps avoid callback hell and makes code look more sequential.
// avoid then catch

// Async function to fetch data from an API using async/await:

async function fetchData() {
    try {
        // Using await to make an asynchronous API request
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Waiting for the response to be converted to JSON
        const data = await response.json();
        
        // Logging the retrieved data
        console.log(data);
    } catch (error) {
        // Handling errors if the fetch or JSON conversion fails
        console.error('Error:', error);
    }
}

// Calling the async function to initiate the asynchronous operation
fetchData();
