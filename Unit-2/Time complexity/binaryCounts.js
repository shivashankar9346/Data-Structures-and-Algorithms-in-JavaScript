let count=0;
function countingOnes(n){
    while(n>0){
    if(n%2==1){
        count++;
    }
    n=Math.floor(n/2)
}
return count;
}
console.log(countingOnes(13))