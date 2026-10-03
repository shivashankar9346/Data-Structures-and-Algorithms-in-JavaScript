function RemoveDuplicate(arr) {

    let original = []

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < original.length; j++) { 

            if (arr[i] === original[j]) {

                found = true;
                break
            }
        }

        if (found === false) {
            original[original.length] = arr[i];
        }
    }
    return original
}
    console.log(RemoveDuplicate([2, 3, 4, 2, 5, 3]))
