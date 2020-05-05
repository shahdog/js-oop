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

// Prototype members - adding a prototype method to the roundCircle object
roundCircle.prototype.draw = function() {
    this.move(); // instance/prototype members can be cross-referenced
    console.log('drawing as a prototype member');
}

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

// Constructor function for parent object (Shape)
function Shape(color) {
    this.color = color;

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