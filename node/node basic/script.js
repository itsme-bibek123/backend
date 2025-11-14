const fs = require('fs');
const http = require('http')


// writeFile
// fs.writeFile("hey.txt", "hy there i m hauser", function(err){
//     if(err) console.error(err);
//     else console.log("done")

// })

// appendFile 

// fs.appendFile("hey.txt", "hello there", function(err){
//     if(err) console.error(err);
//     else console.log("done")
// })


// rename file 
// fs.rename("hey.txt", 'hello.txt', function(err){
//     if(err) console.error(err);
//     else console.log("rename done")

// })

// copyfile 
// fs.copyFile('hello.txt', './copy/hey.txt', function(err) {
//     if(err) console.error(err);
//     else console.log("copy file done")
// })

// make folder
// fs.mkdir('download', {recursive:true}, function(err){
//     if(err) console.error(err);
//     else console.log("done")
// })


// fs.writeFile('index.html', '<h2>Hello World ?? </h2>' , function(err) {
//     if(err) console.error(err);
//     else console.log("done")
// })


// fs.copyFile('index.html', './download/index.html', function(err){
//     if(err) console.error(err);
//     else console.log("copied")
// })


// fs.unlink('index.html', function(err){
//     if(err) console.error(err);
//     else console.log("removed")
// })



// create server 

const server = http.createServer(function(req,res) {
    res.end("hello world i am hauser");
    console.log("Server is running fine")
})

server.listen(3000)

