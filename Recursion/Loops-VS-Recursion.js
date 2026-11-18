//loops VS Recusrion


//Using Loops
// function multiply(arr){
//     let product =1;
//     for(let i =0 ; i<arr.length;i++){
//         product *= arr[i]
//     }
//     return product;
// }
// console.log(multiply([1,2,3,4]));

//Using Recursion

function multiply(arr){
    console.log(arr);
    
    if(arr.length <=0){
        return 1;
    }else{
        return arr[arr.length-1] * multiply(arr.slice(0,arr.length-1))
    }
}
console.log(multiply([1,2,3,4]));

