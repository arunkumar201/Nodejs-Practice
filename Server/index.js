let getData=()=>{ 
return "My Name is Arun Kumar"
}
let a = "Hello World";
console.log(a);
let arr = [1, 2, 3, 4, 4, 5];
arr.map((i) => {
  console.log(i);
});
// console.log("Hi I am Arun Kumar!");


console.log(getData());


console.log(process.argv)
console.log(process.argv[0])
console.log(process.argv[2])
console.log(process.argv[3]);

const fs=require('fs');

// let data=process.argv[3];
// let path=process.argv[2];

// fs.writeFileSync(path,data);

let data=process.argv[4];
let mode=process.argv[2];
let name=process.argv[3];

if(mode=='add'){
    fs.writeFileSync(name,data);
}else if(mode=='remove'){
   fs.unlinkSync(name);
}else{
  console.warn("Invalid Operation ");
}





