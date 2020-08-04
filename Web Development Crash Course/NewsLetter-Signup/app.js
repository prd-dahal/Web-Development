const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https')
app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get("/", function(req, res){
  res.sendFile(__dirname+"/templates/signup.html")
})
app.post("/", function(req, res){
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data ={
    members:[
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          FNAME:firstName,
          LNAME:lastName
        }
      }
    ]
  }

  const jsonData = JSON.stringify(data);
  const url = 'https://us17.api.mailchimp.com/3.0/lists/5bf3f946f9'
  const options ={
    method:'POST',
    auth:"pradeep:apikey"
  }
  const request = https.request(url, options, function(response){
    if(response.statusCode === 200){
      res.sendFile(__dirname+"/templates/success.html")
    }
    else{
      res.sendFile(__dirname+"/templates/failure.html")
    }
    response.on("data", function(data){
      // console.log(JSON.parse(data))
    })
  })
request.write(jsonData);
request.end();
});

app.listen(3000, function(){
  console.log("The server started at the port 3000")
})




//API key
// 2bab7e72458482bdc8d47798dcf385e9-us17

//audience
//
