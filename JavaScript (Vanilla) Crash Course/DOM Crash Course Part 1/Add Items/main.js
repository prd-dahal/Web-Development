my_form = document.querySelector('.input-form')
item_input = document.querySelector('#item_input')
item_output = document.querySelector('.add_item')

my_form.addEventListener('submit',onSubmit)

function onSubmit(e){

  e.preventDefault();

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${item_input.value}`));
  item_output.appendChild(li);
  item_input.value='';
}
