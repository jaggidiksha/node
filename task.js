const fs=require("fs")
const path=require("path")
const folder=path.join(__dirname,"folder")
for(let i=1;i<=5;i++){
const filepath= path.join(folder,"file"+i+".txt")
fs.writeFileSync(filepath,"hello")
}