mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/salesDB')

const salesSchema = new mongoose.Schema({
  quantity:{
    type:Number,
    required:true
  }
})
const purchaseSchema = new mongoose.Schema({
  quantity:{
    type:Number,
    required:true
  }
})

const productSchema = new mongoose.Schema({
 codeNo:{
    type:Number,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },

  sales:salesSchema,
  purchase:purchaseSchema
})
const Product = mongoose.model('Product',productSchema)
const Sales = mongoose.model('Sale',salesSchema)
const Purchase = mongoose.model('Purchase', purchaseSchema)

exports.insertNewProduct = function(codeNo, name, price, purchaseQuantity){
  console.log("I am here")
  const purchase = new Purchase({
    quantity: purchaseQuantity
  })
  purchase.save()

  const sales = new Sales({
    quantity:0
  })
  sales.save()

  const product = new Product({
    codeNo:codeNo,
    name:name,
    price:price,
    sales:sales,
    purchase:purchase
  })
  product.save()

}

exports.readAllProducts = function(callback){

   Product.find(function(err,products){
    if(err){
      console.log(err)
    }else{
       product = products
       
       return callback(product)
    }
  })

}
