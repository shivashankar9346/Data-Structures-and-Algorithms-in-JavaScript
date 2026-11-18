//Reverse the sentence

function ReverseSentence(str){

    let splitString = str.trim().split(" ")

    let reverse =""
    for(let i =splitString.length-1;i>=0;i--){

        reverse +=splitString[i]+ (" ")

    }
    return reverse.trim( )
}
console.log(ReverseSentence( " I am learning javascript"));
