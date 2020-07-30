const express = require('express')
const bodyParser = require('body-parser')
app = express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/', function(req, res){
  var today = new Date()
  currentDay = today.getDay()
  day = ""
  switch(currentDay){
    case 0:
      day = 'Sunday';
      break
   case 1:
    day = 'Monday'
    break
  case 2:
    day = 'Tuesday'
    break
  case 3:
    day = 'Wednesday'
    break
  case 4:
    day = 'Thursday'
    break
  case 5:
    day = 'Friday'
    break
  case 6:
    day ='Saturday'
    break
  default:
    console.log("Invalid value")
  }
  res.render('list',{day:day})
})

app.listen(3000,function(){
  console.log("Port up and running in port 3000")
})
