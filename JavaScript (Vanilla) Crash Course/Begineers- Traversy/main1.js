//variable
// let age = 30;
// console.log(age);

//constant
// const age = 30;
// console.log(age);

// Data type ( string numbers boolean , null , undefined, Symbol)

// const name = 'Pradeep Dahal';
// const age = 21;
// const rating = 4.1;
// const isCool = true;
// const x = null;
// const y = undefined;

// let z; // this is undefined as well

// console.log(typeof(isCool))
//Concate
// console.log("My name is "+ name+ " and my age is "+ age)


// console.log(`My name is ${name} and I am ${age}`);

// const s = 'Hello world'
//
// console.log(s.length)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0,5))
// console.log(s[1])
// let ar = (s.split(''))
// console.log(ar)


// const s = 'technology, computers, it, code';

// // console.log(s.split(','));
// const fruits =['apple', 'oranges', 'pears']
//
// //add at last
// console.log(fruits)
// fruits.push('mangoes')
// console.log(fruits)
// fruits.unshift('strawberries')
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// console.log(Array.isArray(fruits))
// console.log(Array.isArray('hello'))
// console.log(fruits.indexOf('oranges'))





// const person ={
//   firstName:'John',
//   lastName: 'Doe',
//   age:30,
//   hobbies:['music', 'movies','sports'],
//   address:{
//     street:'50 main st',
//     city:'bosston',
//     state:'MA'
//   }
// }
// // console.log(person.firstName, person.lastName)
// // console.log(person.hobbies.address.city)
//
// const { firstName, lastName, address:{city} } = person;
//
// person.email = 'john@gmail.com'
//
// console.log(person)




// const todos=[
//   {
//     id:1,
//     text:'Take out trash',
//     isCompleted:true
//   },
//   {
//     id:2,
//     text:'Meeting with boss',
//     isCompleted:true
//   },{
//     id:3,
//     text:'Dentist Appointment',
//     isCompleted:false
//   },
// ];
// console.log(todos[1].text)
// const todoJSON = JSON.stringify(todos)
// console.log(todoJSON)


//for
// let num = (todos.length)
// for (let i=0; i<num;i++){
//   console.log(todos[i].text)
// }

// for(let i =0; i<10; i++){
//   console.log(i)
// }

// for (let todo of todos){
//   console.log(todo.text)
// }

// todos.forEach(function(todo){
//   console.log(todo.text)
// });

// const todoText = todos.map(function(todo){
//   return todo.text;
// });

// const todoCompleted = todos.filter(function(todo){
//   return todo.isCompleted == true;
// }).map(function(todo){
//   return todo.text;
// });
// console.log(todoCompleted)



// const x =9
//
// if(x===10){
//   console.log('x is ten');
// } else if (x >10){
//   console.log('x is greater than')
// }else{
//   console.log('x is less than 10')
// }

// const x = 9
// const color = x > 10 ? 'red' : 'blue';
// console.log(color)

//
// function addNums(x,y){
//   return x+y
// }
// console.log(addNums(2,3));
//
// const addNumss = (num1, num2) => num1 + num2;
//
// console.log(addNumss(1,3));


// constructor fucntion

// instantiate object


// class Person{
//   constructor(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear(){
//     return this.dob.getFullYear()
//   }
// }
//
//
// const person1 = new Person('John', 'Doe', '4-3-1980');
// console.log(person1.getBirthYear())
// // console.log(person1.getFullName())
// console.log(person1)
