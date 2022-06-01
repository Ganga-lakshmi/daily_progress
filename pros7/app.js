const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

////register view engine
app.set('view engine' , 'ejs');

//listen for requests

app.listen(3000);
// app.use((req, res, next) =>{
//     console.log('new request made:');
//     console.log('host', req.hostname);
//     console.log('path',req.path);
//     console.log('method :' , req.method);
//     next();//otherwise the browser wont load still hand it dont move to next page or thing for this we use morgans 

// });

//middleware static files
app.use(express.static('public'));
app.use(morgan ('dev'));//dev or tiny


app.get('/',(req, res) =>{
    //res.send('<p>home page</p>');
    //res.sendFile('./views/index.html', {root:__dirname});//same pros6 directory
  
  const blogs = [
      {title: 'Blogs are awesome' , snippet:'Lorem ipsum dolor sit amet consedkjf'},
      {title: 'new Blogs arrived ' , snippet:'Lorem ipsum dolor sit amet consedkjf'},
      {title: 'mena found blog' , snippet:'Lorem ipsum dolor sit amet consedkjf'}
  ];
  
    res.render('index' , {title: 'Home', blogs});
});


// if next is moved to get(/) then it is redirected to render function so the below code not executes
// app.use((req,res,next)=>{
//     console.log('in the next middleware');
//     next();
// });


app.get('/about',(req, res) =>{
    //res.send('<p>home page</p>');
    //res.sendFile('./views/about.html', {root:__dirname});//same pros6 directory
    res.render('about', {title:'About'});
});

app.get('/blogs/create',(req,res) =>{
    res.render('create' , {title: 'create a Blog'});
})



// // redirects
// app.get('/about-us' , (req,res) => {
//     res.redirect('/about');
// });




//404
app.use((req, res) => {
    //res.sendFile('./views/error.html',{ root:__dirname})
    //res.status(400).sendFile('./views/error.html',{ root:__dirname});
    res.status(404).render('404', {title: '404'});
});