//FUNCTION
// 1. Write a function that displays current date & time in your 
// browser.
document.write("<h3>Task 1</h3>");
function current(){
   var Date= new Date();
   document.write(Date); 

}

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.
document.write("<h3>Task 2</h3>");
function greet(){
    var firstName=prompt("enter your first name");
    var lastName=prompt("Enter your last name");
    document.write('Welcome '+ firstName + ' ' + lastName +'<br>');
}
 greet();

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.
document.write("<h3>Task 3</h3>");
function add(a,b){
    var a,b;
    var sum=parseInt(a) + parseInt(b);
   document.write('the addition of the numbers you enterd is ='+ sum);
}
var input1= prompt("ENter num 1");
var input2= prompt("Enter num 2");
add(input1,input2);

// 4. Calculator:
document.write("<h3>Task 4</h3>");
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.
function desired_op(num1,num2,op){
    switch(op){
        case '+': return result=num1+num2; break;
        case '-': return result=num1-num2; break;
        case '/': return result=num1/num2; break;
        case '%': return result=num1%num2; break;
    }
}
var A= prompt("Input 1");
var B= prompt("Input 2");
var C= prompt("Input operator"); 
var result= desired_op(A,B,C);
document.write(result);

// 5. Write a function that squares its argument.
document.write("<h3>Task 5</h3>");
function square(x) {
    return x * x;
  }
var squareNum=prompt("Enter the number you want square of");
  var answer = square(squareNum);
  document.write("The square of the number you entered is= "+ answer);

// 6. Write a function that computes factorial of a number.
document.write("<h3>Task 6</h3>");
function factorial ()
{
var a,y,b=1;
var y=prompt("Enter a number:");
for(a=y;a>=1;a--)
b=a*b;

document.write("<br>The factorial is "+ b );
}
factorial();

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.
document.write("<h3>Task 7</h3>");
var a=prompt("Enter Start of the counting");
var z=prompt("Enter the end of the counting");
for(i=a;i<z;i++){
  document.write(i +"<br>");
}

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
document.write("<h3>Task 8</h3>");
// Take base and perpendicular as inputs.
var base=prompt("Enter base");
var perpendicular=prompt("Enter perpendicular");

function hypotenuse(base, perpendicular) {
  function calculateSquare(side) {
    return side * side;
  }
  var baseSquare = calculateSquare(base);
  var perpendicularSquare = calculateSquare(perpendicular);
  var hypotenuseSquare = baseSquare + perpendicularSquare;
  var hypotenuse = Math.sqrt(hypotenuseSquare);

  document.write("Hypotenuse ="+ hypotenuse) ;
}
hypotenuse(base,perpendicular);

// 9. Write a function that calculates the area of a rectangle.
document.write("<h3>Task 9</h3>");
//  A = width * height
//  Pass width and height in following manner:
//  i. Arguments as value
//  ii. Arguments as variables
var a=prompt("Enter width of the rectangle");
var b=prompt("Enter height of the rectangle");
function areaOfRec(width,height){
  var A = width * height;
  document.write("Area of rectangle is= "+ A );
}
areaOfRec(a,b);
//  10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.
document.write("<h3>Task 10</h3>");
function isPalindrome(str) {
  var processedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  for (var i = 0; i < processedStr.length / 2; i++) {
    if (processedStr[i] !== processedStr[processedStr.length - 1 - i]) {
      return false; 
    }
  }
  return true; 
}
var input = prompt("Enter a word or phrase:");
var result = isPalindrome(input);
if (result) {
  console.log("The input is a palindrome.");
} else {
  console.log("The input is not a palindrome.");
}

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
document.write("<h3>Task 11</h3>");
function capitalizeFirstLetter(str) {
  var words = str.split(' '); // Split the string into an array of words
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    words[i] = capitalizedWord;
  }
  var result = words.join(' ');
  return result;
}
var input = prompt("Enter a sentence:");
var output = capitalizeFirstLetter(input);
document.write("Output:"+ output);

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
document.write("<h3>Task 12</h3>");
function findLongestWord(str) {
  var words = str.split(' '); 
  var longestWord = '';
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
var input = prompt("Enter a sentence:");
var output = findLongestWord(input);
document.write("Output:", output);

// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'
document.write("<h3>Task 13</h3>");
function countLetterOccurrences(str, letter) {
  var count = 0;
  var lowerStr = str.toLowerCase();
  var lowerLetter = letter.toLowerCase();
  for (var i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerLetter) {
      count++;
    }
  } 
  return count;
}
var inputString = 'JSResourceS.com';
var inputLetter = 'o';
var occurrenceCount = countLetterOccurrences(inputString, inputLetter);
document.write("Number of occurrences:"+ occurrenceCount);

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
document.write("<h3>Task 14</h3>");
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  console.log("The circumference is " + circumference);
}
function calcArea(radius) {
  var area = Math.PI * radius * radius;
  console.log("The area is " + area);
}
var radius = parseFloat(prompt("Enter the radius of the circle:"));
calcCircumference(radius);
calcArea(radius);
