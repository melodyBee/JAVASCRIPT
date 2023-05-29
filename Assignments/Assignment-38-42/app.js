//FUNCTIONS, SWITCH STATEMENTS, WHILE… DO-WHILE LOOPS
// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.
document.write("<>Task 1</>");
function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= a;
    }
    return result;
  }
  var base = parseFloat(prompt("Enter the base number:"));
  var exponent = parseInt(prompt("Enter the exponent:"));
  var result = power(base, exponent);
  console.log(base + " raised to the power of " + exponent + " is " + result);
  
// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
document.write("<>Task 2</>");
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}
var year = parseInt(prompt("Enter a year:"));
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
document.write("<>Task 3</>");
function calculateArea(a, b, c) {
    var s = calculateS(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
function calculateS(a, b, c) {
    var s = (a + b + c) / 2;
    return s;
}
var sideA = 3;
var sideB = 4;
var sideC = 5;
var triangleArea = calculateArea(sideA, sideB, sideC);
document.write("Area of the triangle:", triangleArea);

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.
document.write("<>Task 4</>");

function calculateAverage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var average = totalMarks / 3;
    return average;
}
function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var totalMarksOutOf = 300;
    var percentage = (totalMarks / totalMarksOutOf) * 100;
    return percentage;
}
function mainFunction() {
    var subject1Marks = parseFloat(prompt("Enter marks for subject 1:"));
    var subject2Marks = parseFloat(prompt("Enter marks for subject 2:"));
    var subject3Marks = parseFloat(prompt("Enter marks for subject 3:"));
    var averageMarks = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
    var percentageMarks = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);
    console.log("Average marks:", averageMarks);
    console.log("Percentage marks:", percentageMarks);
}
mainFunction();

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.
document.write("<>Task 5</>");
function customIndexOf(str, searchChar) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === searchChar) {
        return i;
      }
    }
    return -1;
  }
  var str = "Hello, World!";
  var searchChar = "o";
  var index = customIndexOf(str, searchChar);
  console.log(index); // Output: 4
  
// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.
document.write("<>Task 6</>");
function deleteVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var result = '';
    for (var i = 0; i < sentence.length; i++) {
      var char = sentence[i].toLowerCase();
  
      if (vowels.indexOf(char) === -1) {
        result += sentence[i];
      }
    }
    return result;
  }
  var sentence = "Hello, how are you?";
  var modifiedSentence = deleteVowels(sentence);
  document.write(modifiedSentence); 
  
// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.
document.write("<>Task 7</>");
function countSuccessiveVowels(text) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for (var i = 0; i < text.length - 1; i++) {
      var char1 = text[i].toLowerCase();
      var char2 = text[i + 1].toLowerCase();
      switch (char1) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          if (vowels.indexOf(char2) !== -1) {
            count++;
          }
          break;
      }
    }
    return count;
  }
  var sentence = "Pleases read this application and give me gratuity";
  var occurrences = countSuccessiveVowels(sentence);
  document.write("Number of occurrences: " + occurrences); 
  
// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.
document.write("<>Task 8</>");

function convertToMeters(distanceInKm) {
    return distanceInKm * 1000;
  }
  function convertToFeet(distanceInKm) {
    return distanceInKm * 3280.84;
  }
  function convertToInches(distanceInKm) {
    return distanceInKm * 39370.1;
  }
  function convertToCentimeters(distanceInKm) {
    return distanceInKm * 100000;
  }
  var distanceInKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));
  var distanceInMeters = convertToMeters(distanceInKm);
  var distanceInFeet = convertToFeet(distanceInKm);
  var distanceInInches = convertToInches(distanceInKm);
  var distanceInCentimeters = convertToCentimeters(distanceInKm);
  
  console.log("Distance in Meters: " + distanceInMeters);
  console.log("Distance in Feet: " + distanceInFeet);
  console.log("Distance in Inches: " + distanceInInches);
  console.log("Distance in Centimeters: " + distanceInCentimeters);
  
// 9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.
document.write("<>Task 9</>");
// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.
document.write("<>Task 10</>");