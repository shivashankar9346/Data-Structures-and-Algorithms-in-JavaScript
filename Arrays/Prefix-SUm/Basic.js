function buildprefixSum(arr){
    let prefix = new Array(arr.length)
    prefix[0]= arr[0];

    for(let i = 1 ; i<arr.length;i++){
        prefix[i] = prefix[i-1]+arr[i]
    }
    return prefix;
}
console.log(buildprefixSum([2,4,1,3,5]));
