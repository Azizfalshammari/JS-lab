
//This is a way to find the area of the rectangle.

let rectangleH = 5;
let rectangleW = 6;

let areaRectangle = "The area of the rectangle is: " + (rectangleH * rectangleW);
console.log(areaRectangle)


// --------------------------------------------


// Convert from Celsius to Fahrenheit and the other way around

// Fahrenheit to Celcius: C = (F-32) (5/9)
// Celsius to Fahrenheit: F = C(9/5) + 32

let temp = 37;

fTemp = temp* (9/5) + 32
console.log(fTemp);


cTemp = (fTemp-32) *(5/9)
console.log(cTemp)



//----------------------------

// 1. من ساعه الى ثانيه

// قم بتخزين الساعه في متغير.

// قم بتخزين قيمه الثانيه في متغير.

// النتيجه المخرجه “NN hours = NN Seconds”




let hours = 1;

let hourInSeconds= hour * 3600;

console.log(hours+ 'hour is:' + hourInSeconds+ 'seconds')



//-------------------


/*
 * REQUIREMENTS
 * 1. Your code should have two variables -  `thingOne` and `thingTwo`
 * 2. Your code should only have one `console.log` statement
 * 3. Your code should print out the values of `thingOne` and `thingTwo` using concatenation
 * 4. Your code should contain semicolons at the end of each line
 */



let thingOne = 'my name is :';
let thingTwo = ' Abdulaziz Alshammari';

console.log(thingOne.concat(""+ thingTwo));






//-----------------------

// Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 
//(don't perform the calculation yourself, let JavaScript do it!). 
//Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. 
//Finally, add the bill and tip together and store it into a variable called total.
// Print the total to the JavaScript console.
// Hint: 15% in decimal form is written as 0.15.


/*
 * REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`, and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword
 * 3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value equal to 15% of the `bill`
 * 5. Your variabe `total` should be a number, having a value equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */


let bill = 10.25 + 3.99 + 7.15;
let tip = bill * 0.15;
let total = tip + bill;
console.log('The total of the bill is: '+ total);





// is a word game where players have fun substituting words for blanks in a story. 
//For this exercise, use the adjective variables below to fill in the blanks and complete the following message.
// "The Intro to JavaScript course is __________. James and Julia are so __________. 
//I cannot wait to work through the rest of this __________ content!"
// var adjective1 = "amazing";
// var adjective2 = "fun";
// var adjective3 = "entertaining";
// Assign the resulting string to a variable called madLib.


/*
 * REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */

let adjective1 = 'amazing';
let adjective2 = 'fun';
let adjective3 = 'entertaining';
let madLib = 'The Intro to JavaScript course is ' + adjective1 + '. James and Julia are so ' + adjective2 + '. I cannot wait to work through the rest of this ' + adjective3 + ' content!'


// -------------------------------------------------------------




/*
 * REQUIREMENTS
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 *
 * 2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above.
 *  The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby`
 *
 * 3. The `awesomeMessage` variable should have the correct format, as shown below:
 * "Hi, my name is _____. I love ______. In my spare time, I like to ______."
 *
 * 4. Print `awesomeMessage` variable to the console using log() method
 */
 
 /*
 * Example:
 * - Assuming, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the following message:
 * 
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */




 let firstName = 'Fahad';
 let interests = "Tea";
 let hobby = 'buy tables';
 let awesomeMessage= ''
 awesomeMessage = awesomeMessage.concat('Hi, my name is ', firstName ,'. I love ',interests,'. In my spare time, I like to ',hobby,'.');
 
 
 
 
 console.log(awesomeMessage)