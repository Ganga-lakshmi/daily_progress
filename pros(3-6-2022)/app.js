const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//const { result } = require('lodash');

//express app
const app = express();

//connecy to mongo db
const dbURI ='mongodb+srv://ganga:xyx1234@clustertrain.lqni2.mongodb.net/nodecls?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser : true , useUnifiedTopology : true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err));


////register view engine
app.set('view engine' , 'ejs');

//listen for requests

//app.listen(3000); moved to db
// app.use((req, res, next) =>{
//     console.log('new request made:');
//     console.log('host', req.hostname);
//     console.log('path',req.path);
//     console.log('method :' , req.method);
//     next();//otherwise the browser wont load still hand it dont move to next page or thing for this we use morgans 

// });

//middleware static files
app.use(express.static('public'));
app.use(morgan ('dev'));//dev or tiny to get the details get /


//mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res) => {
//     const blog = new Blog({
//         title:'new blog 2',
//         snippet :'about my new blog',
//         body :'more about the new blog'
//     });
//     blog.save()
//     .then((result) => {
//          res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// })

// //adding finding all blogs(blog1,blog2) we added to atlas mongodb database
// app.get('/all-blogs' , (req,res) =>{
//     Blog.find()
//     .then((result) =>{
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })

// // lets find single blog, using blog id
// app.get('/single-blog', (req,res) =>{
//     Blog.findById('629a0adf1a71e38bcb92bcf1')
//     .then((result) =>{
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// })

//routes
app.get('/', (req, res) =>{
    //res.send('<p>home page</p>');
    //res.sendFile('./views/index.html', {root:__dirname});//same pros6 directory
  
res.redirect('/blogs');
});



app.get('/about',(req, res) =>{
    //res.send('<p>home page</p>');
    //res.sendFile('./views/about.html', {root:__dirname});//same pros6 directory
    res.render('about', {title:'About'});
});

//blog routes, the new blogs which we created are now visible at home page using find()
app.get('/blogs',(req,res) =>{
    Blog.find().sort({createdAt: -1})
     .then((result) => {
             res.render('index',{title:'All Blogs' , blogs: result})
        })
    .catch((err) =>{
            console.log(err)
        })
})

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