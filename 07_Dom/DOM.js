// Introduction to DOM:
// Definition: The Document Object Model (DOM) is a programming interface for web documents. 
// It represents the structure of a document as a tree of objects, where each object corresponds 
// to a part of the document.
// Purpose: DOM enables scripts to dynamically access and manipulate the content, 
// structure, and style of a document.

//2. Four Pillars of DOM:

//1. Selection of an Element:
const headingElement = document.querySelector("h1");
//querySelector is a method that selects the first element in the document that matches 

//2. Changing HTML:
document.querySelector("h1").innerHTML = "Changed HTML";

// Text Content:
const paragraph = document.querySelector("p");
const textContent = paragraph.textContent;
//textContent gets or sets the text content of an element, ignoring HTML tags.


//3.Changing CSS:
//Changes the CSS properties of the selected element.
const heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.backgroundColor = "black";


// 4.Event Listener:
//Adds an event listener to the button, 
//triggering a function when the button is clicked.
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("Button clicked");
});


//Selecting Multiple Elements at Once:
//querySelectorAll returns a NodeList, 
//and forEach is used to iterate through the selected elements
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach(paragraph => {
  console.log(paragraph.textContent);
});



//Set Timeout and Set Interval:
// setTimeout executes a function after a specified delay
// setInterval repeatedly calls a function with a fixed time delay between each call.
setTimeout(function () {
    console.log("Delayed message");
  }, 2000); // 2000 milliseconds (2 seconds)
  
  setInterval(function () {
    console.log("Repeated message every 3 seconds");
  }, 3000); // 3000 milliseconds (3 seconds)
  