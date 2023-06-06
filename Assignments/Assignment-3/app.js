//VARIABLES FOR NUMBERS
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
var age = 16;
alert("I am " + age + " Years old.");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.
var visits = localStorage.getItem('visits');

if (visits === null) {
  visits = 0;
}
visits++;
localStorage.setItem('visits', visits);
document.write("You have visited this site " + visits + " times.");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
// Declare the birthYear variable and assign it your birth year
var birthYear = 2006;
document.write("My birth year is " + birthYear + ".");

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:

// a. Visitor’s name
var visitor_name = prompt("Enter your name");

// b. Product title
var products = prompt("Enter product name");

// c. Quantity i.e. how many products a visitor wants to
// order
var quantity = prompt("Enter quantity of the product");

// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
document.write(visitor_name + " ordered " + quantity + products + " on XYZ Clothing store");