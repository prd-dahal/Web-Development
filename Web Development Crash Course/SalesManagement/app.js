express = require('express')
bodyParser = require('body-parser')
ejs = require('ejs')

app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',function(req, res){
  res.render('home')
})

app.get('/about',function(req,res){
  res.render('about')
})
app.get('/contact',function(req,res){
  res.render('contact')
})






app.listen(3000,function(){
  console.log("App Started at port 3000")
})
