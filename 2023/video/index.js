var ytplayer;
function onYouTubeIframeAPIReady() {
    if (document.getElementById("ytplayer")) {
        ytplayer = new YT.Player('ytplayer', {
            videoId: 'UwB4ZeoeGtI',
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onStateChange': onPlayerStateChange
            }
            });
    } else {
        window.setTimeout(onYouTubeIframeAPIReady, 200);
    }
}
// event that will be fired when the state of the video player changes
function onPlayerStateChange(event) {
    if(event.data == -1 || event.data == 1) {
      // unstarted or playing
    } else if (event.data == 0 || event.data == 2) {
      // stopped or paused
    }
  }