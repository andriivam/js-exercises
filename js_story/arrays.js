// Task 1 (Write an algorithm which prints everything in an array)
let studentIds = [1, 2, 3, 4, 5, 6];

for (studentId of studentIds) {
  console.log(studentId);
}

// Task 2 (Write an algorithm which receives an array of integers and prints its maximum)
console.log(Math.max(...studentIds));
const max = studentIds.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(max);

// Task 3 (Write an algorithm which receives an array of integers and prints its minimum.)
console.log(Math.min(...studentIds));
const minLong = studentIds.reduce((a, b) => Math.min(a, b), +Infinity);
console.log(minLong);

// Task 4 (Write an algorithm which receives an array of integers and prints the position of its minimum.)
const min = Math.min(...studentIds);
const index = studentIds.indexOf(min);
console.log(min);

// Task 5 (Write a algorithm which receives an array of integers and check if its ordered accidentally. Print true if the array is ordered, false if it’s not.)
const ordered = (studentIds) => {
  let secondIndex;
  for (let firstIndex = 0; firstIndex < studentIds.length; firstIndex++) {
    secondIndex = firstIndex + 1;
    if (studentIds[secondIndex] - studentIds[firstIndex] < 0) return false;
  }
  return true;
};
console.log("is array ordered ? " + ordered(studentIds));
