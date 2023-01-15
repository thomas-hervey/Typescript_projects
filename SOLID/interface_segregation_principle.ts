// NOTE: “Many client-specific interfaces are better than one general-purpose interface.”

// BAD WAY: ONE INTERFACE
interface Character {
  shoot(): void;
  swim(): void;
  talk(): void;
  dance(): void;
}

class Troll implements Character {
  public shoot(): void {
    // some method
  }

  public swim(): void {
    // NOTE: a troll can't swim
  }

  public talk(): void {
    // NOTE: a troll can't talk
  }

  public dance(): void {
    // some method
  }
}


// MULTIPLE INTERFACES
interface Talker {
  talk(): void;
}

interface Shooter {
  shoot(): void;
}

interface Swimmer {
  swim(): void;
}

interface Dancer {
  dance(): void;
}

class Troll2 implements Shooter, Dancer {
  public shoot(): void {
    // some method
  }

  public dance(): void {
    // some method
  }
}