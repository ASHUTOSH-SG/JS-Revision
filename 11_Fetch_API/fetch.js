//The Fetch API is a modern JavaScript API for making network requests 
//(like fetching data from a server).
// It provides a cleaner and more powerful interface
// compared to older methods like XMLHttpRequest.
// Fetch returns a Promise, allowing you
// to handle asynchronous operations more easily.

// 1. What is `fetch()`?

// `fetch()` is a function in JavaScript for making network requests (like asking the internet for data).

// 2. How do you use `fetch()`?
// You call `fetch()` and pass in the URL of the data you want.

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

// 3. What does `fetch()` do?
// `fetch()` goes to the internet and brings back the data you asked for.

fetch(apiUrl)
  // 4. What does `fetch()` give you?
  // `fetch()` gives you a Promise. It's like a promise to get the data, but it takes time.

  .then(response => {
    // 5. How do you open the package (Promise)?
    // Use `then()` to open the package when `fetch()` is done getting the data.

    // 6. How do you handle the data?
    // Write code inside `then()` to do things with the data, like showing it on a webpage.
    
    // Checking if the response is okay (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert the response to JSON
    return response.json();
  })
  .then(data => {
    // Now you can use the data in your program
    console.log('Data:', data);
  })
  .catch(error => {
    // Handle errors, like a network issue or a non-OK response
    console.error('Fetch Error:', error.message);
  });



  /// add fetch wali diagram

