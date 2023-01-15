// NOTE: “Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.”

// BAD WAY: NOT SUBSTITUTION

// The Square class extends the Rectangle class. But as we can see, this extension doesn’t make any sense because we changed the logic by overwriting properties width and height.
class Rectangle {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  public _width: number;
  public _height: number;

  constructor(width: number, height: number) {
    super(width, height);

    this._width = width;
    this._height = height;
  }
}

// SUBSTITUTION

// So instead of overwriting, we remove the Square class and bring its logic to the Rectangle class w/o changing its purpose.
class Rectangle2 {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }

  public isSquare(): boolean {
    return this.width === this.height;
  }
}