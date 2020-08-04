express = require('express')
bodyParser = require('body-parser')
ejs = require('ejs')
dbs = require(__dirname+'/database.js')

app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',function(req, res){

  dbs.readAllProducts(function(response){
    res.render('home', {allProducts:response})
  })
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


app.post('/',function(req,res){
  // console.log(req.body)
  codeNumber = Number(req.body.codeNumber)
  name = req.body.name
  price = Number(req.body.price)
  purchase = Number(req.body.purchase)
  dbs.insertNewProduct(codeNumber,name,price,purchase)
  res.redirect('/')
})
app.get('/delete/:_id',function(req, res){
  _idProduct = (req.params._id)

  dbs.readAllProducts(function(allProduct){
    let product

    for (let i=0;i<allProduct.length;i++){
      if(allProduct[i]._id == _idProduct){
        console.log("Here")
        product = allProduct[i]
      }
    }
    console.log(product)
    _idPurchase= product.purchase._id
    _idSales = product.sales._id
    dbs.deleteProduct(_idProduct,_idPurchase,_idSales)
    res.redirect('/')

  })
})
app.get('/:_id/edit', function(req,res){
  _idProduct = req.params._id
  dbs.readAllProducts(function(allProduct){
    let product

    for (let i=0;i<allProduct.length;i++){
      if(allProduct[i]._id == _idProduct){
        console.log("Here")
        product = allProduct[i]
      }
    }
    console.log(product)
    _idPurchase= product.purchase._id
    _idSales = product.sales._id
    res.render('edit',{product:product})

  })
})


app.listen(3000,function(){
  console.log("App Started at port 3000")
})
