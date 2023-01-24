let path = require("path");
console.log(path.sep);

console.log(path.delimiter);

// let res=path.basename('/public/home/index.js');
// console.log(res)  //index.js
//if we pass extension parameter
// let res_ext = path.basename("/public/home/index.js",'.js');
// console.log(res_ext)  //index

// let res_ext = path.extname("/public/home/index.js", ".js");
// console.log(res_ext);  //.js

// let res= path.dirname("/public/home/index.js", ".js");
// console.log(res);

// /public/home

// console.log(path.extname("index.html")); //.html
// console.log(path.extname("app.js")); //.js
// console.log(path.extname("node.js.md")); //.md

let PathFormat = path.format({
  dir: "public/home/js",
  base: "app.js",
});
console.log(PathFormat);

let res1 = path.isAbsolute("Node_Modules");
console.log(res1);
let res2 = path.isAbsolute("/Intro/index.js");
console.log(res2);

let join_Path = path.join("public/home/", "js", "index.js");
console.log(join_Path);

let pathObj = path.parse('c:/node_modules/bin/js/app.js');
console.log(pathObj);

//normalize the Path
let Norm_Path=path.normalize('/nodejs/node_modules//js///app.js');
console.log(Norm_Path);
//resolving the Path
let Resolve_path = path.resolve('node_modules','html','js');
console.log(Resolve_path);