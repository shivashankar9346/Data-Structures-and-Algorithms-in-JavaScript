const numbers = [1,2,3,4,5,6,7];

const newNums = numbers.reduce((prev , item )=>{
   
    return  prev + item;
 } , 0)
 console.log(newNums);