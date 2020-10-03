// let myVar = 0       // let - to declare a variable.
// var                 // is pretty much the same as let but dont use it
// const               // Is much better modern use !!! You will use it alot!

//LET VS CONST  ( to change a value use let but to keep value use CONST!)
// let myVar = 0
// if you use the var for 1000 times and you owerwrite you
//you will mess things up because you have overwritten it everywhere!

// const myVar2 = 0
//Const will not be able to be overwritten that why its the BEST!
// USE IT ALWAYS !! And use 'Let' when you want to change.

// ------------------------------------ (learn ternary operator in spare time)
//TERNARY OPERATOR
// const age = 16;
//like an if'?' else':' statement

// const price = age > 18 ? "20$" : "15$";

// console.log(price);

//TRUTHY AND FALSY
//(undefined, null, 0, "", NaN ------> FALSY VALUES)

// const truthyOrFalse = 1 ? "truthy" : "falsy";

// console.log(truthyOrFalse);

//DOUBLE EQUALITY BS TRIPLE EQUALITY (always use === is safe, == not so safe)
// console.log(2 === "2");
// console.log(2 == "2");

//******OBJECTS****** */
// const user = {
//   name: "John", //porperites Key value pairs
//   surname: "Rambo",
//   age: 18,
//   "is Student": true, //"is Student" is just an example to have a space in name , it can be written like isStudent
// };

// console.log(user);
// console.log(user.age); //user["name"]
// console.log(user.name);
// console.log(user["name"]); // user.name  and user["name"] is same personal choice
// console.log(user["is Student"]);

// console.log(user.birthDate); //undefined

//You can now check an existence of something 'user.birthDate
// if (user.birthDate) {
//   console.log(user.birthDate);
// } else {
//   console.log("Birthdate does not exists!");
// }

// But if we use let user = {} , then later we can later modify

// let user = {
//   name: "John",
//   surname: "Rambo",
//   age: 18,
//   "is Student": true,
// };

// user = {}; // so with this now you can change stuff, which you couldnt with 'const'
// console.log(user);

// const user = {
//   name: "John",
//   surname: "Rambo",
//   age: 18,
//   "is Student": true,
// };
// CLONING OBJECTS
// const user2 = user   //DO NOT DO THIS TO CLONE OBJECTS
// Object.assign(user2, user); // DO THIS to CLONE

// DELETE PROPERTIES
// delete user.name;
// console.log(user);

// TO ADD A NEW OBJECT
// user.name = "George";
// console.log(user);

// SWITCH CASE
// this is normally very repetative so we use switch case to not repeat urselves.
// if (x === "value1") {
//     //do something
// } else if (x === "value2") {
//     //do something
// } else {
//     // something not covered before
// }

// Example SWITCH:
// easier method , and much more readable than else if else if etc.
const i = 6;

switch (i) {
  case 0:
    console.log("I is zero");
    break;
  case 1:
    console.log("I is one");
    break;
  case 2:
    console.log("I is two");
    break;
  case 3:
    break;
  case 4:
    break;
  case 5:
    break;
  case 6:
    break;
  default:
    console.log("I is something else");
    break;
}

// ************ARRAYS********************
// (collection of Data, number etc)
//Array of numbers
// const myArray = [1, 2, 3, 4, 5, 6, 7, 8]; // a container elements separated with a comma
// every element has its own INDEX from 0 to etc.
// access to a single element:
// console.log(myArray[0]); // nameOfTheArray[index].
// console.log(myArray[7]);
// console.log(myArray[8]);

//Array of strings:
// const arrayOfStrings = ["Hello", "Strivers", "!"];
// console.log(arrayOfStrings[1]);

//How many elements an array has, you can use :
// console.log(arrayOfStrings.length);

//ARRAY OF OBJECTS:
// const users = [
//   {
//     name: "John",
//     surname: "Rambo",
//   },
//   {
//     name: "Jean Claude",
//     surname: "VanDamme",
//     age: 60,
//   },
// ];

// console.log(users[0]);
// console.log(users[1].age);  // print a certain element of an object

//ARRAYS USEFUL METHODS (they have their own method)
// const myArray = [1, 2, 3];
//Add something to an array:
// myArray.push(4);
// myArray.push(4);
// myArray.push(4);
// myArray.push(4);
// myArray.push(4);
// myArray.push(4);
// myArray.push(4);

// console.log(myArray);
// To extract or removes last element:
// myArray.pop();
// console.log(myArray);

// return the last element:
// const lastElement = myArray.pop();
// console.log(myArray);
// console.log(lastElement);

// make some examples and try adding different methods ***

// search for an element inside of the array and return the index of it:
// const myArray = [1, 2, 3, 2, 6, 9];
// console.log(myArray.indexOf(2)); // it is index 1
// console.log(myArray.indexOf(6)); // it is index 4

// SLICE METHOD - returns only a section of an ARRAY.
// const myArray = [1, 2, 3, 2, 6, 9];
// console.log(myArray.slice(1, 4));

// const myArray = [1, 2, 3, 2, 6, 9];
// const slicedArray = myArray.slice(2, 4);
// console.log(slicedArray);
// console.log(myArray);

// CONCATENATE AN ARRAY with an Array
// const myArray1 = [1, 2, 3, 2, 6, 9];
// const myArray2 = ["I", "AM", "IRON", "MAN", "!"];
// console.log(myArray1.concat(myArray2));

//Example 2:
// const index = 2;
// const myArray = ["a", "b", "c", "d"];

// console.log(myArray.slice(0, index).concat(myArray.slice(index + 1))); // index + 1 means  2 + 1 = 3 , that is index number 3
// console.log(myArray.slice(index + 1));

// ************** LOOPS *********************
// FOR LOOPS (delaring and initializing a  variable, condition, increment by one)
// for (let i = 0; i <= 5000; i++) {
//   console.log(i);
// }

//inspect each element of an array
// const myArray = [0, 1, 2, 3, 4, 5, 6];

// for (let i = 0; i < myArray.length; i++) {
//   // from 0 to 6
//   console.log("Hey I'm printing element with index: ", i);
//   console.log("The element is: ", myArray[i]);
// }

//breaking the loop
// const myArray = [0, 1, 2, 3, 4, 5, 6];

// for (let i = 0; i < myArray.length; i++) {
//   // from 0 to 6
//   console.log("Hey I'm printing element with index: ", i);
//   console.log("The element is: ", myArray[i]);
//   if (myArray[i] === 4) {
//     break;
//   }
// }
