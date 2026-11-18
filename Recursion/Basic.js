function Shiva(){
    return Shankar()
}
function Shankar(){
    return Naveen()
}
function Naveen(){
    return Sai()
}
function Sai(){
    return Akhil()
}
function Akhil(){      //base case
    return true
}
// console.log(Shiva());

function goToLunch(person){
    if(person ===5) return true
    console.log(person);
    
    return goToLunch(person+1)
    
}
console.log(goToLunch(1));
