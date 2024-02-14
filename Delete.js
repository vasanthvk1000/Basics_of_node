const fs = require('fs');

fs.unlink('./myFolder/newFileasync.txt', (err) => {
    if(err){
        console.log(err)
        return

    }
    console.log('File deleted successfully')
})