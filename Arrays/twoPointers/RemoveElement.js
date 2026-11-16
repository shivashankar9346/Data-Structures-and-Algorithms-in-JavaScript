function RemoveElement(arr, k) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        if (arr[left] === k) {

            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp
            right--

        } else {

          left++
        }
    }
    return arr
}
console.log(RemoveElement([0, 1, 2, 3, 4, 5, 6], 3));
