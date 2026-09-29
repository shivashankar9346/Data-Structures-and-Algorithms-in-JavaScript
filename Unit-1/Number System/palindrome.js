// Palindrome of Numbers




function reverseNum(n){
    let number =n;
    let reversednumber = 0;
    while(n>0){
        let digit = n % 10;
        n=Math.floor(n/10)
        reversednumber = (reversednumber * 10) + digit;
    }
    if(reversednumber == number){
        console.log("palindrome")
    }else{
        console.log("!palindrome")
    }
}
reverseNum(12321)



// palindrome on Strings

// function stringPalindrome(str){
//    let  reversedString = '';
//    for(let i=0;i<str.length;i++){
//     let letter = str[str.length -i -1];
//     reversedString +=letter
//    }
//    if(str == reversedString){
//     console.log("palindrome")
//    }else{
//     console.log("!palindrome")
//    }
// }
// stringPalindrome("shiva")
// stringPalindrome("wow")



