function coPrime(a,b){
     while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    if(a === 1){
        return true;
        
    }else{
        return false;
}
   

}
console.log(coPrime(7,10))