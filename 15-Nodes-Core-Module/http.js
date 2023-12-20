const http=require('http');
const fs=require('fs');

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const { error } = require('console');

const server= http.createServer((request, response )=>{

     // Handle incoming HTTP requests here
     const url=request.url;
     console.log(url)
     if(url==='/'){
        fs.readFile('index.html', (error,file)=>{
            if(error){
                response.writeHead(500, { 'Content-Type': 'text/html' });
                response.end('<h1>Oups !!! We have probleme </h1>');
            }else{
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(file);
            }
        })
     }else  if(url==='/api/posts'){
        response.writeHead(200, { 'Content-Type': 'application /json' });
        response.end(JSON.stringify({success:true, data:users}));
     }else if(url==='/me'){
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1> About Me </h1>');
    } else{
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1> Page Not Found </h1>');
     }
});

server.listen(5000, ()=>{
    console.log('Server listen on port 5000...');
})