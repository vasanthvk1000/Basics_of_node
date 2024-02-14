const fs = require("fs");

fs.rename('./myFolder/myFile.txt','./myFolder/newFileasync.txt', (err) => {
    if(err){
console.log(err)
    }
    console.log('File renamed successfully')
}) 