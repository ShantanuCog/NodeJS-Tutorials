// ----------- Object Prototype Example ------------- //

// Create a string literal
const myString: string = 'hello';
console.log(myString);
console.log(typeof myString);
const stringType = typeof myString;

const letterArray = myString.split('');
console.log(letterArray);
console.log(typeof letterArray);

const newString1 = myString.slice(0, 4);
const newString2 = letterArray.pop();
console.log(newString1);
console.log(newString2);  // displays the letter that was popped out

// Get the prototype of the string wrapper object
const stringProto = Object.getPrototypeOf(myString);
console.log(stringProto === String.prototype); // true

// Get the prototype of String.prototype (i.e., the parent in the prototype chain)
const parentProto = Object.getPrototypeOf(String.prototype);
console.log(parentProto === Object.prototype); // true

// For visualization:
console.log("myString's prototype:", stringProto);
console.log("String.prototype's prototype:", parentProto);
