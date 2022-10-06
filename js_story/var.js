// Task 1 (Write an algorithm which calculates:)
// add numbers

const addNum = (a, b) => {
  let result = a + b;
  return result;
};

console.log(addNum(2, 8));

// dived nums
const divNum = (c, d) => {
  let result = c / d;
  return result;
};
console.log(divNum(10, 5));
// the modulo of two inputed numbers
let f = 11;
let e = 4;
let fin = f % e;
console.log(fin);

// Task 2 (Write an algorithm which concatenates two phrases together.)
const finalWord = (firstWord, secondWord) => {
  let result = firstWord + " " + secondWord;
  return result;
};
console.log(finalWord("Hello", "World"));

// Task 3 (Write an algorithm which receives a price without VAT and returns the price with VAT with a rate of 21%.)

let sum = 100;
let sumVat = 0.21;
const vatCalc = (sum) => {
  let fullPrice = sum + sum * sumVat;
  return fullPrice;
};
console.log(vatCalc(sum));

let priceNoTva = Number(prompt("Enter your price"));
let fullPrice = priceNoTva + priceNoTva * 0.21;
console.log(fullPrice);

// Task 4 (Write an algorithm which receives the radius of a circle and calculate its surface.)

const surFace = (radius, p) => {
  let surface = radius * radius * p;
  return surface;
};
console.log(surFace(10, 3.14));

// Task 5 (Write an algorithm which receives the time of day in three different numbers, the hour, the minutes and the seconds and returns the number of seconds since midnight.)

const timeCount = (seconds, minutes, hours) => {
  let result = seconds + minutes * 60 + hours * 3600;
  return result;
};

console.log(timeCount(0, 10, 0));
