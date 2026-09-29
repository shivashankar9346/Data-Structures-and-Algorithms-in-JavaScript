// prints true or false either our input value is prime or not

// function isPrime(num) {
//     if (num < 2) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPrime(20)); 
// console.log(isPrime(7)); 





// prints primenumbers 

// seive of Eratosthenes

function printAllPrime(n) {
    let Prime = new Array(n + 1).fill(true);
    Prime[0] = false;
    Prime[1] = false;
    for (let i = 2; i * i <= n; i++) {
        for (let j = i * i; j <= n; j += i) {
            Prime[j] = false;
        }
    }
    for (let i = 2; i <= n; i++) {
        if (Prime[i]) {
            console.log(i);
        }
    }
}
printAllPrime(20)
