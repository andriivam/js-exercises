// Task 1 (In a cinema the full tariff is 10 €, the reduced one is 8 €. Write an algorithm which given a boolean indicating if the person can have a reduced tariff prints the price to pay.)

let tariffS = "You can watch movie for 8 € ";
let tariffA = "No discount for today";
let student = true;
if (student === true) {
  console.log(tariffS);
} else {
  console.log(tariffA);
}

// Task 2 (Write an algorithm which given 3 numbers finds the maximum.)

const array = [3, 230, 19];
const max = Math.max(...array);
console.log(max);

// Task 3 (Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none.)

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

let arrRandom = [];
for (let i = 0; i < 3; i++) {
  arrRandom[i] = getRandomInt();
}
console.log(arrRandom);

//  To count the occurrences of each element in an array:
const count = {};

for (const element of arrRandom) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
console.log(count);
// Show how many times you have repeated values in the array

function countDub(arrRandom, value) {
  var count = 0;
  arrRandom.forEach((v) => v === value && count++);
  return count;
}

console.log("You have repeated values :", countDub(arrRandom, 2));

// Printing duplicated values in the array

const set = new Set(arrRandom);

const duplicates = arrRandom.filter((item) => {
  if (set.has(item)) {
    set.delete(item);
  } else {
    return item;
  }
});

console.log(duplicates);

// Task 4 (Write an algorithm which given the number of a day returns its name)

const numberOfDay = (number) => {
  switch (number) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
  }
};

numberOfDay(2);

// Task 5 (A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price.)

const shop = (num) => {
  if (num > 0 && num <= 10) {
    let result = num * 0.12;
    console.log(result);
  } else if (num > 10 && num <= 30) {
    let result = 10 * 0.12 + (num - 10) * 0.11;
    console.log(result);
  } else if (num > 30) {
    let result = 10 * 0.12 + 10 * 0.11 + (num - 20) * 0.1;
    console.log(result);
  } else {
    console.log("You do not order any of prints");
  }
};
shop(40);
