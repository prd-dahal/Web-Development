// console.log(document)
// console.log(document.URL)
// console.log(document.title)
// document.title = 'hello'
// console.log(document.doctype)
//
// console.log(document.head)
// console.log(document.all)
// console.log(document.body)
// console.log(document.all)
// document.all[14].textContent = 'hello'

// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)


//
// headerTitle = document.getElementById('main-header');
// headerTitle.innerHTML = '<h4>Item Listener</h4>'
// headerTitle.style.borderBottom = 'solid 3px  black' ;

 //GET ELEMENT BY CLASS NAME

//  var items = document.getElementsByClassName('list-group-item')
// console.log(items[0].textContent)
// items[1].textContent = 'hello world'
// items[1].style.fontWeight = 'bold'
//
// // items.style.backgroundColor = '#f4f4f4'
//
// for (var i =0 ;i<items.length; i++){
//   if(i%2==0){
//     items[i].style.backgroundColor = '#f4f4f4'
//   }
// }

//Get ELEMTNy BY TAG NAME

// var li = document.getElementsByTagName('li')
// console.log(li[0].textContent)
// li[1].textContent = 'hello world'
// li[1].style.fontWeight = 'bold'
//
// // items.style.backgroundColor = '#f4f4f4'
//
// for (var i =0 ;i<li.length; i++){
//  if(i%2==0){
//    li[i].style.backgroundColor = '#f4f4f4'
//  }
// }




//Query Selector
// var header = document.querySelector('#main-header');
// console.log(header)
// header.style.borderBottom = 'solid 4px black'
// var input = document.querySelector('input')
// input.value = 'hello world'
//
// var submit = document.querySelector('input[type="submit"]')
// submit.value = 'Sender'
//
// var item = document.querySelector('.list-group-item')
// item.style.color = 'red'
//
// var lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color ='green'
//
//
// var secondItem = document.querySelector('.list-group-item:nth-Child(2)')
// secondItem.style.color = 'coral'
//

// Query Selector All

// var titles = document.querySelectorAll('.title')
// console.log(titles)

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')
//  for (let i = 0 ; i<odd.length ; i++){
//
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = 'grey';
//  }
//

// var itemList = document.querySelector("#items")
// parentNode = (itemList.parentNode)
// parentNode.style.backgroundColor='green'
// parentElement = itemList.parentElement


//CHILD NODE

// console.log(itemList.childNodes)
// console.log(itemList.firstElementChild)

// console.log(itemList.nextElementSibling)

// console.log(itemList.previousElementSibling)
// var newDiv = document.createElement('div')
// // add class
// newDiv.className = 'hello'
// //add id
// newDiv.id = 'hello1'
//
// newDiv.setAttribute('title','hello div')
// console.log(newDiv)
//
// // create text node
// var newDivText = document.createTextNode('Hello world')
// newDiv.appendChild(newDivText)
//
//
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);


//EVENTS

// button = document.getElementById('button')
// button.addEventListener('click', buttonClick)
//
//
// function buttonClick(e){
//   // document.getElementById('header-title').textContent = 'changed'
//   // document.querySelector('#main').style.backgroundColor = "#f4f4f4"
//   // console.log(e.target)
//   // console.log(e.type)
//   // console.log(e.clientX);
//   // console.log(e.clientY);
//   // console.log(e.offsetX)
//   // console.log(e.altKey)
//   // console.log(e.ctrlKey)
//   // console.log(e.shiftKey)
//
// }

// var button = document.getElementById('button')
// var box = document.getElementById('box')
var itemInput = document.querySelector('input[type="text"]')
var form = document.querySelector('form');
var select = document.querySelector('select')
// button.addEventListener('click', runEvent)
// button.addEventListener('dblclick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave',runEvent)
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mousemove',runEvent)

// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)
// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)paste
// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)
// itemInput.addEventListener('input', runEvent)
// select.addEventListener('change',runEvent)
form.addEventListener('submit', runEvent)
function runEvent(e){

  e.preventDefault();
  console.log('EVENT TYPE: '+e.type)
  // console.log(e.target.value)
  // console.log(e.target.value)

  // document.getElementById('output').innerHTML=
  // box.innerHTML = '<h3>MouseX : ' + e.offsetX + '</h3><h3> Mouse Y: '+e.offsetY + '</h3>'
  // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"

}


// button.addEventListener('mouseleave', resetBackGround)
//
// function changeBackGround(e){
//   button.style.backgroundColor='red';
// }
// function resetBackGround(e){
//   button.style.background = 'blue';
// }
