const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/peopleDB', {useNewUrlParser:true,useUnifiedTopology: true})

const peopleSchema = new mongoose.Schema({
  name:String,
  age:Number
});

const People = mongoose.model('people',peopleSchema)
// const people = new People({
//   name:"Pradeep",
//   age:22,
// })
// const people2 = new People({
//     name:"Ranjana",
//     age:25
// })
// const people3 = new People({
//   name:"Ajay",
//   age:28
// })
// People.insertMany([people2,people3], function(err){
//   if(err){
//     console.log(err)
//   }else{
//     console.log('Successfully inserted the peoples')
//   }
// })
// people.save()
People.find(function(err, peoples){
  if(err){
    console.log(err)
  }else{
    peoples.forEach(function(items, index){
      console.log(items.name)
    })
  }
})


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
