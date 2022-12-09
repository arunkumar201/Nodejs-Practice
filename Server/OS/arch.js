const os = require("os");
console.log(os.arch());

console.log(os.platform())
console.log(os.arch());
console.log(os.release());
// console.log(os.cpus());

console.log(os.userInfo())
console.log(os.endianness())

console.log("os.loadavg(): \n", os.loadavg());
console.log("os.platform(): \n", os.platform());
console.log("os.release(): \n", os.release());
console.log("os.tmpdir(): \n", os.tmpdir());
console.log("os.totalmem(): \n", os.totalmem());
console.log("os.type(): \n", os.type());
console.log("os.uptime(): \n", os.uptime());  

console.log(os.freemem().toString());


console.log(os.endianness())

console.log(os.userInfo())