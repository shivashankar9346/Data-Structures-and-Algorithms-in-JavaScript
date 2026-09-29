// function linearSearch(arr,key){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==key){
//             return `element found at index ${i} `
//         }
//     }
//     return "element not found"
// }

// const numbers=[2,1,3,0,5,6,7]
// let data=3;
// const result=linearSearch(numbers,data)
// console.log(result);


function linearSearch(arr,key){
    for(i=0;i<arr.length;i++){
        if(arr[i]==key){
            return `found at ${i}`
        }
    }
    return 'not found'
}
const students = ["Aisha", "Karan", "Meena", "Rahul", "Fatima"];
const nameToFind = "Rahul";
const result=linearSearch(students,nameToFind)
console.log(result);