@classDecorator
class Boat {
	@testDecorator
	color: string = 'red'

	get formattedColor(): string {
		return `This boat color is ${this.color}`
	}

	@logError('Oops, boat was sunk')
	pilot(@parameterDecorator speed: string): void {
		if (speed === 'fast') {
			console.log('swish')
		} else {
			throw new Error()
		}
	}
}

function classDecorator(constructor: typeof Boat) { // reference to constructor function
	console.log(constructor)
}

function parameterDecorator(target: any, key: string, index: number) {
	console.log(key, index)
}

function testDecorator(target: any, key: string) {
	console.log(target)
	console.log(key)
}


function logError(errorMessage: string) {
	return function (target: any, key: string, desc: PropertyDescriptor): void {
		const method = desc.value

		desc.value = function() {
			try {
				method()
			} catch (e) {
				console.log(errorMessage)
			}
		}
	}
}

const boat = new Boat()
boat.pilot('fast')
