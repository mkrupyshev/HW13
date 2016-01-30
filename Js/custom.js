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


$('#animatetada').click(function(){
  $('.video-wrap').attr("class", "tada animated video-wrap");
  $('.rectangle').attr("class", "tada animated rectangle red");
  console.log('clicked')
})



$('#animatebounce').click(function(){
  $('.video-wrap').attr("class", "bounce animated video-wrap");
  $('.rectangle').attr("class", "bounce animated rectangle red");
  console.log('clicked')
})



$('#animatefadeinl').click(function(){
  $('.video-wrap').attr("class", "fadeInLeft animated video-wrap");
  $('.rectangle').attr("class", "fadeInLeft animated rectangle red");
  console.log('clicked')
})



$('#animateflip').click(function(){
  $('.video-wrap').attr("class", "flip animated video-wrap");
  $('.rectangle').attr("class", "flip animated rectangle red");
  console.log('clicked')
})



$('#stopanimation').click(function(){
  $('.video-wrap').attr("class", "video-wrap");
  $('.rectangle').attr("class", "rectangle");
  console.log('removed')
})

$( "#slider-range" ).slider({
  range: true,
  min: 0,
  max: 100,
  values: [ 14, 75 ],
  slide: function( event, ui )
    {
      $( "#amount" ).val( "M $" + ui.values[ 0 ] + " - M $" + ui.values[ 1 ] );
    }
});

$( "#amount" ).val( "M $" + $( "#slider-range" ).slider( "values", 0 ) +
  " - M $" + $( "#slider-range" ).slider( "values", 1 )
);


})
