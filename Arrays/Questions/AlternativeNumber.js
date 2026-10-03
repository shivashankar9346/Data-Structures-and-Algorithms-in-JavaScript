

//TIME COMPLEXITY -O(n)

function Alternative(arr) {
    let alternativeNumbers = []
    for (i = 0; i < arr.length; i += 2) {

        alternativeNumbers.push(arr[i])

    }
    return alternativeNumbers
}
console.log(Alternative([1, 2, 3, 4, 5, 6, 7]));
