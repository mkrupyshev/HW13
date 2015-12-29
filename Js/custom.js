$(function() {
  $("#playpause").click(function(){
    if($("#video")[0].paused) {
      $("#video").trigger("play")
      $("#playpauseicon").attr("class", "fa fa-pause")
    } else {
      $("#video").trigger("pause")
      $("#playpauseicon").attr("class", "fa fa-play")
    }
  })

  $("#muteunmute").click(function(){
    if($("#video")[0].muted) {
      video.muted = false
      $("#muteunmuteicon").attr("class", "fa fa-volume-off")
    } else {
      video.muted = true
      $("#muteunmuteicon").attr("class", "fa fa-volume-up")
    }
  })
})

$(function() {
$('#animatetada').click(function(){
  $('.video-wrap').attr("class", "tada animated video-wrap");
  $('.rectangle').attr("class", "tada animated rectangle red");
  console.log('clicked')
})
})

$(function() {
$('#animatebounce').click(function(){
  $('.video-wrap').attr("class", "bounce animated video-wrap");
  $('.rectangle').attr("class", "bounce animated rectangle red");
  console.log('clicked')
})
})

$(function() {
$('#animatefadeinl').click(function(){
  $('.video-wrap').attr("class", "fadeInLeft animated video-wrap");
  $('.rectangle').attr("class", "fadeInLeft animated rectangle red");
  console.log('clicked')
})
})

$(function() {
$('#animateflip').click(function(){
  $('.video-wrap').attr("class", "flip animated video-wrap");
  $('.rectangle').attr("class", "flip animated rectangle red");
  console.log('clicked')
})
})

$(function() {
$('#stopanimation').click(function(){
  $('.video-wrap').attr("class", "video-wrap");
  $('.rectangle').attr("class", "rectangle");
  console.log('removed')
})
})
