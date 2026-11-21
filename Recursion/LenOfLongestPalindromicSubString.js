function checkPalindrome(str,left,right ){
    if(left>=right){
        return true;
    }

    if( str[left] !== str[right]){
        return false;
    }

    return checkPalindrome(str, left+1 , right-1)
}
function LongestPalindromeSubString(str){

    let maxLength=1;

    for(let left =0; left<str.length;left++){
        for (let right=left; right<str.length;right++){
            if(checkPalindrome(str,left,right)){
                let currentLength = right-left+1;
                 if (currentLength > maxLength) {
                    maxLength = currentLength;
                }
            }
        }
    }
    return maxLength;
}
console.log(LongestPalindromeSubString("madam"));
console.log(LongestPalindromeSubString("cbbd"));  
console.log(LongestPalindromeSubString("babad")); 
console.log(LongestPalindromeSubString("abcd"));
