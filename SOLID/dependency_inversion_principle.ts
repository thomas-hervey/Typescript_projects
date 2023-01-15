// NOTE: “Depend upon abstractions, [not] concretions.”

// BAD WAY: INITIALIZE a class with two other class instances
class FrontendDeveloper {
  public writeHtmlCode(): void {
    // some method
  }
}

class BackendDeveloper {
  public writeTypeScriptCode(): void {
    // some method
  }
}

class SoftwareProject {
  public frontendDeveloper: FrontendDeveloper;
  public backendDeveloper: BackendDeveloper;

  constructor() {
    this.frontendDeveloper = new FrontendDeveloper();
    this.backendDeveloper = new BackendDeveloper();
  }

  public createProject(): void {
    this.frontendDeveloper.writeHtmlCode();
    this.backendDeveloper.writeTypeScriptCode();
  }
}

// BETTER WAY

// we create an interface called Developer. Since FrontendDeveloper and BackendDeveloper are similar classes, we depend on them on the Developer interface. Instead of initializing FrontendDeveloper and BackendDeveloper in a single way inside the SoftwareProject class, we take them as a list to iterate through them to call each develop() method.

interface Developer {
  develop(): void
}

class FrontendDeveloper2 implements Developer {
  public develop(): void {
    this.writeHtmlCode()
  }

  private writeHtmlCode(): void {
    // some method
  }
}

class BackendDeveloper2 implements Developer {
  public develop(): void {
    this.writeTypeScriptCode();
  }

  private writeTypeScriptCode(): void {
    // some method
  }
}

class SoftwareProject2 {
  public developers: Developer[]

  public createProject(): void {
    this.developers.forEach((developer: Developer) => {
      developer.develop()
    })
  }
}