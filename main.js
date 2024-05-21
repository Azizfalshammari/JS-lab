//This is a way to find the area of the rectangle.

let rectangleH = 5;
let rectangleW = 6;

let areaRectangle = "The area of the rectangle is: " + rectangleH * rectangleW;
console.log(areaRectangle);

// --------------------------------------------

// Convert from Celsius to Fahrenheit and the other way around

// Fahrenheit to Celcius: C = (F-32) (5/9)
// Celsius to Fahrenheit: F = C(9/5) + 32

let temp = 37;

fTemp = temp * (9 / 5) + 32;
console.log(fTemp);

cTemp = (fTemp - 32) * (5 / 9);
console.log(cTemp);

//----------------------------

// 1. من ساعه الى ثانيه

// قم بتخزين الساعه في متغير.

// قم بتخزين قيمه الثانيه في متغير.

// النتيجه المخرجه “NN hours = NN Seconds”

let hours = 1;

let hourInSeconds = hour * 3600;

console.log(hours + "hour is:" + hourInSeconds + "seconds");

//-------------------

/*
 * REQUIREMENTS
 * 1. Your code should have two variables -  `thingOne` and `thingTwo`
 * 2. Your code should only have one `console.log` statement
 * 3. Your code should print out the values of `thingOne` and `thingTwo` using concatenation
 * 4. Your code should contain semicolons at the end of each line
 */

let thingOne = "my name is :";
let thingTwo = " Abdulaziz Alshammari";

console.log(thingOne.concat("" + thingTwo));

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
console.log("The total of the bill is: " + total);

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

let adjective1 = "amazing";
let adjective2 = "fun";
let adjective3 = "entertaining";
let madLib =
  "The Intro to JavaScript course is " +
  adjective1 +
  ". James and Julia are so " +
  adjective2 +
  ". I cannot wait to work through the rest of this " +
  adjective3 +
  " content!";

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

let firstName = "Fahad";
let interests = "Tea";
let hobby = "buy tables";
let awesomeMessage = "";
awesomeMessage = awesomeMessage.concat(
  "Hi, my name is ",
  firstName,
  ". I love ",
  interests,
  ". In my spare time, I like to ",
  hobby,
  "."
);

console.log(awesomeMessage);

//  --------------------Lab 2--------------------



// -----------------Question '1' ----------------------
// Conditional;

/*
 * Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement.
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
// var eatsPlants = false;
// var eatsAnimals = true;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

let eatsAnimals = false;
let eatsPlants = true;
let animalType =
  eatsAnimals && eatsPlants
    ? "omnivore"
    : eatsAnimals
    ? "carnivore"
    : eatsPlants
    ? "herbivore"
    : undefined;

console.log(animalType);

//---------------------------Question '2'------------------------

//     Musical groups have special names based on the number of people in the group.

// For example, a "quartet" is a musical group with four musicians. Barbershop quartets(opens in a new tab) were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.

// Directions:
// Write a series of conditional statements that:

// Prints "not a group" if musicians is less than or equal to 0
// Prints "solo" if musicians is equal to 1
// Prints "duet" if musicians is equal to 2
// Prints "trio" if musicians is equal to 3
// Prints "quartet" if musicians is equal to 4
// Prints "this is a large group" if musicians is greater than 4


/*
 * REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully.
 */

// change the value of `musicians` to test your conditional statements

// change the value of `musicians` to test your conditional statements


let musicians = 3;

if (musicians > 4) {
  console.log("this is a large group");
} else if (musicians == 4) {
  console.log("Quartet");
} else if (musicians == 3) {
  console.log("trio");
} else if (musicians == 2) {
  console.log("duo");
} else if (musicians == 1) {
  console.log("solo");
} else if (musicians <= 0) {
  console.log("not a group");
}

//------------------------Question '3'----------------------------


// Directions:
// For this quiz, you're going to help solve a fictitious murder mystery
//  that happened here at Tuwaiq! A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit
// .
// Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! In this murder mystery there are:

// To help solve this mystery, write a combination of conditional statements that:
// 1. sets the value of weapon based on the room and
// 2. sets the value of solved to true if the value of room matches the suspect's room
// Afterwards, use this template to print a message to the console if the mystery was solved:
// __________ did it in the __________ with the __________!
// What goes into the three blank spaces? You can fill in the blanks with the name of the suspect, the room, and the weapon! For example, an output string may look like:
// Mr. Parkes did it in the dining room with the knife!
// Be sure to watch out for any extra or missing characters (including spaces and punctuation marks) in your output string as well!


/*
 * REQUIREMENTS
 * 1. Your code should have variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */


// * four rooms: the ballroom, gallery, billiards room, and dining room,
// * four weapons: poison, a trophy, a pool stick, and a knife,
// * and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
// We also know that each weapon corresponds to a particular room, so...
// * the poison belongs to the ballroom,
// * the trophy belongs to the gallery,
// * the pool stick belongs to the billiards room,
// * and the knife belongs to the dining room.
// And we know that each suspect was located in a specific room at the time of the murder.
// * Mr. Parkes was located in the dining room.
// * Ms. Van Cleve was located in the gallery.
// * Mrs. Sparr was located in the billiards room.
// * Mr. Kalehoff was located in the ballroom.
let room = '';
let suspect=' ';
let weapon='';
let solved='false';


if (weapon=='poison'){
    suspect = 'Mr. Kalehoff';
    room = 'ballroom';
    solved = true;
} else if (weapon == 'trophy'){
    suspect = 'Ms. Van Cleve';
    room = 'gallery';
    solved = true;
} else if (weapon == 'poolstick'){
    suspect = 'Mrs. Sparr';
    room = 'billiards room';
    solved = true;
} else if (weapon == 'knife'){
    suspect = 'Mr. Parkes';
    room = 'dining room';
    solved = true;
}

if (solved==true){
    console.log("'suspect' did it in the 'room' with the 'weapon'!");
}

/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code

// A room can be either of - dining room, gallery, ballroom, or billiards room
// var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
// var suspect = "Mr. Parkes"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
// var weapon = "";
// var solved = false;

/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
// if (solved) {
//     console.log();
// }








// -----------------Question '4'--------------


/*
 * REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -325;
var checkBalance = true;
var isActive = true;



// Start only if checkBalance === true

if (checkBalance === true){
    if (isActive === true){
        console.log(balance)
    }else {console.log("Your account is inactive")}

}else {console.log('You cant access your account')}




//-------------------Questions '5'-------------------------


/*
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */
let flavor ='';
let vessel = '';
let toppings = '';
if (flavor=='vanilla'|| 'chocolate'){
    
    if (vessel== 'cone' || 'bowl'){
            if(toppings == 'sprinkles' || 'peanuts'){
                console.log("I'd like two scoops of "+flavor+ " ice cream in a "+vessel+ " with "+toppings+ ".")
            }
    }
    
}


/*
 * REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 * 
 * 6. Your code should not be empty
 */
 
// change the values of `flavor`, `vessel`, and `toppings` to test your code



//--------------------------------------------------------------------


