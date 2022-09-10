/**
 * This file briefly explains how to declare a function
 * in javascript
 *
 * create by: @tamagossi
 */

// -- 1. Syntax -- //

function greet(name) {
	return `Hello, ${name}`;
}

const sapa = function (name) {
	return `Hello, ${name}`;
};

const insahada = (name) => {
	return `Hello, ${name}`;
};

// -- 2. Treat as an constructor -- //

// This can be treat as an concstructor
function Car(color) {
	this.color = color;
}

const wuling = new Car('cyan'); // Will be return a new instance of Car

// Arrow function cannot be treated as an constructor
const CarEV = (isElectric) => {
	this.isElectric = isElectric;
};

const mitsubishi = new CarEV(false); // TypeError: Car is not a constructor

class EV {
	constructor(name) {
		this.name = name;
	}
}

// -- 3. arguemnts object -- //

// Will print array-like object containting the list of arguments
function doSomething() {
	console.log(arguments);
}
myFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2}

function myRegularFunction() {
	const myArrowFunction = () => {
		console.log(arguments);
	};

	myArrowFunction('c', 'd');
}
myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }

const lakukanSesuatu = (...args) => {
	console.log(args);
};

lakukanSesuatu('a', 'b'); // logs ['a', 'b']

// -- 4. Return -- //

function return42() {
	return 42;
}

const return42 = () => 42;

// -- 5. 'this' keyword attachment -- //

class EV {
	constructor(name) {
		this.name = name;
	}

	logName() {
		console.log(this); // will EV instance

		setTimeout(function () {
			console.log(this); // Will log logName function
		}, 100);
	}

	ireunBulleojo = () => {
		console.log(this); // will EV instance

		setTimeout(function () {
			console.log(this); // Will EV instance
		}, 100);
	};
}
