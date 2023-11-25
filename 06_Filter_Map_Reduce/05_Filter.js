const coding = ["js","py","c++","java"]

coding.forEach((item)=>{
   // console.log(item);
   return item
   //undefine
   //for each not return anything
   //only used for conditions

   // insted of that we use filter

})
//Filter---------------------------------------------
const mynum = [1,2,3,4,5,6,7,8,9]

const newnum= mynum.filter( ( num) => num> 5)
console.log(newnum);
//in filter you have call back function then you give condition that value will be return
//when you use () it will return value

//but if you use {} scope you have to add return keyword
//otherwise it  will return empty array 
const newnumm= mynum.filter( ( num) =>
 { return num> 5})
console.log(newnum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

  //filter---------------------------------------------------------------------
  // used in selecting specific elements
  
  // definition
  // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  
  // code example
  const myValues = [15, 25, 35, 45, 55];
  
  const greaterThanThirty = myValues.filter(function (value) {
      return value > 30;
  });
  
  console.log(greaterThanThirty); // [35, 45, 55]
  
  // using arrow function
  const evenValues = myValues.filter(value => value % 2 === 0);
  
  console.log(evenValues); // [25]
  
  // example
  const inventory = [
      { name: "Laptop", quantity: 5 },
      { name: "Mouse", quantity: 10 },
      { name: "Keyboard", quantity: 2 }
  ];
  
  const lowStockItems = inventory.filter(item => item.quantity < 5);
  
  console.log(lowStockItems);
  // [ { name: 'Laptop', quantity: 5 }, { name: 'Keyboard', quantity: 2 } ]