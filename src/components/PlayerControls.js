function PlayerControls({ isLoaded, selectedTrack }) {
  function play() {
    if (!document.querySelector(".soundbar")) {
      return;
    }
    let element = document.querySelector(`#soundbar-${selectedTrack}`);
    element.paused ? element.play() : element.pause();
  }

  return (
    <div id="player-control-wrapper">
      {isLoaded && (
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
            // render play or pause based on state of selected song
            onClick={selectedTrack != null ? play : null}
          ></span>
          <span id="fast-forward-button"></span>
        </div>
      )}
    </div>
  );
}

export default PlayerControls;
