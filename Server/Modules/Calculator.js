let fun=require('./Functions');
console.log(fun)
let Multiplication = fun.getMul(23, 433);
let Addition =fun.getAdd(23, 433);
let Division = fun.getDiv(23, 433);
let name=this.getName("Arun Kumar");
console.log("My Name: " + name)

// exports.getName=(name)=>{
//    return name;
// }

console.log("Multiplication of Two numbers is:" + Multiplication);
console.log("Addition of Two numbers is:" + Addition);
console.log("Division of Two numbers is:" + Division);