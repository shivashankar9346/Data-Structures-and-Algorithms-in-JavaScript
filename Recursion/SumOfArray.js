function sumOfArray(arr,i = 0){
    if( i === arr .length ){
        return 0 ;
    }

   let  sum = arr[i]+sumOfArray(arr,i+1)

        return sum 
   

}
console.log(sumOfArray([1,2,3,4,5]));

