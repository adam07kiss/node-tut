const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end(`<p>Welcome to our home page</p>
    <a href="/about">to about</a>
    <br>
    <a href="/error">to history</a>`);
} else if (req.url === '/about'){
    res.end(`<p>Here is our short history </p>
     <a href="/">back home</a>
     <br>
     <a href="/error">to history</a>`);
} else {
 res.end(`
 <h1>Oops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">back home</a>
<br>
<a href="/about">to about</a>
  `);
}
});

server.listen(5000)