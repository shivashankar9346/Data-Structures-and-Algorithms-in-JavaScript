// find the subarray with the biggest sum


//BRUTE FORCE Method

// function SubArray(arr){
//     let maxSum=arr[0];
//     let startIdx = 0;
//     let endIdx=0
//     for(let i=0;i<arr.length;i++){
//         let curSum=0;
//         for(let j =i; j<arr.length;j++ ){

//             curSum +=arr[j]
//             if(curSum> maxSum){
//                 maxSum=curSum
//                 startIdx=i;
//                 endIdx=j
//             }

//         }
//     }
//     return {maxSum,
//         subArray:arr.slice(startIdx,endIdx+1) }
// }
// console.log(SubArray([-2,1,-3,4,-1,2,1,-5,4]));


//Using Algorithm

function SubArray(arr) {
    let sum = 0;
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > max) {
            max = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return max
}
console.log(SubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));