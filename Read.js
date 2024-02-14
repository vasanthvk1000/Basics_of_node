var fs = require("fs")




fs.readdir('./myFolder', (err,files)=>{
    if(err){
        console.log(err)
        return;
    }else{
        console.log('Directory read successfully! here are the files:');
        console.group(files)
    }
})