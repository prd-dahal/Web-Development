image1 = document.querySelector('.img1');
image2 = document.querySelector('.img2');


random1 = Math.floor(Math.random()*5)+1;
random2 = Math.floor(Math.random()*5)+1;

image1.src =`images/dice${random1}.png`;
image2.src =`images/dice${random2}.png`;


head_text = document.querySelector('#head')

if(random1>random2){
  head_text.innerText = "Player One Won"
}
else if(random1==random2){
  head_text.innerText = "Draw. Refresh Again"
}
else{
  head_text.innerText ='Player Two Won'
}

image1.addEventListener('click',action)
image2.addEventListener('click', action)
function action(e){
  location.reload()
}
