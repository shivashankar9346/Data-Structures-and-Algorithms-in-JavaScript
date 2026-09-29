
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target)
                return true;
        }
    }
    return false;
}

console.log(twoSum([1, 2, 3, 4,5,6], 11));


function twoSum(arr,target){
    let left=0;
    let right=arr.length-1;
    
    while(left<right){
        let sum= arr[left]+arr[right];
        if(sum === target){
            return true;
        }else if(sum<target){
            left++
        }else{
            right--
        }
    }
    return false;

}
console.log(twoSum([1, 2, 3, 4, 5, 6], 11)); 
