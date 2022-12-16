let http = require('http');
//Here I Am Using File system module
const fs=require("fs");
fs.writeFileSync('Server/Modules/FileSync.txt',"Core Module example,here we will creating a new file");

fs.appendFileSync('Server/Modules/FileSync.txt',' I have added this text at the end of the existing file')
let data=fs.readFileSync('Server/Modules/FileSync.txt','utf-8');
console.log(data);

//example 2 creating a Server 
http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("I Am Learning Node JS " + Date());
    res.write("\n"+JSON.stringify({name:'Arun Kumar',Age:20,Profession:'developer'}))
    console.log("Server is Running on http://localhost:8800"+Date());
    res.end();
} ).listen(8800);

