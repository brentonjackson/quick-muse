import PlayerControls from "./PlayerControls";

function ButtonOverlay({ playButton1, pauseButton1, isLoaded, isPaused }) {
  return (
    <div id="button-overlay">
      <button id="export-button">Export Project</button>
      <PlayerControls
        isLoaded={isLoaded}
        play1={playButton1}
        pause1={pauseButton1}
        isPaused={isPaused}
      />
    </div>
  );
}

export default ButtonOverlay;
