// 5! = 5*4*3*2*1

//RECURISVE APPROCH

// function Factorial(n){
//     if(n === 1 ){
//         return 1;
//     }
//     return n *Factorial(n-1)
// }
// console.log(Factorial(5));


//ITERATIVE APPROCH

function Factorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i
    }
    return factorial
}
console.log(Factorial(5));


