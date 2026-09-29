
// write a program to convert a decimal to Binary


// function decimalToBinary(n){
//     let binary =""
//     while(n >0 ){
//         let remainder = n % 2
//         binary = remainder + binary
//         n=Math.floor(n/2)
//     }
//     return binary;
// }
// console.log(decimalToBinary(14));



// Binary to Decimal

// function binaryToDecimal(binary){
//     let decimal = 0;
//     for(let i = 0;i<binary.length; i++){
//         let digit =Number(binary[binary.length -1 -i]);
//         decimal += digit * (2**i);
//     }
//     return decimal;
// }
// console.log(binaryToDecimal("1110"))


// Octal to Decimal



// function octalToDecimal(octalNum){
//     let decimal = 0;
//     for(let i = 0; i<octalNum.length; i++){
//         let  digit = Number(octalNum[octalNum.length -1 -i]);
//         decimal += digit * (8 ** i);
//     }
//     return decimal;
// }
// console.log(octalToDecimal("440")) 



// Decimal to Octal



// function decimalToOctal(n){
//     let octal="";
//     while(n>0){
//         let remainder = n%8;
//         octal = remainder + octal;
//         n=Math.floor(n/8)
//     }
//     return octal;
// }
// console.log(decimalToOctal("100"))






// Hexa to decimal


// function hexaTodecimal(hexa){
//     let decimal = 0;
//     for(i=0;i<hexa.length;i++){
//         let digit = parseInt(hexa[hexa.length -1 -i],16);
//         decimal += digit * (16**i);
//     }
//     return decimal;
// }
// console.log(hexaTodecimal("F234"))




// Decimal to Hexa



// function decimalToHexa(n){
//     let hexa = "";
//     const hexChars = "0123456789ABCDEF";
//     while(n > 0){
//         let remainder = n % 16;
//         hexa = hexChars[remainder] + hexa;
//         n = Math.floor(n / 16);
//     }
//     return hexa;
// }
// console.log(decimalToHexa(125));

