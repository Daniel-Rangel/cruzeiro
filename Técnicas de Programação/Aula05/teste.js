const{createServer} = require('http');

let server = createServer(
    (request,response) => {
        response.writeHead(200 , {"content-type":"text/html"});
        response.write("<h1>meu saco</h1>");
        response.end();    
    }
);

server.listen(8000);

console.log("Projeto iniciado na porta 8000");
