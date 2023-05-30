//STRING METHODS
// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.
document.write("<h2>Task 1</h2>");
var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;
alert("Welcome" + fullName);

// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser
document.write("<h2>Task 2</h2>");
var model = prompt("Enter your favorite mobile phone model");
var len = model.length;
document.write("Length of user input: " + len);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
document.write("<h2>Task 3</h2>");
var word = "Pakistani";
var index = word.indexOf("n");

document.write("Index of letter 'n' in " + word + ": " + index);

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.
document.write("<h2>Task 4</h2>");
var scores = [75, 82, 64, 91, 88, 76, 83];
scores.sort((a, b) => a - b);
console.log(scores);

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.
document.write("<h2>Task 5</h2>");
var word = "Pakistani";
var character = word.charAt(3);
document.write("The character at the 3rd index in the word 'Pakistani' is: " + character);

// 6. Repeat Q1 using string concat() method.
document.write("<h2>Task 6</h2>");
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
document.write("Hello, " + fullName + "! Welcome!");

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” adocument.write("<h2>Task 1</h2>");
// and display the result in your browser.
document.write("<h2>Task 7</h2>");

var word = "Hyderabad";
var newWord = word.replace("Hyder", "Islam");
document.write("After replacement: " + newWord);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;
document.write("<h2>Task 8</h2>");

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("After replacement: " + newMessage);

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.
document.write("<h2>Task 9</h2>");

var str = "472";
var num = Number(str);
document.write("String value: " + str + "<br>");
document.write("String type: " + typeof str + "<br><br>");
document.write("Number value: " + num + "<br>");
document.write("Number type: " + typeof num);

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.
document.write("<h2>Task 10</h2>");

var userInput = prompt("Enter a string:");
var capitalLetters = userInput.toUpperCase();
document.write("Converted input: " + capitalLetters);

// 11. Write a program that takes user input. Convert and 
// show the input in title case.
document.write("<h2>Task 11</h2>");

var userInput = prompt("Enter a string:");
var words = userInput.split(' ');
var titleCase = '';
for (i = 0; i < words.length; i++) {
  var word = words[i];
  var firstLetter = word.charAt(0).toUpperCase();
  var restOfWord = word.slice(1).toLowerCase();
  var capitalizedWord = firstLetter + restOfWord;
  titleCase += capitalizedWord + ' ';
}
document.write("Converted input: " + titleCase);

// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
document.write("<h2>Task 12</h2>");

var num = 35.36;
var str = num.toString().replace(".", "");
document.write("Converted string: " + str);

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
document.write("<h2>Task 13</h2>");

var username = prompt("Enter your username:");
var specialSymbols = ["@", ".", ",", "!"];

function isSpecialSymbol(char) {
  var charCode = char.charCodeAt(0);
  return (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64);
}

var containsSpecialSymbol = false;
for (var i = 0; i < username.length; i++) {
  if (isSpecialSymbol(username[i])) {
    containsSpecialSymbol = true;
    break;
  }
}

if (containsSpecialSymbol) {
  alert("Please enter a valid username without special symbols [@ . , !]");
} else {
  // Valid username
  alert("Username: " + username);
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:
document.write("<h2>Task 14</h2>");
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search:");
var userInputLowercase = userInput.toLowerCase();
var isItemFound = false;
for (var i = 0; i < A.length; i++) {
  var currentItem = A[i].toLowerCase();
  if (currentItem === userInputLowercase) {
    isItemFound = true;
    break;
  }
}
if (isItemFound) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list.");
}

// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
document.write("<h2>Task 15</h2>");
// Take user input for the password
var password = prompt("Enter a password:");
var alphabetRegex = /[a-zA-Z]/;
var numberRegex = /[0-9]/;
if (
  password.length >= 6 &&
  alphabetRegex.test(password) &&
  numberRegex.test(password) &&
  !numberRegex.test(password.charAt(0))
) {
  alert("Password is valid!");
} else {
  alert("Please enter a valid password that meets the requirements.");
}
// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
document.write("<h2>Task 16</h2>");

var university = "University of Karachi";
var array = university.split(" ");
document.write("Array elements: " + array);

// 17. Write a program to display the last character of a user 
// input.
document.write("<h2>Task 17</h2>");
var userInput = prompt("Enter a string:");
var lastCharacter = userInput.charAt(userInput.length - 1);
document.write("Last character: " + lastCharacter);

// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.
document.write("<h2>Task 18</h2>");
// Define the string
var sentence = "The quick brown fox jumps over the lazy dog";
var lowercaseSentence = sentence.toLowerCase();
var wordToSearch = "the";
var regex = new RegExp("\\b" + wordToSearch + "\\b", "g");
var count = (lowercaseSentence.match(regex) || []).length;
document.write("Number of occurrences of the word 'the': " + count);
