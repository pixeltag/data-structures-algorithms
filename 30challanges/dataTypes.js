function main() {
  var i = 4;
  var d = 4.0;
  var s = "HackerRank ";
  // Declare second integer, double, and String variables.
  var secondInteger = 3;
  var secondDouble = 2.8;
  var secondString = "is my favorite platform!";
  // Read and save an integer, double, and String to your variables.

  // Print the sum of both integer variables on a new line.
  console.log(i + secondInteger);
  // Print the sum of the double variables on a new line.
    let lf = parseFloat(d);
    let dd = parseFloat(secondDouble);
  console.log((lf + dd).toFixed(1));
  // Concatenate and print the String variables on a new line
  console.log(s + secondString);
  // The 's' variable above should be printed first.
}

main();