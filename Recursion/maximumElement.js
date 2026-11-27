function findMax(arr, index=0){
    if(index === arr.length-1){
        return arr[index];
    }

    let max = findMax(arr , index + 1)

     if (arr[index] > max) {
        return arr[index];
    } else {
        return max;
    }
}
let arr = [10, 25, 5, 40, 15];

console.log(findMax(arr));