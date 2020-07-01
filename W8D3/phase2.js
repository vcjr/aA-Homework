// fizzBuzz
// 3 and 5 are magic numbers.

// Define a function fizzBuzz(array) that takes an array and returns a new 
// array of every number in the array that is divisible by either 3 or 5, but not both.
function fizzBuzz(array){
    newArr = []

    array.forEach(num => {
        if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0) ) {
            newArr.push(num)
        }
    });

    return newArr
}

console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,13,12,14,16,16,19]))
// isPrime
// Define a function isPrime(number) that returns true if number is prime. 
// Otherwise, false. Assume number is a positive integer.
function isPrime(num){
    if (num < 2) return false;

    for(let i = 2; i < num; i++ ){
        if (num % i === 0) return false;
    }

    return true;
}

//  console.log(isPrime(1)); // false

//  console.log(isPrime(2)); // true

//  console.log(isPrime(10)); // false

//  console.log(isPrime(15485863)); // true

//  console.log(isPrime(3548563)); // false

// // sumOfNPrimes
// // Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of
// //  the first n prime numbers. Hint: use isPrime as a helper method.
function sumOfNPrimes(num) {
    let sum = 0

    count = 0
    i = 0
    while (count != num){
        if(isPrime(i)) {
            count += 1
            sum += i
        }

        i++
    }

    return sum
}
 console.log(sumOfNPrimes(0)); // 0

 console.log(sumOfNPrimes(1)); // 2

 console.log(sumOfNPrimes(4)); // 17
 console.log(sumOfNPrimes(10000)); // 17