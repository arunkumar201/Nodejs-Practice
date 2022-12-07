const fs=require('fs');

fs.writeFileSync('Server/Info.txt','Hello World I AM Arun Kumar ');
fs.appendFileSync('Server/Info.txt',`Currently I Am Exploring World of NodeJS `)
let res=fs.readFileSync('Server/Info.txt');
// fs.mkdirSync('MyNodejs')
// fs.writeFileSync('MyNodejs/bio.txt','My Name is Arun Kumar');

// fs.appendFileSync('MyNodejs/bio.txt', ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. ')

// let res1 = fs.readFileSync("MyNodejs/bio.txt",encoding='utf8');
// console.log(res1);
// fs.renameSync('MyNodejs/Bio.txt','MyNodejs/MyBio.txt');
// fs.unlinkSync('MyNodejs/MyBio.txt');
fs.rmdirSync('MyNodejs');