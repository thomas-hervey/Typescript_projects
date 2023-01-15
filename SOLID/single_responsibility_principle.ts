// NOTE: “There should never be more than one reason for a class to change.”


// BAD WAY: NOT SINGLE RESPONSIBILiTY
class Book {
  public title: string
  public author: string
  public description: string
  public pages: number

  public saveToFile(): void {
    // some fs.write method
  }
}

// SINGLE RESPONSIBILITY

// Instead of having only one class, we have two classes, one for each purpose.
class Book2 {
  public title: string
  public author: string
  public description: string
  public pages: number
}

class Persistence {
  public saveToFile(book: Book2): void {
    // some fs.write method
  }
}