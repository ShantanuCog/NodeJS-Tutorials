// Violating ISP
interface Worker {
    work(): void;
    eat(): void;
  }
  
  class HumanWorker implements Worker {
    work() {
      // working
    }
  
    eat() {
      // eating during break
    }
  }
  
  class RobotWorker implements Worker {
    work() {
      // working more efficiently
    }
  
    eat() {
      // Robots do not eat, so this method is not useful
      throw new Error("Not implemented");
    }
  }
  
  // Following ISP
  interface Workable {
    work(): void;
  }
  
  interface Eatable {
    eat(): void;
  }
  
  class HumanWorker implements Workable, Eatable {
    work() {
      // working
    }
  
    eat() {
      // eating during break
    }
  }
  
  class RobotWorker implements Workable {
    work() {
      // working more efficiently
    }
  }