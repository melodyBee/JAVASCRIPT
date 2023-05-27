// USER INPUT & CONDITIONAL STATEMENT
// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”
document.write('<h3> Task 1 </h3>');
 var city= prompt("Enter your city");
 if(city=='Karachi'){
    alert("Welcome to the city of lights");
 }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.
document.write('<h3> Task 2 </h3>');
var gender= prompt("Enter your gender");
if(gender=='male'){
alert("Good morning Sir");
}
if(gender=='female'){
    alert("Good Morning Ma'am.");
}

// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now
document.write('<h3> Task 3 </h3>');
var signalColor=prompt('Enter the traffic light color\nRead\nYellow\nGreen');
switch(signalColor){
    case "Red": alert("Must stop!"); break;
    case "Yellow": alert("Ready to move"); break;
    case "Green": alert("Move now"); break;
}

// 4. Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”
document.write('<h3> Task 4 </h3>');

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. 
document.write('<h3> Task 5 </h3>');

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// b. 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d.
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e.
 if (true){
alert("True");
}
if (false){
alert("False");
}

// f.
 if("car" < "cat"){
alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:
document.write('<h3> Task 6 </h3>');
var sub1Marks= prompt("Enter subject 1 Marks");
var sub2Marks=prompt("Enter subject 2 Marks");
var sub3Marks=prompt("Enter subject 3 Marks");
var sub1Marks= +sub1Marks;
var sub2Marks= +sub2Marks;
var sub3Marks= +sub3Marks;
var marks_obt= sub1Marks + sub2Marks + sub3Marks;
var per=(marks_obt/totalMarks)*100;
document.write("Total marks : "+ 300);
document.write('<br>Marks obtained : '+ marks_obt );
document.write('<br><br>Percentage : '+ per);
if(80<per){
    document.write('<br>Grade:  A-one');
    document.write('<br>Reamrks : Excellent');
}
else
if(70<per){
    document.write('<br>Grade: A');
    document.write('<br>Reamrks : Good');
}
else
if(60<per){
    document.write('<br>Grade:  B');
    document.write('<br>Reamrks : You need to improve');
}
else
if(60>per){
    document.write('<br>Grade:  Fail');
    document.write('<br>Reamrks : Sorry');
}
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

// 7. Guess game:
document.write('<h3> Task 7 </h3>');

// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.
document.write('<h3> Task 8 </h3>');

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
document.write('<h3> Task 9 </h3>');

// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
document.write('<h3> Task10 </h3>');

// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
document.write('<h3> Task 11 </h3>');

// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user