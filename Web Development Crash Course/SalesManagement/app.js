express = require('express')
bodyParser = require('body-parser')
ejs = require('ejs')
dbs = require(__dirname+'/database.js')

app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',function(req, res){
  res.render('home')
})

app.get('/about',function(req,res){
  // dbs.insertNewProduct(1,"Bucket",120,5)
  res.render('about')

})
app.get('/contact',function(req,res){
  dbs.readAllProducts(function(response){
    console.log(response)
  })
  res.render('contact')
})






app.listen(3000,function(){
  console.log("App Started at port 3000")
})
