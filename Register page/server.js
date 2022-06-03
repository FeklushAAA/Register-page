const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response){
    console.log(require.method, request.url);
    if (request.url == '/styleReg.css') {
        const css = fs.readFileSync('styleReg.css', 'utf8');
        response.end(css);
    } else {
        const text = fs.readFileSync('register.html', 'utf8');
        response.end(text);
    }


});

server.listen(3000);
console.log('Server started');