// // Violating SRP
// class UserSettings {
//   user: User;

//   constructor(user: User) {
//     this.user = user;
//   }

//   changeEmail(newEmail: string) {
//     // logic to change the user's email
//   }

//   saveUserSettings() {
//     // logic to save user settings to a database
//   }
// }

// // Following SRP (Single Responsibility Principle)
// // Edit User properties
// class User {
//   email: string;
//   username: string;
//   password: string;

//   //initialize the properties to its default values
//   constructor(
//     emailInput: string,
//     usernameInput: string,
//     passwordInput: string
//   ) {
//     this.email = emailInput;
//     this.username = usernameInput;
//     this.password = passwordInput;
//   }

//   changeEmail(newEmail: string) {
//     this.email = newEmail;
//     return this.email;
//   }
//   changeUsername(newUsername: string) {
//     this.username = newUsername;
//     return this.username;
//   }
//   changePassword(newPassword: string) {
//     this.password = newPassword;
//     return this.password;
//   }
// }
// //temporarily store the User object in state in a new object
// const user1 = new User('tapha@test.com', 'tapha', 'safepassword'); // currently stored in memory
// const user2 = new User('rabia@test.com', 'rabia', 'safepassword');
// console.log(user1.email); // When not following SRP, do this. Output: tapha@test.com

// // interactions of the user with the database
// class UserPersistence {
//   instantiatedUser: User; //object should be of type "User", which itself can be of any type

//   constructor(user: User) {
//     this.instantiatedUser = user; //taphas profile
//   }

//   saveUser() {
//     // logic to save the user object to a database
//     //i wanna see the email
//     console.log(this.instantiatedUser.email);
//     console.log(this.instantiatedUser.username);
//   }
// }

// // we need to instantiate UserPersistance in order to use it
// // we created a new UserPersistance object with an argument of the new user object we made (user1)
// const userPersistence1 = new UserPersistence(user1);
// const userPersistence2 = new UserPersistence(user2);
// userPersistence1.saveUser(); //output: tapha@test.com; tapha
// userPersistence2.saveUser(); //output: rabia@test.com; rabia


// Violating SRP
class UserSettings {
  user: User;

  constructor(user: User) {
    this.user = user;
  }

  changeEmail(newEmail: string) {
    // logic to change the user's email
  }

  saveUserSettings() {
    // logic to save user settings to a database
  }
}

// Following SRP (Single Responsibility Principle)
// Edit User properties
class User {
  private email: string;
  private username: string;
  private password: string;

  //initialize the properties to its default values
  constructor(
    emailInput: string,
    usernameInput: string,
    passwordInput: string
  ) {
    this.email = emailInput;
    this.username = usernameInput;
    this.password = passwordInput;
  }

  changeEmail(newEmail: string) {
    this.email = newEmail;
    return this.email;
  }
  changeUsername(newUsername: string) {
    this.username = newUsername;
    return this.username;
  }
  changePassword(newPassword: string) {
    this.password = newPassword;
    return this.password;
  }
  // getters and setters are used to bypass the "private" access modifier (backdoor access)
  getEmail() {
    return this.email;
  }
  setEmail(newEmail: string) {
    this.email = newEmail;
  }
  getUsername() {
    return this.username;
  }
}
//temporarily store the User object in state in a new object
const user1 = new User('tapha@test.com', 'tapha', 'safepassword'); // currently stored in memory
const user2 = new User('rabia@test.com', 'rabia', 'safepassword');
//console.log(user1.email); // When not following SRP, do this. Output: tapha@test.com.

// interactions of the user with the database
class UserPersistence {
  instantiatedUser: User; //object should be of type object "User", which itself can be of any type
  static databaseName: string = 'ourDatabase'; //                       access modifier | name: | type  =  value
  // java/python/c -> static string databaseName = 'ourDatabase';       access modifier | type  | name  =  value
  private databasePassword: string = 'myPassword';

  constructor(user: User) {
    this.instantiatedUser = user; //taphas profile
  }

  saveUser() {
    // logic to save the user object to a database
    //i wanna see the email -> print email
    // console.log(this.instantiatedUser.email);
    // console.log(this.instantiatedUser.username);
    this.instantiatedUser.setEmail('shantanu@test.com'); //change all created objects' emails to this email
    console.log(this.instantiatedUser.getEmail()); // now we've changed it, let's get and print it
    console.log(this.instantiatedUser.getUsername());
  }
}

// we need to instantiate UserPersistance in order to use it
// we created a new UserPersistance object with a property of the new user object we made (user1)
const userPersistence1 = new UserPersistence(user1);
const userPersistence2 = new UserPersistence(user2);
userPersistence1.saveUser(); //output: tapha@test.com; tapha
userPersistence2.saveUser(); //output: rabia@test.com; rabia
//console.log(UserPersistence.user); //cannot access user as it is not Static
console.log(UserPersistence.databaseName);
//console.log(userPersistence1.databasePassword);

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

let randomNumber: number = 20;

// Create a class
class Person {
  private name: 'James'; // "private" works in typescript but not javascript
  age: number = 23; // making age as number only
  static height = '6ft'; // static - can be accessed without instantiation

  constructor(_name, _age) {
    // constructors are used to enhance the instantiation of an object -> Assign or pass values
    this.name = _name;
    this.age = _age;
    // this.age = this.age;
  }
  // Object will drink only if age >= 18, else he will be thrown out the bar
  //Method
  isDrinking() {
    //Check person age is above 18
    if (this.age >= 18) {
      console.log('mmm, this drink is nice');
    } else if (this.age < 18) {
      console.log("No, don't throw me out the bar!");
    }
  }
}

//instantiate an object (aka create 'new' object called Person1, will share attributes with Class 'Person')
const Person1 = new Person('Bob', 16); // James is now Bob in the dummyClass object instantiation. Instantiation and assignment of a value
console.log(Person1);
console.log(Person1.name);
console.log(Person1.age); // needs to be instantiated with 'this.age'
console.log(Person.height);
console.log(Person.age); //cannot see age as it is not static
//Call a method from inside the object (Using the '.')
Person1.isDrinking();

// Making modules are better for refactoring
const walkToJobCentre = (shoes = 'Timbs') => {
  return 'Take 200 steps with ' + shoes + ' on.';
};

const moveHouse = (home = "Mum's House") => {
  return 'She won the house, you now live at ' + home + '. RIP';
};

let myObject = {
  name: 'James',
  age: '23',
  height: '6ft',
  nationality: 'Mongolian',
  profession: 'Spy',
  maritalStatus: 'Divorced',
  walk: walkToJobCentre,
  move: moveHouse,
};

console.log(myObject.walk());
console.log(myObject.move('a bus shelter'));

// let : Locally Scoped within its context
// const : Cannot be reassigned

// const numberTen = 10;
// const numberTenArray = [10,11];

// const numberTenObject = {
//   number : 10,
//   number2 : 11
// };

// console.log(numberTen);
// //console.log(numberTen = 12);
// console.log(numberTenArray[0] = 12);
// //          [12, 11]
// console.log(numberTenObject.number = 12);
