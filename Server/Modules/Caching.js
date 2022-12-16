let Stu=require("./CachingChild");
console.log(Stu.Stu1.getName());
Stu.Stu1.setName("Arun");
console.log(Stu.Stu1.getName())
console.log(__filename)
console.log(__dirname)

console.log(__filename+" "+ __dirname)