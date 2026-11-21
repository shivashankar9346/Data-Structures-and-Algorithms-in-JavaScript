function meanOfArray(arr , i = 0 ){

    if( i===arr.length){
         return 0
    }

    let sum = arr[i] + meanOfArray(arr,i+1)

      if (i === 0) {
        return sum / arr.length;
    }

    return sum;

}
console.log(meanOfArray([1,2,3,4,5]));
