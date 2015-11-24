var http = require("http");


var fs=require("fs");//file system
var request = require("request");

http.createServer(function (req, res){
     var content ='';
     /*
    fs.readFile("./demo.html", function (err, file)
    {
        content += file;
        res.end(content); //end Response
    })
    
    //另外一種執行方式，等待較久
    setTimeout(function () {
    res.end(content);
    }, 5000);
    */
     request("http://www.csie.isu.edu.tw/upload/80203/index.html", function (err, response, body) {
        content += body;
        res.end(content);
    });
   // res.end("welcome to my servers");
}).listen(3000);
