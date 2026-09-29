// function sums(a,b){
//     return a+b;
// }
// console.log(sums(5,5))


// Print the all divisors of a number


// function divisors(n){
//     for(let i=1;i<=n;i++){
//         if(n%i === 0){
//             console.log(i)
//         }
//     }
// }
// divisors(12)




// let sum = "";                        //stores all iterations and print only last iteration
// function divisors(n){
//     for(let i=1;i<=n;i++){
//         if(n%i === 0){
//             sum += i + " ";
//         }
//     }
//     console.log(sum)
// }
// divisors(12);



// Check whether the number is prime or not


// function checkPrime(n){
//     let count = 0; 
//     for (let i=0;i<=n;i++){
//         if(n % i === 0){
//             count++;
//         }
//     }
//     if(count == 2){
//         console.log("isPrime")
//     }else{
//         console.log("!Prime")
//     }
// }
// checkPrime(24)
// checkPrime(17)



// Extracting the digit 



// function extract(n){
//     let str = n.toString();
//    for(let i =0;i<str.length; i++){
//     let digit = str[i];
//     console.log(digit)
//    }
// }

// extract(1234)




// For strings

// function extract(n){
//    for(let i =0;i<n.length; i++){
//     let digit = n[i];
//     console.log(digit)
//    }
// }

// extract("barabari")



// function extract(n){
//    while(n>0){
//     let digits = n%10;
//     console.log(digits)
//     n=Math.floor(n/10)
//    }
// }
// extract(1000)





// counting the digits

// function countDigits(n){
//     let count =0;
//     while(n>0){
//         let digit =n%10;
//         count++;
//         n=Math.floor(n/10)
//     }
//     console.log(count)

// }
// countDigits(12345)




// function countChar(str){
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         let char = str[i];
//         count++;
//     }
//     console.log(count);
// }
// countChar("shiva")




// printing Number In Reverse

// function reverseNum(n){
//     let reversednumber = 0;
//     while(n>0){
//         let digit = n % 10;
//         n=Math.floor(n/10)
//         reversednumber = (reversednumber * 10) + digit;
//     }
//     console.log(reversednumber);
// }
// reverseNum(12345)


// strings in reverse



function reverseString(str) {
    let reversedString = "";
    for (let i = 0; i < str.length; i++) {
        let letter = str[str.length - i - 1];
        reversedString += letter;
    }
    return reversedString;
}

console.log(reverseString("shiva"));







