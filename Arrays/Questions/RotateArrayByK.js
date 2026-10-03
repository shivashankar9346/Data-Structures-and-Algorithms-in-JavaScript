
//Time complexity - O(n)
//By Using INbuild functions


// function RotateArray(nums, k) {

//     let size = nums.length;

//     if (size > k) {
//         k = k % size
//     }

//     let rotateArray = nums.splice(size - k, size)
//     // console.log(rotateArray);

//     nums.unshift(...rotateArray)

//     return nums
// }
// console.log(RotateArray([1, 2, 3, 4, 5, 6, 7, 8], 3));



//WITHOUT USING INBUILD FUNCTIONS

function rotateArray(nums, k) {

    let size = nums.length

    if(size >k){
        k=k%size
    }

    for (let i = 0; i < size; i++) {

    }
}

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 3));