let  getSum=add=(x, y)=> {
    let res=x+y;
    console.log("Sum of Two Number is:"+res);
  return x + y;
};

let getName=(name)=>{
  console.log("Your Name is "+name);
   return;
}

// module.exports=getSum;


module.exports={
getSum,
getName,
}
//or
// module.exports.getSum = getSum;
// module.exports.getName=getName;