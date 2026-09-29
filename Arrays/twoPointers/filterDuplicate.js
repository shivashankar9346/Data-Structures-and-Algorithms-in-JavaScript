// function filterDuplicate(arr){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         if(!result.includes(arr[i]))
//             result.push(arr[i])
//     }
//     return result;
// }
// console.log(filterDuplicate([1,2,3,4,4]));



// let numbers =[1,2,2,3,4,5,5]
// function filterDuplicate(arr){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]!==arr[i+1]){
//                result.push(arr[i])
//         }
       
//     }
//     return result
// }
// console.log(filterDuplicate(numbers));



// let numbers =[1,2,3,4,3,2,3,4,5,6]
// function filterDuplicate(arr){
//     arr.sort((a, b) => a - b); 
//     let i=0;
//     for(let j=1;j<arr.length;j++){
//         if(arr[i]!==arr[j]){
//             i++;
//             arr[i]=arr[j]

//         }
//     }
//     return arr.slice(0,i+1)
// }
// console.log(filterDuplicate(numbers));



// using while loop

let numbers =[1,2,3,4,3,2,3,4,5,6]
function filterDuplicate(arr){
       arr.sort((a, b) => a - b); 
    let left=0;
    let right=1;
    while(right<arr.length){
        if(arr[left]===arr[right]){
            arr.splice(left,1)
        }else{
            left++;
            right++
        }
    }
    return arr;
}
console.log(filterDuplicate(numbers));






