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

/////////////////////////// Requests Targetting a all articles //////////////////////////////////////
app.route('/articles')
  .get(function(req,res){
      Article.find(function(err, foundArticles){
          if(err){
            console.log(err)
          }
          else{
            res.send(foundArticles)
          }
      })
    })
  .post(function(req,res){
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
  .delete(function(req,res){
    Article.deleteMany(function(err){
      if(err){
        res.send(err)
      }
      else{
        res.send("Deleted All Data")
      }
    })
  })

/////////////////////////// Requests Targetting a specific article //////////////////////////////////////

app.route('/articles/:title')
  .get(function(req,res){
      requestedTitle = req.params.title
      Article.findOne({title:requestedTitle},function(err, foundArticle){
        if(err){
          res.send(err)
        }else{
          res.send(foundArticle)
        }
      })
    })
    .put(function(req,res){
      Article.update(
        {title:req.params.title},
        {title:req.body.title, content:req.body.content},
        {overwrite:true},
        function(err){
          if(err){
            res.send(err)
          }
          else{
            res.send("Updated Successfully")
          }
        }
      )
    })
    .patch(function(req,res){
      Article.update(
        {title:req.params.title},
        {title:req.body.title},
        {overwrite:false},
        function(err){
          if(err){
            res.send(err)
          }
          else{
            res.send("Updated Successfully")
          }
        }
      )
    })
    .delete(function(req,res){
      Article.deleteOne({title:req.params.title},function(err){
        if(err){
          res.send(err)
        }
        else{
          res.send("Successfully deleted " + req.params.title)
        }
      })
    })

app.listen(3000,function(){
  console.log("Server started at port 3000")
})
