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
