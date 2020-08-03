const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/peopleDB', {useNewUrlParser:true,useUnifiedTopology: true})

const peopleSchema = new mongoose.Schema({
  name:String,
  age:Number
});

const People = mongoose.model('people',peopleSchema)
const people = new People({
  name:"Pradeep",
  age:22,
})
people.save()



// const fruitSchema = new mongoose.Schema({
//   name:String,
//   rating:Number,
//   review:String
// })
//
// const Fruit = mongoose.model("Fruit", fruitSchema);
//
// const fruit = new Fruit({
//   name:'Apple',
//   rating: 7,
//   review:'Preety Solid as a fruit'
// })
//
// fruit.save();
