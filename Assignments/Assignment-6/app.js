// MATH EXPRESSIONS
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
document.write('<h3> Task 1 </h3>');
var a=10;
document.write('Result: <br>The value of a is: '+ a);
document.write('<br>----------------------<br>');
document.write('<br>The value of ++a is: '+ ++a);
document.write('<br>Now the value of a is: '+ a);

document.write('<br> <br> The value of a++ is: '+ a++);
document.write('<br> Now the value of a is: '+ a);

document.write('<br><br> The value of --a is: '+ --a);
document.write('<br> Now the value of a is: '+ a);

document.write('<br><br>The value of a--'+ a--);
document.write('<br>Now the value of a is: '+ a);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
document.write('<h3> Task 2 </h3>');
var a=2, b=1;
document.write('<br>a is: '+ a);
document.write('<br>b is: '+ b);
var result = --a - --b + ++b + b--;
document.write('<br>result is: '+ result +'<br><br>');

// 3. Write a program that takes input a name from user & 
// greet the user.
document.write('<h3> Task 3 </h3>');
var inputName= prompt("Enter your name");
alert("Welcome "+ inputName);

// 4.
// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.
document.write('<h3> Task 4 </h3>');
var inputNum= prompt("Enter a number");
var inputNum= +inputNum;
for(i=1;i<11;i++){
    multi=i*inputNum;
    document.write(inputNum +'x'+ i+'='+multi+'<br>');
}
// 6. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)
document.write('<h3> Task 5 </h3>');