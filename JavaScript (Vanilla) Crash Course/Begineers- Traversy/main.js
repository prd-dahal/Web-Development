
// Single Element Selector
// const form = (document.getElementById('my-form'))
// console.log(document.querySelector('h1'))
// //Multiple Element Selector
//

// console.log(document.getElementsByClassName('item'));
// const items = document.querySelectorAll('.item');
//
// items.forEach((item)=>console.log(item));
// Manipulationg document

// const ul = document.querySelector('.items');
// // ul.remove()
// // ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'hello';
// ul.children[1].innerText = 'Brad'
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'
//
//
// const btn = document.querySelector('.btn');
// btn.style.background='lightblue';
// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover',(e)=>{
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = 'red';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello<h1>'
// })
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value ===''){
      msg.classList.add('error')
      msg.innerHTML = ('<p><i>Please Fill the value in the form</i></p>');
      setTimeout(()=> msg.remove(),3000)
  }
  else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userList.appendChild(li);
    //clear fields
    nameInput.value = ''
    emailInput.value = ''
  }
}
