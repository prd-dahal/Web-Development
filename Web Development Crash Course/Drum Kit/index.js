buttons = document.querySelectorAll('.drum')
for (let i=0 ; i< buttons.length;i++){
  buttons[i].addEventListener('click',handleclick);

}


function handleclick(e){

  // this.style.color='white';
  makeSound(e.target.textContent);
  buttonAnimation(e.target.textContent);

}

addEventListener('keypress', function(e){

  makeSound(e.key);
  buttonAnimation(e.key);

});

function makeSound(key){
  if(key=='w'){
    crash = new Audio('sounds/crash.mp3');
    crash.play();
  }
  else if(key=='a'){
    kick_bass = new Audio('sounds/kick-bass.mp3');
    kick_bass.play();
  }
  else if(key=='s'){
    snare = new Audio('sounds/snare.mp3');
    snare.play();
  }
  else if(key=='d'){
    tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
  }
  else if(key=='j'){
    tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
  }
  else if(key=='k'){
    tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
  }
  else if(key=='l'){
    tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
  }
}


function buttonAnimation(currentKey){
  activeButton = document.querySelector(`.${currentKey}`)
  activeButton.classList.add('pressed');
  setTimeout(function (){
    activeButton.classList.remove('pressed')
  },100);

}
