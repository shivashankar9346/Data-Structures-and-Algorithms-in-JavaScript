// function power(n){
//     if(n<0){
//         return false;
//     }else{
//         let value=Math.log2(n)
//         return Number.isInteger(value)
//     }
// }
// console.log(power(10))

// method 2

// function power(n){
//     if(n<=0) return false;

//     while(n>1){
//         if(n%2!==0){
//             return false;
//         }
//         n=n/2;
//     }
//     return true;
// }
// console.log(power(8))