exports.getDate = function(){
  let today = new Date()
  currentDay = today.getDay()
  const options ={
    weekday:"long",
    day:'numeric',
    month:'long'
  }
  const day = today.toLocaleDateString('en-US',options)
  return day;
}

exports.getDay = function(){
  const today = new Date()
  currentDay = today.getDay()
  const options ={
    weekday:"long"
  }
  const day = today.toLocaleDateString('en-US',options)
  return day;
}
