exports.getName = (name) => {
  return name;
};
let getMul=(a, b)=> {
return a*b;
}

let getDiv=(a, b)=> {
return (a / b).toFixed(4);
}
let getAdd=(a, b)=> {
  return a+b;
}



// module.exports.getMul=getMul;
// module.exports.getAdd=getAdd;
// module.exports.getDiv=getDiv;
module.exports={
  getMul,
  getAdd,
  getDiv,
}
