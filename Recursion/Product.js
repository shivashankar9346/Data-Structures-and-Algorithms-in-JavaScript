function product(n1,n2){
if( n2 === 0){
    return 0
}

let prduct = n1 + product(n1, n2-1)
return prduct
}
console.log(product(5,6));
