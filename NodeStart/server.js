//Server 
import http from 'http'; 
import url from 'url'; 

const server = http.createServer((req, res)=> {
    console.log("request : ",req);

    res.end("helloo from thee server!");
});

server.listen(8000,'127.0.0.1', ()=> {
    console.log('listening reequest on port 8000');
});



