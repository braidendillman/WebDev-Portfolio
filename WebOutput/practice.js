const fs = require('fs');
const http = require('http');

fs.writeFile('test.txt', "Hello", function(e){
    if(e) {
        throw e;
    }

console.log("File saved.");
});

fs.readFile('test.txt', 'utf8', function (e, data) {
    if (e) throw e;
    console.log(data);
});

http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
}).listen(8080);