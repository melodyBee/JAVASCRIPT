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

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.
document.write("<h3>Task 7</h3>");

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
document.write("<h3>Task 8</h3>");

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// 9. Write a function that calculates the area of a rectangle.
document.write("<h3>Task 9</h3>");

//  A = width * height
//  Pass width and height in following manner:

//  i. Arguments as value

//  ii. Arguments as variables

//  10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.
document.write("<h3>Task 10</h3>");

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
document.write("<h3>Task 11</h3>");

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
document.write("<h3>Task 12</h3>");

// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'
document.write("<h3>Task 13</h3>");

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