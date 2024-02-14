var fs1 = require("fs")

const data = "\nThis is updated File Text"


fs1.writeFileSync('./myFolder/myFile.txt',data,{flag: 'a'},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('written successfully');
    }
})