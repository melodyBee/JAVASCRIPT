//DATE METHODS
// 1. Write a program that displays current date and time in 
// your browser.
document.write("<h2>Task 1</h2>");
var currentDate = new Date();
var date = currentDate.toLocaleDate();
var time = currentDate.toLocaleTime();
document.write("Current date: " + date + "<br>");
document.write("Current time: " + time);

// 2. Write a program that alerts the current month in words. 
// For example December.
document.write("<h2>Task 2</h2>");
var currentDate = new Date();
var monthIndex = currentDate.getMonth();
var monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var currentMonth = monthNames[monthIndex];
alert("Current month: " + currentMonth);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.
document.write("<h2>Task 3</h2>");

var currentDate = new Date();
var dayIndex = currentDate.getDay();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = dayNames[dayIndex];
alert("Current day: " + currentDay);

// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.
document.write("<h2>Task 4</h2>");
// Create a new Date object
var currentDate = new Date();
var dayIndex = currentDate.getDay();
if (dayIndex === 6 || dayIndex === 0) {
  document.write("It's Fun day");
}

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.
document.write("<h2>Task 5</h2>");

var currentDate = new Date();
var date = currentDate.getDate();
if (date < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.
document.write("<h2>Task 6</h2>");

var now = new Date();
var millisecondsSince1970 = now.getTime();
var minutesSince1970 = Math.floor(millisecondsSince1970 / (1000 * 60));
console.log(minutesSince1970);

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.
document.write("<h2>Task 7</h2>");

var currentTime = new Date();
var hour = currentTime.getHours();
if (hour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.
document.write("<h2>Task 8</h2>");
var laterDate = new Date(2020, 11, 31);
console.log(laterDate);

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
document.write("<h2>Task 9</h2>");

var startingDate= new Date(2015,5,18);
var currentDate=new Date();
var timeDiff=currentDate.getTime() - startingDate.getTime();
var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.
document.write("<h2>Task 10</h2>");
var referenceDate = new Date("January 1, 1970");
var beginningOf2015 = new Date("January 1, 2015");
var timeDiff = (beginningOf2015.getTime() - referenceDate.getTime()) / 1000;
document.write("Seconds elapsed between the reference date and the beginning of 2015: " + timeDiff + " seconds");

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.
document.write("<h2>Task 11</h2>");
var currentDate = new Date();
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Updated Date and Time: " + currentDate);

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?
document.write("<h2></h2>");
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date reset to 100 years back: " + currentDate);

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.
document.write("<h2></h2>");
var age = prompt("What is your age?");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
document.write("Your birth year is: " + birthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
document.write("<h2></h2>");
// a. Customer Name
var customerName = prompt("Enter customer name:");
// b. Current Month
var currentMonth = prompt("Enter current month:");
// c. Number of units
var numberOfUnits = parseFloat(prompt("Enter number of units:"));
// d. Charges per unit
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// e. Net Amount Payable (within Due Date)
var netAmountPayable = numberOfUnits * chargesPerUnit;
// f. Late Payment Surcharge
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));
// g. Gross Amount Payable (after Due Date)
var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
document.write("<h1>K-Electric Bill</h1>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Current Month: " + currentMonth + "</p>");
document.write("<p>Number of Units: " + numberOfUnits.toFixed(2) + "</p>");
document.write("<p>Charges per Unit: " + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayableWithinDueDate + "</p>");
document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "</p>");