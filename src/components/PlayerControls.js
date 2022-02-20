function PlayerControls({ isLoaded, isPaused, setIsPaused, selectedTrack }) {
  function play() {
    if (!document.querySelector(".soundbar")) {
      return;
    }
    let element = document.querySelector(`#soundbar-${selectedTrack}`);
    element.paused ? element.play() : element.pause();
    setIsPaused(element.paused);
  }

  return (
    <div id="player-control-wrapper">
      <div id="player-controls">
        <span id="rewind-button"></span>
        <span
          id={
            document.querySelector(`#soundbar-${selectedTrack}`)
              ? document.querySelector(`#soundbar-${selectedTrack}`).paused
                ? "play-button"
                : "pause-button"
              : "play-button"
          }
          onClick={selectedTrack != null ? play : null}
        ></span>
        <span id="fast-forward-button"></span>
      </div>
    </div>
  );
}

export default PlayerControls;
