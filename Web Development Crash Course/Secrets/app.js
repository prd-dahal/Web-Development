//jshint esversion:6
express = require('express')
ejs = require('ejs')
bodyParser = require('body-parser')
mongoose = require('mongoose')

app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/',function(req,res){
  res.render('home')
})

app.listen(3000, function(){
  console.log("Server started at port 3000")
})
