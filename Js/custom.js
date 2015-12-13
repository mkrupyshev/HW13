  // $('#play').click(function(){
	// 	$('#video').trigger('play');
	// })
	// $('#pause').click(function(){
	// 	$('#video').trigger('pause');
	// })

  $('#playpause').click(function(){
    var video = document.getElementById("video");
    if (video.paused == true) {
      $('#video').trigger('play')
      console.log(video.paused)
      document.getElementById("playpauseicon").className = "fa fa-pause";
    }
    else {
      $('#video').trigger('pause')
      document.getElementById("playpauseicon").className = "fa fa-play";
    }
  })

  $('#muteunmute').click(function(){
    console.log('clicked muteunmute')
    var video = document.getElementById("video");
    if (video.muted == true) {
      video.muted = false
      document.getElementById("muteunmuteicon").className = "fa fa-volume-off";
      console.log(video.muted)
    }
    else {
      video.muted = true;
      document.getElementById("muteunmuteicon").className = "fa fa-volume-up";
      console.log(video.muted)
    }
  })
