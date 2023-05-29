// ARRAYS
// 1. Declare an empty array using JS literal notation to store
// student names in future.
document.write('<h3> Task 1 </h3>');
var studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
document.write('<h3> Task 2 </h3>');
var studentNames = new Array();

// 3. Declare and initialize a strings array.
document.write('<h3> Task 3 </h3>');
var fruits = ["apple", "banana", "cherry", "date"];

// 4. Declare and initialize a numbers array.
document.write('<h3> Task 4 </h3>');
var numbers = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
document.write('<h3> Task 5 </h3>');
var flags = [true, false, true, false];

// 6. Declare and initialize a mixed array.
document.write('<h3> Task 6 </h3>');
var mixed = [1, "hello", true, 3.14, ["a", "b", "c"]];

// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:
document.write('<h3> Task 7 </h3>');
var edQualification=[' SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD']
document.write("<h1>Qualifications:</h1>");
for (var i = 0; i < edQualification.length; i++) {
  document.write((i + 1) + ") " + edQualification[i] + "<br>");
}
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:
document.write('<h3> Task 8 </h3>');
var studentNames = ["Maha", "Abeera", "Aima"];
var studentScores = [320, 230, 480];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  document.write("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%<br>");
}
// 9. Initialize an array with color names. Display the array
// elements in your browser.
document.write('<h3> Task 9 </h3>');
var colors = ["red", "green", "blue", "yellow", "orange"];
console.log(colors);
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var newColor = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(newColor);
console.log(colors);
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
var newColor = prompt("Enter a color to add to the end of the array:");
colors.push(newColor);
console.log(colors);
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
colors.unshift("pink", "purple");
console.log(colors);
// d. Delete the first color in the array. Display the updated
// array in your browser.
colors.shift();
console.log(colors);
// e. Delete the last color in the array. Display the updated
// array in your browser.
colors.pop();
console.log(colors);
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
var index = parseInt(prompt("Enter an index to add a color:"));
var newColor = prompt("Enter a color name:");
colors.splice(index, 0, newColor);
console.log(colors);
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
var index = parseInt(prompt("Enter an index to delete colors:"));
var count = parseInt(prompt("Enter how many colors to delete:"));
colors.splice(index, count);
console.log(colors);

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.
document.write('<h3> Task 10 </h3>');
function sortStudentScores(scores) {
  scores.sort(function(a, b) {
    return a - b;
  });
}
var studentScores = [80, 95, 75, 85, 90];
console.log("Before sorting:", studentScores);
sortStudentScores(studentScores);
console.log("After sorting:", studentScores);

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.
document.write('<h3> Task 11 </h3>');
let cities = ["Karachi", "Lahore", "Islamabad", "Istanbul", "NewYork"];
let selectedCities = cities.slice(0, 3); 
console.log(selectedCities);

// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
document.write('<h3> Task 12 </h3>');
var arr = ["This ", " is ", " my ", " cat"];
var str = arr.join(""); 
console.log(str);
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)
document.write('<h3> Task 13 </h3>');
var queue = [];
queue.push("first"); 
queue.push("second"); 
queue.push("third"); 
var first = queue.shift(); 
var second = queue.shift(); 
var third = queue.shift();

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
document.write('<h3> Task 14 </h3>');
var stack = [];

stack.push("first");  
stack.push("second"); 
stack.push("third");  
var third = stack.pop();
var second = stack.pop();
var first = stack.pop();
// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method:
document.write('<h3> Task 15 </h3>');
var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select id='phoneList'>");
for (var i = 0; i < phones.length; i++) {
  document.write("<option>" + phones[i] + "</option>");
}
document.write("</select>");