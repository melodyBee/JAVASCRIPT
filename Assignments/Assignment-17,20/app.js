// ARRAYS AND LOOP
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
document.write('<h3> Task 1 </h3>');
var emptyArray = [];

// 2. Declare and initialize a multidimensional array 
// representing the following matrix:
document.write('<h3> Task 2 </h3>');
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
// 3. Write a program to print numeric counting from 1 to 10.
document.write('<h3> Task 3 </h3>');
for(i=1;i<11;i++){
    document.write(i +"<br>")
}
// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.
document.write('<h3> Task 4 </h3>');

// 5. Write a program to print items of the following array 
// using for loop:
document.write('<h3> Task 5 </h3>');
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 6. Generate the following series in your browser. See 
// example output.
document.write('<h3> Task 6 </h3>');

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write("Counting: ");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}
document.write("<br>");

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("Reverse counting: ");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}
document.write("<br>");

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("Even: ");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br>");

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("Odd: ");
for (var i = 1; i < 20; i += 2) {
  document.write(i + ", ");
}
document.write("<br>");

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("Series: ");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}

// 7. You have an array
document.write('<h3> Task 7 </h3>');

// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// Write a program to enable “search by user input” in an 
// array.
var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var index = A.indexOf(input);
if (index >= 0) {
  alert(input + " is available at index " + index + " in our bakery.");
} else {
  alert("We are sorry. " + input + " is not available in our bakery.");
}

// 8. Write a program to identify the largest number in the 
// given array.
document.write('<h3> Task 8 </h3>');
var A = [24, 53, 78, 91, 12];
var largest = Math.max.apply(null, A);
document.write(largest);

// 9. Write a program to identify the smallest number in the 
// given array.
document.write('<h3> Task 9 </h3>');
// A = [24, 53, 78, 91, 12]
var A = [24, 53, 78, 91, 12];
var smallest = Math.min.apply(null, A);
console.log(smallest);

// 10. Write a program to print multiples of 5 ranging 1 to 100.
document.write('<h3> Task 10 </h3>');
for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }