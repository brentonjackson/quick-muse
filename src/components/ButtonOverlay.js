import PlayerControls from "./PlayerControls";

function ButtonOverlay({ isLoaded, isPaused, setIsPaused, selectedTrack }) {
  return (
    <div id="button-overlay">
      <button id="export-button">Export Project</button>
      <PlayerControls
        isLoaded={isLoaded}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
        selectedTrack={selectedTrack}
      />
    </div>
  );
}

export default ButtonOverlay;
