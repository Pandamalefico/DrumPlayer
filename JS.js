$(document).keydown(function(e){
  var keycode = e.keyCode,
      $audio = $(`audio[data-key="${keycode}"]`).get(0),
      $key = $(`.key[data-key="${keycode}"]`)

  if(!$audio) return;
  $audio.currentTime = 0;
  $audio.play();
  $key.addClass('play');
})
$(document).keyup(function(e){
  $key = e.keyCode;
  $('[data-key="'+$key+'"]').removeClass('play');
})
