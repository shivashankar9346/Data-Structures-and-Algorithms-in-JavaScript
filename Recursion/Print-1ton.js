function print1Ton(n){
      if (n === 0) {
        return;
    }
    print1Ton(n-1)
    console.log(n);
    
}
print1Ton(5)