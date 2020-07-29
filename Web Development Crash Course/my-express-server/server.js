const express = require('express');

const app = express();

app.get("/", function(req,res){
  // console.log(request)
  res.send("<h1>Hello world</h1>")
});
app.get('/contact', function(req,res){
  res.send("Contact me at 9849354808")
});
 app.get('/about',function(req,res){
   res.send("My name is Pradeep. I love tea and code");
 })
app.get('/prd',function(req,res){
  res.send('this is pradeep\'s ')
})

app.listen(3000,function(){
  console.log('server started on port 3000');
});
