const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
    console.log(req.url, req.method);

    //sets header content, the response visible in the browser
    res.setHeader('Content-Type' , 'text/html');

    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>hello ,ninjas</p>');
    // res.write('<p>hello again, ninjas</p>');
    // res.end();

    //send different html pages
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;//it is normal code
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me'://again back to about page only.
            path += 'about.html';
            res.statusCode = 301;
            res.setHeader('Location','/about');
            break;
        default:
            path += 'error.html';
            res.statusCode = 404;
            break;
    }



    //sending data from the file to response of a server

    //  fs.readFile('./views/index.html',(err, data) => {
        fs.readFile(path,(err, data) => {
         if(err){
             console.log(err);
         }else{
             //res.write(data); wecan send data directly through end method also
             res.end(data);
         }
     })


});

server.listen(3000, 'localhost' , () => {
    console.log('listening for requests on port 30000');
});

// run the browser localhost:3000