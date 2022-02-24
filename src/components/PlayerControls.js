function PlayerControls({ isLoaded, selectedTrack, isPaused, setPause }) {
  function play() {
    if (!document.querySelector(".soundbar")) {
      return;
    }
    let element = document.querySelector(`#soundbar-${selectedTrack}`);
    if (element.paused) {
      setPause(false);
      element.play();
    } else {
      setPause(true);
      element.pause();
    }
  }
  function rewind() {
    if (!document.querySelector(".soundbar")) {
      return;
    }
    let element = document.querySelector(`#soundbar-${selectedTrack}`);
    console.log(element.currentTime);
    element.currentTime -= 5;
  }
  function fastForward() {
    if (!document.querySelector(".soundbar")) {
      return;
    }
    let element = document.querySelector(`#soundbar-${selectedTrack}`);
    let duration = element.duration;
    if (element.currentTime + 5 > duration) {
      // reset track
      element.load();
      element.currentTime = 0;
      setPause(true);
      element.pause();
    } else {
      element.currentTime += 5;
    }
  }

  return (
    <div id="player-control-wrapper">
      {isLoaded && (
        <div id="player-controls">
          <span id="rewind-button" onClick={rewind}></span>
          <span
            id={isPaused ? "play-button" : "pause-button"}
            onClick={play}
          ></span>
          <span id="fast-forward-button" onClick={fastForward}></span>
        </div>
      )}
    </div>
  );
}

export default PlayerControls;
