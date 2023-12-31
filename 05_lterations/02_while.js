// Example of a while loop
let index = 0;

// This while loop will not execute because the condition is initially false (index <= 0)
while (index <= 0) {
    // The following line is not doing anything, as it's a block with a template literal
    // It seems like you intended to use console.log instead
    {`value of index ${index}`}
    index++;
}

// Corrected version with console.log
index = 0;
while (index <= 0) {
    // Logging the value of the index
    console.log(`value of index ${index}`);
    index++;
}

// Example of a while loop iterating through an array
let myArrayy = ['batman', 'superman', 'flash'];
let arr = 0;

// This while loop iterates through the elements of the array
while (arr < myArrayy.length) {
    // Logging the value of the current array element
    console.log(`value is ${myArrayy[arr]}`);
    arr = arr + 1;
}

// Example of a do-while loop
let score = 5;

// This do-while loop will always execute at least once
do {
    // Logging the value of the score
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);
