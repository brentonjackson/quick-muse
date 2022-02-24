import PlayerControls from "./PlayerControls";

function ButtonOverlay({ isLoaded, selectedTrack, isPaused, pauseHandler }) {
  return (
    <div id="button-overlay">
      <button id="export-button">Export Project</button>
      <PlayerControls
        isLoaded={isLoaded}
        selectedTrack={selectedTrack}
        isPaused={isPaused}
        setPause={pauseHandler}
      />
    </div>
  );
}

export default ButtonOverlay;
