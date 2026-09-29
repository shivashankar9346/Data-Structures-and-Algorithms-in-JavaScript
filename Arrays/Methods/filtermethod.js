
const numbers = [1,2,3,4,5,6,7];
const newNums = numbers.filter((item , index , array)=>{
   
    return item > 3;
 })
 console.log(newNums);