const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/peopleDB', {useNewUrlParser:true,useUnifiedTopology: true})

const peopleSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    min:0,
    max:130,
    required:true
  }
});

const People = mongoose.model('people',peopleSchema)
const people = new People({
  name:"Pradeep",
  age:12

})
// people.save()

//UPDATE RECORD
// People.updateOne({name:"Ajay"},{age:30},function (err){
//   if(err){
//     console.log(err)
//   }else{
//     console.log("Updated Succesfully")
//     mongoose.connection.close()
//   }
// })

//DELETE RECORD
// People.deleteOne({name:"Ajay"}, function(err){
//   if(err){
//     console.log(err)
//   }else{
//     console.log("Succesfully deleted record")
//   }
// })
//  DELETE MULTIPLE RECORD
People.deleteMany({name:"Pradeep"}, function(err){
  if(err){
    console.log(err)
  }else{
    console.log("Deleted")
  }
})

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




People.find(function(err, peoples){
  if(err){
    console.log(err)
  }else{
    mongoose.connection.close()
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
