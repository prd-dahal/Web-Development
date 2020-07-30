const express = require('express')
const bodyParser = require('body-parser')
app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.get('/', function(req, res){
  res.send("Oh boy it worked")
})

app.listen(3000,function(){
  console.log("Port up and running in port 3000")
})
