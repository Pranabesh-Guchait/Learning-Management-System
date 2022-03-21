//install express and call it 1
var express=require('express');
var app=express();


//install and call the body-parser  6
var bodyparser = require("body-parser");
const bodyParser = require("body-parser");
//install ejs and call it in 
app.set('view engine', 'ejs');
//
app.use(bodyParser.urlencoded({ extended: true }));
//input css file in this web-page from public folder
app.use(express.static("public"));



const user=require('./model/user')

//create mngoose and call it in here  7
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:login',{
    useNewurlparser: true,
    useUnifieldTopology:true
})




//create  home page 3
app.get('/',function(req,res){
    //res.send('hello world')
    res.render('home')
})
//create  login page 4
app.get('/login',function(req,res){
    //res.send('Login done')
    res.render('login')
})
//create  sign page 5
app.get('/submit',function(req,res){
    //res.send('registration done')
    res.render('submit')
})

const dbURI = 'mongodb+srv://Pranabe_sh:pranabesh777@cluster0.kl7ho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(8088))
  .catch((err) => console.log(err));

// create a surver  2
var port= 8088;
app.listen(port,function(){
    console.log("listen to port port");
})

