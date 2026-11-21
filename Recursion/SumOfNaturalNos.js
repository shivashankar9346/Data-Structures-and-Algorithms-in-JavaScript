function SumOfNaturalNumbers(n){
    if(n === 0){
        return 0
    }

   return n + SumOfNaturalNumbers(n-1)
   

}
console.log(SumOfNaturalNumbers(10));
