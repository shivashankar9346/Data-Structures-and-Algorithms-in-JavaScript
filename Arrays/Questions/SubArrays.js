function SubArrays(arr){

    let allSubArrays=[]


    for(let i =0;i<arr.length;i++){

        for(let j=i;j<arr.length;j++){
            let subArray =[]

            for(let k=i; k<=j;k++){
                subArray.push(arr[k])
            }
            allSubArrays.push(subArray)
        }
    }
    return allSubArrays
}
console.log(SubArrays([1,2,3,6]));
