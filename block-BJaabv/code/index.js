// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(puppyAge) {
  return `Dog Age is ${puppyAge * 7}`;
}
calculateDogAge(2);
// function calculateDogAge(age) {
//   const puppyAge = 7;
//   return puppyAge * age;
// }
// calculateDogAge();

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age, movies) {
  const MAX_AGE =40;
  return `total movies are in ${(MAX_AGE - age) * 4 *12 *movies}`;
  
}
calculateMoviesToWatch(12,3)
/*
function calculateMoviesToWatch(age, noOfMovie) {
  const MAX_AGE = 40;
  let totalNumberOfMovies =
   (MAX_AGE - age) * 12 * 4 * noOfMovie;
  return totalNumberOfMovies;
}
console.log(calculateMoviesToWatch(70,4));
VM2908:8 1920
*/


/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(tempcelsius) {
  return `temperature is fahrenheit is ${(tempcelsius * 9)/5 + 32} degree F`;
  
}
celsiusToFahrenheit(37.5);
// different style
// function celsiusToFahrenheit(temperatureInCelsius) {
//   const div1 = 9;
//   const div2 = 5;
//   const add = 32;
//   return (celsiusToFahrenheit * div1) / div2 +add;
// }
// celsiusToFahrenheit(37.5);
// 99.5
// function celsiusToFahrenheit(temperature) {
//   return (temperature * 9) / 5 + 32 ;
// }
// console.log(celsiusToFahrenheit(37.5));
/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function celsiusToFahrenheit() {
  // Your code goes here
}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow() {
  // Your code goes here
}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN() {
  // Your code goes here
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN() {
  // Your code goes here
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here

/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min() {
  // Your code goes here
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck() {
  // Your code goes here
}
