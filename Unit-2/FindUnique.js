
let arr =[4,4,5,5,6,7,8,8,7]
function findUnique(arr){
    let unique=0;
    for(let num of arr){
        unique ^=num;
    }
    return unique;

}
console.log(findUnique(arr))