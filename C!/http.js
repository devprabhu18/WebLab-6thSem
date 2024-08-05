const http=require('http');
const port=1337;
const hostname='127.0.0.1'
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'ContentType':'plain/text'});
    res.end("Hello World");
});
server.listen(port,hostname,()=>{
    console.log(`The server is running at h port ${hostname}:${port}`);
});