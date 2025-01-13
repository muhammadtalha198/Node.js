// build Api 


const url = require('url');
const http = require('http');
const fs  = require('fs');

const data = fs.readFileSync(`${__dirname}/data.json`,'utf8');         
const dataObject  = JSON.parse(data);


const server = http.createServer((req, res)=> {
    
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview'){

        console.log(req.url);
        res.end("This is the overview");
    }
    else if (pathName === '/product'){
        
        console.log(req.url);
        res.end("This is the product");
    }
    else if (pathName === '/api'){
            // console.log(productdata);
            res.writeHead(200,{'Conteent-type': 'application/json'});
            res.end(data);
    }
    else{
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
