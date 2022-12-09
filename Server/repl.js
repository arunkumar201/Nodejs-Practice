let my_repl=require('repl')

let local =my_repl.start("Hi I Am Arun Kumar: ");
local.on("exit",()=>{
  console.log("Thank You ");
  process.exit(2);
})