// Module wrapper function
// (function(exports, require, module, __filename, __dirname) {});

class Person {
	constructor() {
		this.name = 'john doe'
		this.age = 30
	}

	greeting() {
		console.log(`my name is ${this.name} and i am ${this.age}`);
	}
}

module.exports = Person;
