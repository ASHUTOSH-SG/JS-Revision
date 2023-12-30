//  Promises in JavaScript are a way to handle asynchronous operations more effectively.
//  They represent the eventual completion or failure of an asynchronous operation 
//  and allow you to attach callbacks to handle the results.

// States:
// Pending   : Initial state; the promise is neither fulfilled nor rejected.
// Fulfilled : The operation completed successfully, and the promise has a resulting value.
// Rejected  : The operation failed, and the promise has a reason for the failure.


//create Promise------------------------withvariable---------------------------
//A new Promise is created using the Promise constructor.
//inside the promise, there is an asynchronous task simulated by a setTimeout
//If the asynchronous task completes successfully, it calls the resolve function.
//and this resolve is conected with the .then


const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    // If successful, call resolve(value)
    // If unsuccessful, call reject(reason)
  });

  //----------------------------with variable---------------------------------------------------
const promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //DB call ,Network call

    setTimeout(function(){
        console.log("task is complete");
        resolve()
    }, 1000)
})
//consumption of promise
//then
promiseOne.then(function(){
    console.log("resolved");
})


//-----------------------------------without variable----------------------

new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("async task 2");
        resolve()
    },2000)
}).then(function(){
    console.log("task resolve 2");
})

//------------------------------------conection of resolve - then------------------------

// Create a Promise (PromiseTwo)
const PromiseTwo = new Promise(function(resolve, reject) {
    // Simulate an asynchronous task (e.g., DB call, Network call) using setTimeout
    setTimeout(function() {
        // Resolve the promise with an object containing user information
        resolve({ username: "ashutosh", pass: "asd" });
    }, 1000); // Wait for 1000 milliseconds (1 second)
});

// Consume the Promise using the `then` method
PromiseTwo.then(function(user) {
    // This callback function executes when the promise is resolved
    console.log(user); // Log the user object to the console
});

//-----------------------------------------Promise Chaining---------------------------

myPromise
  .then((result) => {
    // Handle successful operation
  })
  .catch((error) => {
    // Handle failed operation
  });


  const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "ashutosh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



//------------------------------------Async/Await:---------------------------------
// async function returns a promise implicitly.
// Use await to pause execution until a promise is settled.
const promiseFive = new Promise (function(resolve,reject){

    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "ajs", password: "123"})
        } else {
            reject('ERROR: js went wrong')
        }
    }, 1000)

})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


//-----------------------Promise.all ----------------------------------

// Combines multiple promises into one.
// Resolves when all promises are fulfilled or rejects when any promise is rejected.

const promise1 = fetch('...');
const promise2 = readFile('...');

Promise.all([promise1, promise2])
  .then(([result1, result2]) => {
    // Handle results of both promises
  })
  .catch((error) => {
    // Handle any error from either promise
  });

  //example------------------------------------------------------------
  // Promise that resolves after 2 seconds
const promise4 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 2000));

// Promise that resolves after 1 second
const promise5 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 1000));

// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2])
  .then(results => console.log(results))
  .catch(error => console.error(error));



  //---------------------------Promise.race:---------------------------------
  //Resolves or rejects as soon as one of the promises resolves or rejects.

  const promise10 = fetch('...');
const promise20 = delay(2000); // Resolves after 2 seconds

Promise.race([promise1, promise2])
  .then((result) => {
    // Handle the first resolved promise
  })
  .catch((error) => {
    // Handle the first rejected promise
  });

  //example------------------------------------------------------------------------------------------

  // Promise that resolves after 2 seconds
const promise = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 2000));

// Promise that resolves after 1 second
const promisee = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 1000));

// Use Promise.race to get the result of the first resolved promise
Promise.race([promise1, promise2])
  .then(result => console.log(result))
  .catch(error => console.error(error));


