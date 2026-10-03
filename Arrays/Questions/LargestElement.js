function LargestElement( arr){
    let largest = arr[0]

    for ( let i=0;i<arr.length;i++){
        if( arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest;
}
console.log(LargestElement([5,3,6,8,7,12,2]));
