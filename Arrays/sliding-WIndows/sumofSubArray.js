

// let arr=[1,2,3,4,5,6,7,8]
// let k=4;

// function sumofSubArray(arr,k){
//     let maxsum=0;
//     for(let i=0;i<=arr.length-k;i++){
//        let  currentSum=0;
//         for(let j=i;j<i+k;j++){
//             currentSum+=arr[j]
//         }
//         maxsum=Math.max(maxsum,currentSum)
//     }
//     return maxsum
// }
// console.log(sumofSubArray(arr,k));  //time Complexity- O(n*k)  -bruteforec approch


// USing  sliding Window

function windowSliding(arr,k){
    let maxSum=0;
    let windowSum=0;
    for(let i=0;i<k;i++){
        windowSum += arr[i]
    }
    maxSum=windowSum;
    for(let i = k ; i < arr.length ; i++){
        windowSum = windowSum - arr[i-k] +arr[i]
        maxSum=Math.max(maxSum,windowSum)
    }
    return maxSum

}
console.log(windowSliding([1,3,4,5,6,7,8],3));

