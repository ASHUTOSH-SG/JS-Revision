// Date; //1970
//object

// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

// Creating a Date Object
const currentDate = new Date();
console.log(currentDate);
// Output: Current date and time in the format: "Thu Nov 11 2023 14:30:00 GMT+0000 (Coordinated Universal Time)"

// Creating a Date Object with Specific Date and Time
const specificDate = new Date("2023-11-11T12:30:00");
console.log(specificDate);
// Output: "Fri Nov 11 2023 12:30:00 GMT+0000 (Coordinated Universal Time)"

// Extracting Components of a Date
const year = specificDate.getFullYear();
const month = specificDate.getMonth(); // Note: Months are zero-indexed (0 for January, 11 for December)
const day = specificDate.getDate();
const hours = specificDate.getHours();
const minutes = specificDate.getMinutes();
console.log(`Date Components: ${year}-${month + 1}-${day} ${hours}:${minutes}`);
// Output: "Date Components: 2023-11-11 12:30"

// Formatting Dates
const formattedDate = specificDate.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log(formattedDate);
// Output: "Friday, November 11, 2023"

// Manipulating Dates
const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek);
// Output: Date object representing the current date + 7 days

// Calculating Time Difference
const startDate = new Date("2023-11-01");
const endDate = new Date("2023-11-15");
const timeDifference = endDate - startDate;
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
console.log(`Days Difference: ${daysDifference}`);
// Output: "Days Difference: 14"

//extra

// Dates

let myDate = new Date();
// Console logging different representations of the current date
console.log(myDate.toString()); // Output: "Thu Nov 11 2023 14:30:00 GMT+0000 (Coordinated Universal Time)"
console.log(myDate.toDateString()); // Output: "Thu Nov 11 2023"
console.log(myDate.toLocaleString()); // Output: "11/11/2023, 2:30:00 PM"
console.log(typeof myDate); // Output: "object"

// Creating Dates with Different Formats
// Uncomment one of the following lines at a time to see the result

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-14-2023");

// Console logging the localized string representation of the created date
console.log(myCreatedDate.toLocaleString()); // Output: "1/14/2023, 12:00:00 AM"

// Getting Timestamps
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: Current timestamp in milliseconds

// Accessing Date Components
let newDate = new Date();
console.log(newDate); // Output: Current date and time
console.log(newDate.getMonth() + 1); // Output: Current month (1-indexed)
console.log(newDate.getDay()); // Output: Current day of the week (0-indexed, 0 is Sunday)

// Formatting Date Components
const dayOfWeek = newDate.toLocaleString("default", { weekday: "long" });
console.log(dayOfWeek); // Output: Current day of the week in full text
// Example of using these components in a string
console.log(
  `${dayOfWeek} and the time is ${newDate.getHours()}:${newDate.getMinutes()}`
);
// Output: "Thursday and the time is 14:30"
