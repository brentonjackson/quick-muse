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

  return (
    <div id="player-control-wrapper">
      {isLoaded && (
        <div id="player-controls">
          <span id="rewind-button"></span>
          <span
            id={isPaused ? "play-button" : "pause-button"}
            onClick={play}
          ></span>
          <span id="fast-forward-button"></span>
        </div>
      )}
    </div>
  );
}

export default PlayerControls;
