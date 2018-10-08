$(document).ready(function(){
  console.log('Hello Rossio')
  var height= $(window).innerHeight()
  var width= $(window).innerWidth()
$('#sheep').on('click',function(){
  console.log('running')
  var y= Math.floor(Math.random() * height)
  var x= Math.floor(Math.random() * width)
  $('#sheep').css('top', y)
  $('#sheep').css('left', x)
})
$('#piggy').on('click',function(){
  var y= Math.floor(Math.random() * height)
  var x= Math.floor(Math.random() * width)
  $('#piggy').css('top', y)
  $('#piggy').css('left', x)
})
$('#donkey').on('click',function(){
  var y= Math.floor(Math.random() * height)
  var x= Math.floor(Math.random() * width)
  $('#donkey').css('top', y)
  $('#donkey').css('left', x)
})


















});
