
// SPREAD OPERATORS

// const numbers = [1 ,2, 3,4]
// const nums = [9,8, 6,5]

// const finalNums = [numbers , nums]
// console.log(finalNums);

// const finalNumbers = [...numbers , ...nums]
// console.log(finalNumbers);


// REST OPERATOR

const numbers = [1 ,2, 3,4]
const nums = [9,8, 6,5]

const finalNumbers = [...numbers , ...nums]

function sum (...number){
    return number
}
console.log(sum(numbers, nums));
