import PlayerControls from "./PlayerControls";

function ButtonOverlay({ isLoaded, selectedTrack }) {
  return (
    <div id="button-overlay">
      <button id="export-button">Export Project</button>
      <PlayerControls isLoaded={isLoaded} selectedTrack={selectedTrack} />
    </div>
  );
}

export default ButtonOverlay;
