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
