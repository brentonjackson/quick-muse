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
        <button id="rewind-button">Rewind</button>
        <button id="play-button" onClick={selectedTrack != null ? play : null}>
          {document.querySelector(`#soundbar-${selectedTrack}`)
            ? document.querySelector(`#soundbar-${selectedTrack}`).paused
              ? "Play"
              : "Pause"
            : "Play"}
        </button>
        <button id="fast-forward-button">Fast Forward</button>
      </div>
    </div>
  );
}

export default PlayerControls;
