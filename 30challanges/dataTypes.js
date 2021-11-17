function main() {
  var i = 4;
  var d = 4.0;
  var s = "HackerRank ";
  // Declare second integer, double, and String variables.
  let first, second, third;

  first = parseInt(readLine());
  second = parseFloat(readLine());
  third = readLine();

  // var secondInteger = 3;
  // var secondDouble = 2.8;
  // var secondString = "is my favorite platform!";
  // Read and save an integer, double, and String to your variables.

  // Print the sum of both integer variables on a new line.
  console.log(i + first);
  // Print the sum of the double variables on a new line.
  console.log((d + second).toFixed(1));
  // Concatenate and print the String variables on a new line
  console.log(s + third);
  // The 's' variable above should be printed first.
}

main();