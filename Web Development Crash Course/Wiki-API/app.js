express = require('express')
bodyParser = require('body-parser')
ejs = require('ejs')
mongoose = require('mongoose')

app = express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

mongoose.connect('mongodb://localhost:27017/wikiDB',{useNewUrlParser:true})
const articleSchema = new mongoose.Schema({
  title:String,
  content:String
})

const Article = mongoose.model('Article',articleSchema)

app.get('/articles', function(req,res){
  Article.find(function(err, foundArticles){
      if(err){
        console.log(err)
      }
      else{
        res.send(foundArticles)
      }
  })

})
app.post('/articles',function(req,res){
  console.log(req.body.title)
  console.log(req.body.content)
  const newArticle = new Article({
    title:req.body.title,
    content:req.body.content
  })
  newArticle.save(function(err){
    if(err){
      res.send(err)
    }
    else{
      res.send("success")
    }
  })
})
app.delete('/articles',function(req,res){
  Article.deleteMany(, function(err){
    if(err){
      res.send(err)
    }
    else{
      res.send("Deleted All Data")
    }
  })
})

app.listen(3000,function(){
  console.log("Server started at port 3000")
})
