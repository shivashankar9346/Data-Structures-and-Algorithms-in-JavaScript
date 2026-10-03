
//TWO POINTERS TECHINQUE ONLY WORKS FOR SORTED ARRAYS


function RemoveDuplicate(arr) {

    let j = 0;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] !== arr[j]) {
            j++
            arr[j] = arr[i]
        }
    }
    let result = []

    for (let i = 0; i <= j; i++) {
        result[i] = arr[i]
    }
    return result;
}
console.log(RemoveDuplicate([1, 2, 2,3, 4, 4, 5, 6]));
