
const http=require('http')

const server= http.createServer((req, res)=>{
    const url= req.url
    if(url=='/')
    {res.writeHead(200,{'content-type':'text/plain'})
    res.end('hello world')}
    else{
        res.writeHead(200, {'content-type':'text/plain'})
        res.end('no result found')
    }

})

server.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
})