function PlayerControls({ play1, pause1, isLoaded, isPaused }) {
  return (
    <div id="player-control-wrapper">
      <div id="player-controls">
        <button id="rewind-button">Rewind</button>
        <button id="play-button" onClick={isPaused ? play1 : pause1}>
          {isPaused ? "Play" : "Pause"}
        </button>
        <button id="fast-forward-button">Fast Forward</button>
      </div>
    </div>
  );
}

export default PlayerControls;
