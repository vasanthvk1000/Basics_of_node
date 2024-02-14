var http = require('http')
http.createServer((req,res)=>{
    res.write('hello vk');
    res.end();
}).listen(3000);

console.log('port on 3000')