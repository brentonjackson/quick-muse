import { useState } from "react";
function PlayerControls() {
  const [isPaused, setIsPaused] = useState(true);
  return (
    <div id="player-control-wrapper">
      <div id="player-controls">
        <button id="rewind">Rewind</button>
        <button
          id={isPaused ? "play" : "pause"}
          onClick={() => {
            setIsPaused(!isPaused);
          }}
        >
          {isPaused ? "Play" : "Pause"}
        </button>
        <button id="fast-forward">Fast Forward</button>
      </div>
    </div>
  );
}

export default PlayerControls;
