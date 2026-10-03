// const nums = [9,8,7,4,5,6]
// nums.sort((a, b) => a - b);
// console.log(nums);
// console.log(nums[nums.length-2]);




//BY USING IN BUILD METHOD WE ARE  DOING
// Array.from changes object into array
//When we use new Set array changes into object and if there are any duplicate elemets
// and gives only unique elements

//WE SHOULD CONSIDER ONLY THE WORST TIME COMPLEXITY

//Time complexity is O(nlogn)

// function SecondArray(arr){

//     const uniqueArray = Array.from(new Set(arr)); //O(n)

//     uniqueArray.sort((a,b)=>{   //O(nlogn)
//         return b-a
//     })

//     if(uniqueArray.length>=2){
//         return uniqueArray[1]
//     }else{
//         return -1
//     }
// }
// console.log(SecondArray([3,5,7,9,2,1]));



//WITHOUT BUILDIN FUNCTION
//Time complexity = O(n)

function SecondLargest(arr) {

    let largest = -1;
    let secondLargest = -1;

    for (i = 0; i < arr.length; i++) {  //O(n)

        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] != largest && arr[i] > secondLargest) {
            secondLargest = arr[i]

        }

    }
    return secondLargest;
}

console.log(SecondLargest([4, 6, 2, 8, 6, 9, 1]));
