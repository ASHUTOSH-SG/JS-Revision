//map-------------------------
const myNumber =[1,2,3,4,5,6,7,8,9,]
const newnum =myNumber.map((num)=>num+10)
console.log(newnum);

//chaining
const newnums = myNumber
                .map((num)=>num * 10) //thsi result will be pass to scond chain
                .map((num)=> num +1) // recive 1st chain data
                .filter((num)=>num<10)
  
// map
// used in transforming data

// definition
// The map() method creates a new array with the results of calling a provided function on every element in the array.

// code example
const myNumbers = [1, 2, 3, 4, 5];

const doubledNumbers = myNumbers.map(function (number) {
    return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// using arrow function
const squaredNumbers = myNumbers.map(number => number ** 2);

console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// example
const originalPrices = [10, 20, 30, 40];
const discountedPrices = originalPrices.map(price => price * 0.9);

console.log(discountedPrices); // [9, 18, 27, 36]
