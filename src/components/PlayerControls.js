import { useState } from "react";

function PlayerControls() {
  const [isPaused, setIsPaused] = useState(true);
  function playAudio() {
    console.log(isPaused);
    setIsPaused(!isPaused);
  }
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
