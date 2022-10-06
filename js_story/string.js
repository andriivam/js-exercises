// Task 1 (Write a function which receives two strings and returns them as one string.)
const addString = (string, string2) => {
  let result = string + " " + string2;
  return result;
};
console.log(addString("Hello", "World"));

// Task 2 (Write a function which receives a character in uppercase and prints it in lowercase)

const lowCase = (string) => {
  let result = string.toLowerCase();
  return result;
};
console.log(lowCase("HELLO"));

// Task 3 (Write a function which receives a string in lowercase and returns an uppercase sentence.)
const upCase = (string) => {
  let result = string.toUpperCase();
  return result;
};
console.log(upCase("hello"));
// Task 4 (Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe")
const reverseString = (string) => {
  let result = string.split(",");
  console.log(result[1] + " " + result[0]);
  return `${result[1]} ${result[0]}`;
};
console.log(reverseString("Doe, John"));

// Task 5 (Write a function which receives a sentence full of whitespace and returns it without the)

const remSpace = (string) => {
  let result = string.trim();
  return result;
};
console.log(remSpace("    hello there  "));
