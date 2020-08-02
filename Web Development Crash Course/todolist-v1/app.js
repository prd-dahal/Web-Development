const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname +'/date.js')
app = express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
const items = ["Buy Food","Cook Food","Eat Food"]
const work_list = []
app.get('/', function(req, res){

  day = date.getDate()

  res.render('list',{listTitle:day, items:items})
})

app.post('/',(req,res) => {
  console.log(req.body)
  if(req.body.button ==='Work'){
    work_list.push(req.body.newItem)
    res.redirect('/work')
  }else{
  items.push(req.body.newItem)

  res.redirect('/')
}
})

app.get('/work', function(req,res){
  res.render('list',{listTitle:"Work", items:work_list})
})





app.listen(3000,function(){
  console.log("Port up and running in port 3000")
})
