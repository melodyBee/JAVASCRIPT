// MATH EXPRESSIONS
// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.
document.write('<h3> Task 1 </h3>');
var a=prompt("enter a number");
var b=prompt("enter another number");
var num1= parseInt(a);
var num2= parseInt(b);
var sum=num1+num2;
document.write('sum of the following two number is '+sum+'<br>');

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
document.write('<h3> Task 2 </h3>');

var sub=num1-num2;
document.write('sub of the following two number is ' + sub +'<br>');
document.write('multi of the following two number is '+num1*num2+'<br>');
document.write('div of the following two number is '+num1/num2+'<br>');
document.write('remainder of the following two number is '+num1%num2+'<br>');

// 3. Do the following using JS Mathematic Expressions
document.write('<h3> Task 3 </h3>');

// a. Declare a variable.
var variablee;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is " +variablee+'<br>');

// c. Initialize the variable with some number.
var variablee=2;

// d. Show the value of variable in your browser like “Initial value: 5”.
document.write('initial value: '+ variablee+'<br>');

// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is: "+ ++variablee+'<br>');
// g. Add 7 to the variable.
var variablee= variablee+7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.
document.write("Value after addition of 7 is: "+variablee+'<br>');
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write(--variablee+'<br>');
// k. Show the remainder after dividing the variable’s value by 3. 
// l. Output : “The remainder is : 0”.
remainder= variablee%3; document.write("Remainder after dividing by 3="+remainder+'<br>')

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
document.write('<h3> Task 4 </h3>');
var ticket_price=600;
var five_ticketPrice=5*600;
document.write('Cost of buying 5 tickets is ='+five_ticketPrice+'Rs'+'<br>');

// 5. Write a script to display multiplication table of any number in your browser.
document.write('<h3> Task 5 </h3>');
for(i=1;i<11;i++){
    multi=i*6;
    document.write(6 +'x'+ i+'='+multi+'<br>');
}
// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
document.write('<h3>Task 6</h3>');
var celcius= 50;
var fahrenheit= (celcius *9/5)+32;
document.write('50 C is='+fahrenheit+'F'+'<br>');

var C=(fahrenheit-32)*5/9;
document.write('C of '+fahrenheit+'F is='+C+'<br>');

// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
document.write('<h3>Task 7</h3>');
var item_1=650;
var quantity_1=3;
var item_2=100;
var quantity_2=7;
var shipping_charges=100;
var total_amount= (item_1*quantity_1)+(item_2*quantity_2)+shipping_charges;
document.write('Price of item 1='+ item_1  +'<br>'+'Quantity of item 1 is='+ quantity_1 +'<br>'+'Price of item 2 is='+ item_2  +'<br>'+'Quantity of item 2 is='+ quantity_2 + '<br>' +'Shipping Charges='+ shipping_charges + '<br>' + 'Total amount of your order is='+ total_amount );
// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in your browser
document.write('<h3> Task 8 </h3>');
var total_marks=980;
var marks_obt= 804;
var percentage= (marks_obt/total_marks)*100; 
document.write('Total marks= '+ total_marks + '<br>'+ 'Marks obtained='+ marks_obt + '<br>' + 'Percentage= '+ percentage + '%');
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write('<h3>  </h3>');

// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
document.write('<h3>  </h3>');
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
document.write('<h3>  </h3>');
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
// 12. The Geometrizer: Calculate properties of a circle.
document.write('<h3>  </h3>');
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
document.write('<h3>  </h3>');

// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.