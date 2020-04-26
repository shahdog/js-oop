// Rule 1: Variables cannot be a reserve keyword like let, if, else
// Rule 2: Variable names should be meaningful and descriptive
// Rule 3: Variables cannot start with a number
// Rule 4: Variables cannot have space or hyphen (-)
// Rule 5: Variables are case sensitive

let x = 10;
const interestRate = 0.3; // Constant
let isApproved = true; // Boolean literal
let selectedColor = null; // To be used to explicitly clear the value

// Ternary operator - if customer's points are > 100, they are gold or else silver status
let points = 110;
let status = points > 100 ? 'gold' : 'silver';
console.log(status);

// This is the same as x = x + 5
x += 5;
console.log(x < 20);

// Strict vs lose comparison operator - based on value/type
console.log(15 === x);
console.log(15 == x);

// Object declaration
let person = {
    name: 'Mosh',
    age: 30 
};

// Dot Notation to change value of object property
person.name = 'John';

// Array literal
let selectedColors = ['red', 'blue'];
selectedColors[2] = '13';

// Function to perform a task, passing in a parameter
function green(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

// Calling a function, passing an argument
green('John', 'Smith');

// Logical Operators - && for AND, II for OR, ! for NOT EQUAL TO
let highIncome = false;
let highCreditScore = false;
let eligibleForLoan = highIncome && highCreditScore;
console.log('Eligible for Loan: ', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused ', applicationRefused);

// Bitwise Operators
// 1 = 00000001 = 8 bits, 1 byte
// 2 = 00000010 = 8 bits, 1 byte

console.log('Bitwise Operator:', 1 & 2); // Bitwise OR and AND

// if .. else conditional statement
let hour = 18;

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}
else if (hour >= 12 && hour < 18) {
    console.log('Good afternoon');
}
else {
    console.log('Good evening');
}

// switch .. case conditional statement
let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}

// for loops
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) console.log(i);
}

// do-while loops - Do while are executed at least once vs while loops are not
let p = 0;
do {
    if (p % 2 === 0) console.log(p);
    p++;
} while (p < 10);

// for-in Loop - to iterate over properties of an object
const people = {
    name: 'Arjun',
    age: 34
};

for (let value in people) {
    console.log(value, people[value]);
}

// for-of loop - to iterate over elements in an array
let colorArray = ['red', 'green', 'blue'];

for (let color of colorArray) {
    console.log(color);
}

// FizzBuzz exercise
let output = fizzBuzz(7);
console.log(output);

function fizzBuzz (input) {
    if (typeof input !== 'number') 
        return NaN;
    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';
    if (input % 3 === 0)
        return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    return 'This dont work boy';
}

// Checkspeed exercise

console.log(checkSpeed(195));

function checkSpeed (input) {
    const speedLimit = 80;
    const pointIncrement = 5;
    let numPoints; 

    if (input <= speedLimit)
        return 'You are under the speed limit';
    else
        numPoints = Math.floor((input - speedLimit) / pointIncrement);
        if (numPoints >= 12)
            return 'License Suspended!';
        else return 'You got ' + numPoints + ' points';
}

// OOP - encapsulating similar properties and functions into an object
let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('Draw');
    }
};

circle.draw(); // If a function is part of an object, it is called a Method

// Factory Function
function createCircle(radius) {
    // Returning an object
    return { 
        radius,
        draw() {
            console.log('Factory Function');
        }
    };
}

// Calling the factory function
let circle1 = createCircle(1);
console.log(circle1);

// Constructor Function - uses this and new to declare and reference empty objects, mostly for existing OOP programmers - I will skip.
// Constructor Property - each object has a constructor property defined by default. It is used to create that object - i.e. number, string, boolean,e tc.
// Functions are Objects in JavaScript. Their properties and methods can be called via Dot notation.
// In JS, we have value types (Numbers, String, Boolean, Symbols, Undefined, Null) and reference types (Objects, Functions, Arrays)
// Primitives are copied by their value. Objects are copied by their reference. Objects reference a memory location where value is stored.

// Iterating on an Object
const circleIterate = {
    radius: 1,
    love: 2,
    display() {
        console.log('Display function');
    }
};

for (let key in circleIterate)
    console.log(key, circleIterate[key]);

// In operator inside an IF statement to detect properties within an Object
if ('radius' in circleIterate)
    console.log(`radius property existings inside circleIterate object`);

// Cloning an Object that has a pre-existing property called color

// Using Object's assign method to copy properties/methods into another Object
// const another = Object.assign({ color: 'yellow'}, circleIterate);

// Using spread operator to clone an object's properties and methods into another object
const another = { ... circleIterate};

console.log(another);

// Default objects in JavaScript include Math and String and Date - check out their properties and methods on the Internet
// Math objects have default methods such as finding max number, rounding, etc.
// String objects have default methods such as finding length, printing a certain number, includes, startsWith, toUpperCase, toLowerCase, trim, etc.
// String is both a primitive and an Objective, depending on how it is initialized
// In Strings, you can use escape notations for single quotes, double quotes, new line, carriage returns, etc.

// Literals
// Object literals are {}, string literals are '' or "", boolen literals are true or false
// Template literals are denoted by `` - you don't need escape notations when using these

// Address Exercise

// Defining address Object
const address = {
    street: '99 Rausch Street',
    city: 'San Francisco',
    zipCode: 94103
};

// Displaying each property of the address Object
for (let key in address) 
    console.log(key, address[key]);

