//Assignment 1:
//Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.
function num(number) {
    //check if the number is  greater than 1 it means its a positive number
    if (number > 0) {
        console.log(`${number} is a positive number`)
    }
    //check if the number is smaller than 0 it  means  its a negative  number
    else if (number < 0) {
        console.log(`${number} is a negative number`)
    }
    //if the number is not positive or not negative that mean its zero
    else {
        console.log(`${number} its zero`)
    }
}
num(10);

//Assignment 2:
//Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.

function factorialNum(number) {
    // Check if the input is a positive integer
    if (number < 0) {
        alert('Input must be a positive integer.')
    }
    // Initialize the factorial to 1
    let factorial = 1;
    // Calculate the factorial using a for loop
    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    console.log(`the factorial of ${number} is ${factorial}`)
}
factorialNum(10);

//Assignment 3:
//Write a JavaScript function that takes two numbers as parameters and returns the larger one.
function largerNumber(num1,num2){
    //If num1 is greater than num2, it console num1
   if(num1 > num2){
    console.log(`${num1} is the greatest`)
   }
   //otherwise, it console num2
   else{
    console.log(`${num2} is the greatest`)
   }
}
largerNumber(94,86)

//Assignment 4:
//Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

function isPalindrome(str){
    // Remove spaces, punctuation, and convert to lowercase
    let cleanStr = str.replace(/[^\w]/g, '').toLowerCase();
    //reverseing the cleanstr
    let revStr = cleanStr.split("").reverse().join("")
    // Check if the clean string is equal to its reverse
    if(revStr == cleanStr){
       console.log(`${str} is a palindrome`)
    }
    else{
        console.log(`${str} is not a palindrome`)
}
}
isPalindrome('A man, a plan, a canal, Panama')

//Assignment 5:
//Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

function isPrime(num) {
    if (num <= 1) return false; // 1 and numbers less than 1 are not prime
    if (num <= 3) return true;  // 2 and 3 are prime
    // Check if the number is divisible by any integer from 2 up to the square root of num
    const sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) {
        return false; // If divisible by any number, it is not prime
      }
    }
    return true; // If not divisible by any number, it is prime
  }
  function printPrimesUpToN(n) {
    if (n < 2) {
      console.log("There are no prime numbers less than 2.");
      return;
    }
    console.log("Prime numbers less than or equal to", n, ":");
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
  // Example usage:
  let n = 20;
  printPrimesUpToN(n);
  

//Assignment 6:
// Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
 
function calculator(num1, num2, operator) {
  if (operator === '+') {
    console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
  } else if (operator === '-') {
    console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
  } else if (operator === '*') {
    console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
  } else if (operator === '/') {
    if (num2 === 0) {
      return "Error: Division by zero is not allowed.";
    }
    console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);;
  } else {
    return "Error: Invalid operator. Please use one of '+', '-', '*', or '/'.";
  }
}
calculator(10, 2, '/')


//Assignment 7:
//Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.

function countVowels(str){
    //converting string into lowercase
   let lowercaseStr = str.toLowerCase();
   // Initialize a variable  counter 
   let counter = 0;
   //Loop through each character in the string and check if it is a vowel
   for (let i = 0; i < lowercaseStr.length; i++) {
    let  char = lowercaseStr[i];
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      counter++;
    }
}
    console.log(`vowels include in '${str}' are  = ${counter}`)
}
countVowels('abhishek sharma')


//Assignment 8:
//Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

function isPerfectNumber(num) {
    if (num <= 0) {
      return false; // Only positive integers can be perfect numbers
    }
    let sumOfDivisors = 0;
    for (let i = 1; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) {
        sumOfDivisors += i;
      }
    }
    if(sumOfDivisors === num){
        console.log(`${num} is a perfect number`)
    }
    else{
        console.log(`${num} is not a perfect number`)
    }
  }
  isPerfectNumber(6)

//Assignment 9:
//Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.

function fibonacciSeriesUpToNumber(num) {
    if (num <= 0) {
      console.log("Please enter a positive number.");
      return;
    }
    let fibSeries = [0, 1];``
    for (let i = 2; fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]  <= num; i++) {
      fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    console.log("Fibonacci series up to " + num + ": " + fibSeries.join(", "));
  }
  // Example usage:
  fibonacciSeriesUpToNumber(12);

  //Assignment 10:
//Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.

function multiplicationTable(num) {
    if (num <= 0) {
      console.log("Please enter a positive integer.");
      return;
    }
    console.log("Multiplication table for " + num + ":");
    for (let i = 1; i <= 10; i++) {
      console.log(`${num}  x ${i}  = ${(num * i)}`);
    }
  }
  multiplicationTable(3)
  
