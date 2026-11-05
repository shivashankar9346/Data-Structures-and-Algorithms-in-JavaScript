function NonReaptingChar(str) {
    for (let i = 0; i < str.length; i++) {
        let j;
        for (j = 0; j < str.length; j++) {
            if (i !== j && str[i] === str[j]) {
                break
            }
        }
        if (j === str.length) {
           return str[i]

        }
    }
    return -1
}
console.log(NonReaptingChar("absdfs"));
console.log(NonReaptingChar("leetcode"));
console.log(NonReaptingChar("code"));
