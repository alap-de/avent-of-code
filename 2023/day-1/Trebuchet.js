/*
THE PROBLEM:

--- Part One ---
The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values?


--- Part Two ---
Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

Equipped with this new information, you now need to find the real first and last digit on each line. For example:

two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values?
*/

const { readFileSync } = require("fs");

const numMap = {
  one: "o1e",
  two: "t2o",
  three: "t3e",
  four: "f4r",
  five: "f5e",
  six: "s6x",
  seven: "s7n",
  eight: "e8t",
  nine: "n9e",
};

/**
 * Replaces words in a string with their corresponding values.
 * The words can be reused. for example 'oneight' will be replaced with '18'.
 *
 * @param {string} str - The input string to be modified.
 * @return {string} The modified string with words replaced.
 */
const replaceWords = (str) => {
  for (let key of Object.keys(numMap)) {
    str = str.replaceAll(key.toString(), numMap[key].toString());
  }

  return str;
};

/**
 * Calculates the sum of all elements in an array.
 *
 * @param {Array} arr - The array of numbers.
 * @return {number} The sum of all elements in the array.
 */
const sum = (arr) => arr.reduce((a, b) => a + b, 0);

/**
 * Parses a line and returns the first and last number in the line.
 *
 * @param {string} line - The line to parse.
 * @return {number} The first and last number in the line.
 */
const parseLine = (line) => {
  const allNums = line.replaceAll(/[a-zA-Z]/g, "");
  return Number(`${allNums[0]}${allNums[allNums.length - 1]}`);
};

/**
 * Parses the given text and returns an array of parsed lines.
 *
 * @param {string} text - The text to be parsed.
 * @return {Array} An array of parsed numbers from the lines.
 */
const parseText = (text) => {
  const lines = text.split("\n");
  return lines.map((line) => parseLine(line));
};
const data = readFileSync("./input.txt", "utf8");

// Part 1 solution
console.log(sum(parseText(data)));
// Part 2 solution
console.log(sum(parseText(replaceWords(data))));
