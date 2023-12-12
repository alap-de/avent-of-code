/*
THE PROBLEM:

The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values?
*/

const fs = require("fs");
const readline = require("readline");

const nums = [];
const rl = readline.createInterface({
  input: fs.createReadStream("Trebuchet_input.txt", { encoding: "utf8" }),
});

rl.on("line", (chunk) => {
  const numbers = chunk.match(/\d+/g);
  let allNums = numbers.join("");
  if (allNums.length == 1) {
    allNums += allNums;
  }

  let result = `${allNums.charAt(0)}${allNums.charAt(allNums.length - 1)}`;
  nums.push(Number(result));
});

rl.on("close", () => {
  const sum = nums.reduce((acc, val) => acc + val, 0);
  console.log(sum);
});

rl.on("error", (err) => {
  console.error(err);
});
