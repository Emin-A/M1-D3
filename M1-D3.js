/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

/* WRITE YOUR CODE HERE */
// const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
// const user = {
//   name: "Emin",
//   surname: "Avdovic",
//   email: "eminavdovic@gmail.com",
//   age: 30,
// };

// console.log(user);

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

/* WRITE YOUR CODE HERE */
// for this part o work , disable in exercise 2 console.log(user) !

// user.driversLicense = "yes"; // change this to "yes" or "no" for different result
// console.log(user);

// if (user.driversLicense === "yes") {
//   console.log((user.driversLicense = "Drivers license exist!"));
// } else if (user.driversLicense === "no") {
//   console.log("Drivers license does not exist!");
// }

/* EXERCISE 4
Remove from the previously created object the age
*/

/* WRITE YOUR CODE HERE */
// for this part o work , disable in exercise 2 and exercise 3 console.log(user) !
// delete user.age;
// console.log(user);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/
/* WRITE YOUR CODE HERE */
// const user1 = {
//   name: "John",
//   surname: "Travolta",
//   email: "travolta@gmail.com",
//   age: 66,
// };
// console.log(user1);
// if (user1.email !== user.email) {
//   console.log("Different email!");
// } else {
//   console.log("Same email!");
// }
// I could have chosen console.log(user1.email !== user.email) but i used the if statement to compare both objects;
/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */
//Attempt No.1:

// const totalShoppingCart = 60;

// if (totalShoppingCart >= 50) {
//   console.log("Free Shipping!");
// } else {
//   console.log("Costs 10€ !");
// }

//Attempt No.2:

// const totalShoppingCart = 60;

// for (let totalShoppingCart = 0; totalShoppingCart <= 50; totalShoppingCart++) {
//   if (totalShoppingCart >= 50) {
//     console.log("Free Shipping!");
//   } else {
//     console.log("Costs 10€ !");
//   }
// }

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

/* WRITE YOUR CODE HERE */

// let totalShoppingCart = 60;

// for (let totalShoppingCart = 0; totalShoppingCart <= 50; totalShoppingCart++) {
//   if (totaShoppinCart % 20 ) {

//   }
// }

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

/* WRITE YOUR CODE HERE */
const car1 = {
  brand: "Audi",
  model: "Q7",
  licensePlate: "URL8T",
};
const car2 = Object.assign({}, car1, { licensePlate: "URL89" });
const car3 = Object.assign({}, car1, { licensePlate: "URL69" });
const car4 = Object.assign({}, car1, { licensePlate: "URL12" });
const car5 = Object.assign({}, car1, { licensePlate: "URL07" });
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

/* WRITE YOUR CODE HERE */
let carsForRent = [car1, car2, car3, car4, car5];

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

carsForRent.pop();
carsForRent.shift();
console.log(carsForRent);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

/* WRITE YOUR CODE HERE */
console.log(
  carsForRent[0].brand +
    " -- " +
    carsForRent[0].model +
    " -- " +
    carsForRent[0].licensePlate
);

console.log(
  carsForRent[1].brand +
    " -- " +
    carsForRent[1].model +
    " -- " +
    carsForRent[1].licensePlate
);

console.log(
  carsForRent[2].brand +
    " -- " +
    carsForRent[2].model +
    " -- " +
    carsForRent[2].licensePlate
);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

/* WRITE YOUR CODE HERE */
const carsForSale = [car2, car3, car4];
let totalCars = [carsForSale, carsForRent];

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

/* WRITE YOUR CODE HERE */
console.log(carsForSale);

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
