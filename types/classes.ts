class Vehicle {

	// we can declare instance variables within the constructor
	constructor(public color: string) {
	}

	// can only be called by other methods in the class OR children classes
	protected honk(): void {
		console.log('beep')
	}
}

class Car extends Vehicle {

	constructor(public wheels: number, color: string) {
		super(color);

		this.wheels = wheels
	}

	// can only be called by other methods in the class
	private drive(): void {
		console.log('vroom')
	}

	// accessible by all methods
	public startDriving(): void {
		this.drive()
		this.honk()
	}
}

const car = new Car(4, 'red')
car.startDriving()
// car.honk() // won't work because honk is protected in the parent class
