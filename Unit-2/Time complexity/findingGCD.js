function findingGcd(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a= temp;
    }
    return a;
}
console.log(findingGcd(12,9))

// time complexity= log(a,b)
// space complexity = O(1)