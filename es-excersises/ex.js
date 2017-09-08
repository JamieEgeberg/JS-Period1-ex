//ex2
var evens = [2, 4, 6, 8];
odds = evens.map(v => v + 1);
pairs = evens.map(v => ({ even: v, odd: v + 1 }));
nums = evens.map((v, i) => v + i);

console.log(odds);
console.log(pairs);
console.log(nums);

// because scope

//ex3
//A
function Numbers(numbs) {

    this.nums = numbs;
    this.fives = [];
    this.nums.forEach((v) => {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    });//add ", this" here for ES5
}
var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbers.fives);

//B
var counter = {
    count: 0,
    inc: () => this.count++
}
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

// doesnt work with arrow function

//ex4
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;
console.log(message);

//ex5
//a
function f(x, y, ...rest) {
    return `Sum: ${x + y}.\n${rest.map((el, i) => `rest value ${i} is a:${el.constructor.name}`).join(",\n")}`
}
console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));
//b
var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
console.log(f(5, 2, ...restParams));
//c
var chars = [...f(5, 2, ...restParams)];
if (0) console.log(chars); //Makes hella long array of chars, if is so it doesnt print everytime

//ex6
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98
var person = {
    fName, lName, age
}

//ex7
//a
fName = "Kurt", lName = "Wonnegut";
[lName, fName] = [fName, lName]
console.log(`First: ${fName}, Last: ${lName}`);
//b
function getPerson() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender: "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}
var { lastName, phone } = getPerson();
console.log(lastName + phone);

//ex8
// const MyModule = require('./MyModule');
// console.log(MyModule(5, 2, ...restParams)); // should work, but doesnt...??

//ex9
//A
class Shape {
    constructor(color) {
        this._color = color;
    }
    getArea() {
        return undefined;
    }
    getPerimeter() {
        return undefined;
    }
    getColor() {
        return this._color;
    }
    setColor(color) {
        this._color = color;
    }
    toString() {
        return `This shape is ${this._color}.`
    }
}
var s = new Shape('red');
console.log(s.toString());
s.setColor('blue');
console.log(s.getColor());

//B
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    getArea() {
        return Math.pow(this._radius, 2) * Math.PI;
    }
    getPerimeter() {
        return 2 * Math.PI * this._radius;
    }
    getRadius() {
        return this._radius;
    }
    setRadius(radius) {
        this._radius = radius;
    }
    toString() {
        return `This Circle is ${this._color}, and radius ${this._radius}.`
    }
}
var c = new Circle('red', 5);
console.log(c.toString());
console.log(c.getArea());
console.log(c.getPerimeter());
c.setRadius(2);
console.log(c.getRadius());
//c

class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    getArea() {
        return 2 * Math.pow(this._radius, 2) * Math.PI + 2 * Math.PI * this._radius * this._height;
    }
    getPerimeter() {
        return undefined;
    }
    getVolume() {
        return super.getArea() * this._height;
    }
    getHeight() {
        return this._height;
    }
    setHeight(height) {
        this._height = height;
    }
    toString() {
        return `This Cylinder is ${this._color}, radius is ${this._radius} and height ${this._height}`
    }
}
var cyl = new Cylinder('red', 5, 3);
console.log(cyl.toString());
console.log(cyl.getArea());
console.log(cyl.getVolume());
cyl.setHeight(4);
console.log(cyl._height);
console.log(cyl.toString());
//d
class Cylinder2 extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this._height = height;
    }
    get area() {
        return 2 * Math.pow(this._radius, 2) * Math.PI + 2 * Math.PI * this._radius * this._height;
    }
    get perimeter() {
        return undefined;
    }
    get volume() {
        return super.getArea() * this._height;
    }
    get height() {
        return this._height;
    }
    setHeight(height) {
        this._height = height;
    }
    toString() {
        return `This Cylinder2 is ${this._color}, radius is ${this._radius} and height ${this._height}`
    }
}
var cyl2 = new Cylinder2('red', 5, 3);
console.log(cyl2.toString());
console.log(cyl2.area);
console.log(cyl2.volume);
cyl2.setHeight(4);
console.log(cyl2.height);
console.log(cyl2.toString());