const express = require('express')
const bodyParser = require('body-parser')
app = express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

let items = ["Buy Food","Cook Food","Eat Food"]

app.get('/', function(req, res){
  var today = new Date()
  currentDay = today.getDay()
  options ={
    weekday:"long",
    day:'numeric',
    month:'long'
  }
  var day = today.toLocaleDateString('en-US',options)

  res.render('list',{day:day, items:items})
})

app.post('/',(req,res) => {
  items.push(req.body.newItem)

  res.redirect('/')
})

app.listen(3000,function(){
  console.log("Port up and running in port 3000")
})
