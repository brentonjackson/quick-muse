import { useState } from "react";

function PlayerControls() {
  function playAudio() {
    return 0;
  }
  const [isPaused, setIsPaused] = useState(true);
  return (
    <div id="player-control-wrapper">
      <div id="player-controls">
        <button id="rewind-button">Rewind</button>
        <button id="play-button" onClick={playAudio}>
          {isPaused ? "Play" : "Pause"}
        </button>
        <button id="fast-forward-button">Fast Forward</button>
      </div>
    </div>
  );
}

export default PlayerControls;
