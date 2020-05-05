// JavaScript OOP course

// 4 pillars of OOP:
// 1. Encapsulation - When similar variables + functions are encapsulated into an Object. Objects have properties + methods. Encapsulated functions do not require parameters.
// 2. Abstraction - Hiding certain properties and methods of an Object to simpify interface + reduce impact of change.
// 3. Inheritance - Reduce redundant code, inherit properties and methods from other objects.
// 4. Polymorphism - To avoid procedural/serial execution of methods - refactor ugly switch/case statements.

// Defining objects - Avoid using object literal syntax if it has a method (behavior). Solution: Use factory or constructor function syntax instead.

// Object literal syntax
let round = {
    radius: 2,
    draw: function() {
        console.log('Draw - Object literal syntax');
    }
}

round.draw();


// Factory functions - those which return an Object
function createCircle(radius) {
    return {
        radius, 
        draw: function() {
            console.log('Draw - Factory Function');
        }
    };
}

const circle = createCircle(4); // creating an Object using factory function
circle.draw();

// Constructor functions - don't return an Object, they use a THIS keyword, use capital "C", preferred by OOP programmers
function Circle(radius) {
    let defaultLocation = { x: 0, y: 0 }; // local variable to Circle
    this.radius = radius;
    this.draw = function() {
        console.log('Draw - Constructor Function');
    };

    // using Object.defineProperty to define getters/setters for Circle object
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            defaultLocation = value;
            console.log('Value of default location has been resetted to ' + defaultLocation);
        }
    });
}

const another = new Circle(4); // creating an Object using constructor function
another.defaultLocation = 3; // setting value of default Location to a new value
another.draw();

// Constructor property - every object created in JS has a default constructor function (property). This constructor function is used to create that Object.

// Enumerating over properties in an Object - use the for in loop
for (let key in circle) {
    if (typeof circle[key] !== 'function') // exclude methods from this object
        console.log(key, circle[key]);
}

if ('radius' in circle) // to check whether a given property exists in the circle object
    console.log('Radius is in circle');

// Inheritance
// 1. Prototypes - There is no concept of classes in JS. Instead, prototype is a parent of an object. During execution, JS engine looks up the prototype chain to find properties. Prototypes themselves are objects.
// 2. Child object inherits all properties of the prototype. Each JS object inherits properties from a base JS object.
// 3. Using Inheritance - Keep code simple & stupid. Start with a few simple objects. If they begin sharing features, then create a parent object. Keep inheritance levels to 1. In complex cases, use Composition instead.

let childObject = {
    name: 'Arjun',
    age: 15
};

// Printing properties/methods of prototype object for childObject
console.log(Object.getPrototypeOf(childObject));

// Instance vs prototype properties & methods
function roundCircle(radius) {
    // Instance members
    this.radius = radius;
    this.move = function() {
        console.log('moving as an instance member');
    };
}

<<<<<<< HEAD
// Prototype members - adding a prototype method to the roundCircle object
roundCircle.prototype.draw = function() {
    this.move(); // instance/prototype members can be cross-referenced
    console.log('drawing as a prototype member');
}
=======
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

// Arrays
// Adding elements
const myArray = [3, 4];

// myArray.unshift('a', 'b'); // Shift method to insert elements at the beginning of the array
myArray.splice(2, 0, 'Hello'); // Splice method to insert elements at a specific index of the array
console.log(myArray);

// use includes to find elements in an array
console.log(myArray.includes(3));

// define arrays that store reference types/objects
const objArray = [
    { id: 1, name: 'Arjun'},
    { id: 2, name: 'Annie'},
    { id: 3, name: 'Nans'},
];

// passing call back methods to find property values in array of objects - I did not grasp call-back methods
const arrayResult = objArray.find(arrayResult => arrayResult.name === 'Nans');
console.log(arrayResult);

// to empty an array, set the length of the array to zero provided that array isn't referenced

// combining 2 arrays
const a = [1, 2, 3];
const b = [4, 5, 6];

const combined = [...a, ...b]; // using spread method to combine arrays a & b - can also use concat method
console.log(combined);

// iterating over elements inside an array - can also use a for of loop
a.forEach((aIndex, aParam) => console.log(aIndex, aParam));

// sorting an array
const courses = [
    { id: 1, name: 'English'},
    { id: 2, name: 'Hindi'},
];

courses.sort(function(courseA, courseB) {
    if (courseA < courseB) return -1;
    if (courseA > courseB) return 1;
    return 0;
});
>>>>>>> 7efa8da3e9c10418348b7ce0741a4fa4f049183e

const c1 = new roundCircle(1);
const c2 = new roundCircle(1);
console.log(c1.draw());

// use "for in" to enumerate over instance/prototype members of an object
for (let key in c1)
    console.log(key);

// Prototypical inheritance

// Function that sets a parent-child relationship between objects and resets the constructor function of the child.
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype); // add Parent as parent object of Child
    Child.prototype.constructor = Child; // resetting constructor function for Child
}

<<<<<<< HEAD
// Constructor function for parent object (Shape)
function Shape(color) {
    this.color = color;
=======
// exercise 1 - define a function to count # of occurrences of a value in an array
const defaultArray = [1, 2, 3, 4, 1, 1, 3, 1, 5];
const count = countOccurrences(defaultArray, 1);
console.log(count);
>>>>>>> 7efa8da3e9c10418348b7ce0741a4fa4f049183e

    Shape.prototype.duplicate = function() {
        console.log('Shape Duplicate');
    }
}

// Constructor function for child object (CircleObject)
function CircleObject(radius, color) {
    Shape.call(this, color); // calling superconstructor function to pass color
    this.radius = radius;
}

extend(CircleObject, Shape);
const s1 = new Shape;
const c3 = new CircleObject(3, 'green');

// Constructor function for another child object (SquareObject)
function SquareObject(size, color) {
    Shape.call(this, color); // calling superconstructor function to pass color
    this.size = size;
}

extend(SquareObject, Shape);
const sq = new SquareObject(15, 'blue');

// Hoisting - Declared functions are hoisted (raised to top of file) so they can be called before their definition. Expressed functions are not hoisted.

// Classes - are nothing but constructor functions underneathe the covers. Purpose is to acclimate classical OOP developer preferences. I am skipping ES6 classes because I do not anticipate using them.

class CircleClass {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance method
    draw() {
        console.log('Drawing with a Circle Class!')
    }

    // Static method - accessible at the Class level (i.e. CircleClass.parse)
    static parse(str) {
        // empty method
    }
}

const c4 = new CircleClass(3);
console.log(c4);

// Modules in JavaScript. The concept of modules was introduced in ES6 to achieve maintainability/modularity.
import {CircleModule} from './circle.js';
const c5 = new CircleModule(3);
c5.draw();

// Bundler - combines all JS files into a single JS file. Most popular bundler is a Webpack.