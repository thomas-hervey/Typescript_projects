// GENERIC CLASSES

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

// generic class
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

// both calls will work
new ArrayOfAnything<string>(['a', 'b', 'c'])
new ArrayOfAnything(['a', 'b', 'c'])



// GENERIC FUNCTIONS

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

// generic function
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

// both calls will work
printAnything<number>([1,2,3])
printAnything([1,2,3])



// GENERIC CONSTRAINTS

class Car {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void
}

// generic constraint added via the interface extension
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

printHousesOrCars([1,2,3,4]) // will not work because it doesn't implement the interface
printHousesOrCars<Car>([new Car(), new Car()])
printHousesOrCars<House>([new House(), new House()])