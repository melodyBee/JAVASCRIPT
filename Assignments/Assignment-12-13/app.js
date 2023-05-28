// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).
document.write('<h3> Task 1 </h3>');
var character=prompt("Enter any character number or integer");
    // if(character){
    //     document.write(character + "is a number");
    // }
    // else{
        if(character == character.toUpperCase()){
            document.write(character + "is an uppercase letter");
        }
        else if(character == character.toLowerCase()){
            document.write(character + "is a lowercase letter");
        }
    // }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
document.write('<h3> Task 2 </h3>');
var num1 = prompt("Enter the first integer");
num1 = parseInt(num1);
//get the second integer from the user
var num2 = prompt("Enter the second integer");
num2 = parseInt(num2);
if(num1 > num2){
    document.write(num1 +"is greater than"+ num2);
}
else 
if(num1 < num2){
    document.write(num2 +"is greater than"+ num1);
}
else{
    document.write(num1 +"and"+ num2 +"are equal");
}

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.
document.write('<h3> Task 3 </h3>');
var num = prompt("Enter a number");
num = parseInt(num);

if(num > 0){
    document.write(num + " is a positive number");
}
else if(num < 0){
    document.write(num + " is a negative number");
}
else{
    document.write(num + " is zero");
}

// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise
document.write('<h3> Task 4 </h3>');
var char = prompt("Enter a character");
    //check if the character is a vowel using the indexOf method
    if("aeiou".indexOf(char) != -1){
       var result = true;
    }
    else{
       var result = false;
    }

// 5. Write a program that
document.write('<h3> Task 5 </h3>');
// a. Store correct password in a JS variable.
var correctPass='Chip7533';
// b. Asks user to enter his/her password
var userPass=prompt("Enter password");
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”

// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.

// 6. This if/else statement does not work. Try to fix it:
document.write('<h3> Task 6 </h3>');

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
document.write(greeting);
}
else{
greeting = "Good evening";
document.write(greeting);
}

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements
document.write('<h3> Task 7 </h3>');
