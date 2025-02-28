// OCP (Open-Closed Principle)

// // Violating OCP
// class Rectangle {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }
// }

// class AreaCalculator {
//   static calculateRectangleArea(rectangle: Rectangle): number {
//     return rectangle.width * rectangle.height;
//   }
// }

// Following OCP
interface Shape {
    calculateArea(): number;
  }
  
  class Rectangle implements Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  class Circle implements Shape {
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class AreaCalculator {
    static calculateArea(shape: Shape): number {
      return shape.calculateArea();
    }
  }