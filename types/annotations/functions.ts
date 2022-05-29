// arrow function
const add = (a: number, b: number): number => {
	return a + b
}

// function keyword
function divide(a: number, b: number): number {
	return a / b
}

// anonymous function
const multiply = function(a: number, b: number): number {
	return a * b
}

// doesn't return a value so we use 'void'
const logger = (message: string): void => {
	console.log(message)
}


// throwing an error will never actually reach the end of the function, so we return 'never'
const throwError = (message: string): never => {
	throw new Error(message)
}

// object argument with annotations
const todaysWeather = {
	date: new Date(),
	weather: 'sunny'
}

const logWeather = (todaysWeather: {date: Date, weather: string}): void => {
	console.log(todaysWeather.date)
	console.log(todaysWeather.weather)
}

logWeather(todaysWeather)

// destructuring object argument with annotations
const logWeather2 = ({ date, weather }: {date: Date, weather: string}): void => {
	console.log(date)
	console.log(weather)
}
