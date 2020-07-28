
level = 1

map_color ={
  0:'green',
  1:'red',
  2:'yellow',
  3:'blue'
}
map_sound ={
  0:'sounds/green.mp3',
  1:'sounds/red.mp3',
  2:'sounds/yellow.mp3',
  3:'sounds/blue.mp3'
}



function compare_moves(users_move,computers_move){
  flag = true;
  for(let i=0;i<users_move.length;i++)
      if(users_move[i]===computers_move[i]){
        flag = true;
      }
      else{
        flag = false;
      }
    return flag;
}


// number = Math.floor(Math.random()*5)

$(document).keypress(function (){
  computer_move = []
  users_move = []


  $('#level-title').text(`Level ${level}`);

  m = Math.floor(Math.random()*4)

  $(`#${map_color[m]}`).fadeOut(100).fadeIn(100);

  s = new Audio(map_sound[m]);
  s.play();
  computer_move.push(map_color[m])




  $('.btn').click (function(e){
    users_choice = e.target.id;
    users_move.push(users_choice);
    $(`#${users_choice}`).fadeOut(100).fadeIn(100);

    compared_flag = (compare_moves(users_move,computer_move));
    // console.log(compared_flag)
    if(compared_flag==false){
      $('h1').text("Game Over, Press Any Key to Restart")
      sound = new Audio('sounds/wrong.mp3')
      sound.play()
      $('body').css('background-color','red')
      setTimeout(function(){
          $('body').css('background-color','#011F3F')
      },100)


    }
    else{
      sound = new Audio  ('sounds/'+users_choice+'.mp3');
      sound.play();
    }
    e.stopImmediatePropagation();
  });




});
