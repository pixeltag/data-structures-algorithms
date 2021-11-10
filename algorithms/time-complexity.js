/* TIME COMPLEXITY
 What makes an algorithm fast?
 Way to estimate an algorithm works

 SPACE COMPLEXITY
    - How much MEMORY is used?
 TIME COMPLEXITY
    - How many primitive operations are executed?

 */

var countChars = function (str) {
  // Linear
  var count = 0; // Constant
  for (let index = 0; index < str.length; index++) {
    // Linear
    count++; // Constant
  }
  return count;
};

countChars("Dance");
countChars("WalkingReallyFast"); // n = length of the string

let myList = ["hello", "Hola"];

myList.push("Bonjour"); // Constant;
myList.unshift(); // Constant;
myList.shift(); // linear
 


const isUnique = (arr) => {
  // Quadratic  O(n^2)
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    console.log(`~~~~~~~~~~~~~~ OTUER LOOP ~~~~~~~~~ i === ${i}`);
    for (let j = 0; j < arr.length; j++) {
      console.log(`~~~~~~~~~~~~~~ INNER LOOP ~~~~~~~~~ j === ${j}`);
      if (i !== j && arr[i] === arr[i]) {
        result = false;
      }
    }
  }
  return result;
};
