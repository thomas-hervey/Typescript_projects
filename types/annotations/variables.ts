// variables
let apples: number = 5

let nothingMuch: null = null

let nothing: undefined = undefined

let now: Date = new Date()

let colors: string[] = ['red', 'green', 'blue']

// Classes
class Car {

}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number; } = {
	x: 10,
	y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i)
}


// NOTE: When to use type annotations (instead of Typescript doing automatic inferences)
// 1. Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: {x: number, y: number } = JSON.parse(json)

// 2. When we declare a variable one line and initialize it later
let words = ['red', 'blue', 'green']
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
	if(words[i] === 'green') {
		foundWord = true
	}
}

// 3. When type inference doesn't work.
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numberAboveZero = numbers[i]
	}
}




