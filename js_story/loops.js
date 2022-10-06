// Task 1 (the numbers from 1 to n)

let num = 10;

for (let i = 1; i <= num; i++) {
  console.log(i + " ");
}

// The numbers from 1 to n in descending order
for (let i = num; i > 0; i--) {
  console.log(i + " ");
}

// The numbers from -n to n
for (let i = -10; i <= num; i++) {
  console.log(i + " ");
}

// The odd numbers from 1 to n
for (let i = 1; i <= num; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Task 2 (Write an algorithm which receives an random integer and prints from 0 to it.)

let N = Math.floor(Math.random() * 10);
console.log(N);

for (let i = 0; i <= N; i++) {
  console.log(i);
}

// Task 3 (Write an algorithm which throws a dice a given number of time and count the number of time a certain number is received)

let nbrOfTimes = 10
let nbrToCheck = 3
let dices = 0

for (let i = 0; i <= nbrOfTimes; i++){
    let dice = Math.floor(Math.random() * (7 - 1) + 1);
    console.log(dice);
    if (dice === nbrToCheck) {
        dices += 1;
    }
    
}
console.log(dices);



// Task 4 (Write an algorithm which prints all the even numbers from 0 to a given number.)

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Task 5 (Write an algorithm which verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself).)
