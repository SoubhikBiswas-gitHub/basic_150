// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is : " + daylist[day]);
console.log(
  "Current time is : " +
    today.getHours() +
    " : " +
    today.getMinutes() +
    " : " +
    today.getSeconds()
);

// Path: basic_150/js_b_02.js
