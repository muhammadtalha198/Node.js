// API Build

const url = require('url');
const http = require('http');

const server = http.createServer((req, res)=> {
    
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview'){

        console.log(req.url);
        res.end("This is the overview");
    }
    else if (pathName === '/product'){
        
        console.log(req.url);
        res.end("This is the product");
    }else{
        res.writeHead(404,{
            'Conteent-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>Page is not found<h1>');
    }

});

server.listen(8000,'127.0.0.1', ()=> {
    console.log('listening request on port 8000');
});
