// Liskov Substitution Principle

// Following LSP (non-ideal path) - Substitution is not viable
class Bird {
    fly() {
      console.log("Can fly");
    }
  }
  
  class Duck extends Bird {}    // subclass?
  
  class Ostrich extends Bird {
    fly() {
      throw new Error("Cannot fly");
    }
  }
  
  // A better approach, respecting LSP and more efficiently subsituted
  interface FlyingBird {
    fly(): void;
  }
  
  interface NonFlyingBird {}
  
  class Duck implements FlyingBird {
    fly() {
      console.log("Duck flying");
    }
  }
  
  class Ostrich implements NonFlyingBird {
    // No fly method, respecting the principle
  }