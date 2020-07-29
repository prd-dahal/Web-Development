const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app  = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function(req,res){
   res.sendFile(__dirname+'/index.html')

});
app.post('/',function(req,res){
  const query = req.body.cityName;
  const apiKey = "c5c90aefefa04a2e5e34fe139fb5ced3"
  const unit = "metric"
  const url ="https://api.openweathermap.org/data/2.5/weather?q=" +query+ "&appid="+ apiKey+ "&units="+unit
  // console.log(url)
  https.get(url, function(response){
    console.log(response.statusCode);
    response.on('data',function(data){
      const weatherData = JSON.parse(data);
      const icon = weatherData.weather[0].icon;
      const temp = weatherData.main.temp;
      const weatherDesc = weatherData.weather[0].description;
      const imageURL ="http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      res.write("<p>The weather of "+ query + " is "+weatherDesc+"<\p>");
      res.write("<h1>The temperature of "+ query + " is "+ temp +" degree celcius</h1>");
      res.write("<img src="+imageURL+">");
      res.send();

    });
  });
});

app.listen(3000, function() {
  console.log("The server is running in port 3000")
})
