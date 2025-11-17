const express = require('express')
const app = express();


app.use(function(req, res, next){
    console.log("middleware is running");
    next()
})

app.get('/', function(req,res){
    res.send(" this is index page. are you sure??")
})


app.get('/profile', function(req,res){
    res.send("profile page")
})


app.get('/about', function(req, res, next){
    // res.send("This is about page");
    return next(new Error("Something went wrong"))
})


app.use(function(err,req, res,next){
    console.log(err.stack);
    res.status(500).send('Something broke')
})

app.listen(3000)