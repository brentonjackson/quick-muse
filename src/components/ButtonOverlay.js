import PlayerControls from "./PlayerControls";

function ButtonOverlay() {
  return (
    <div id="button-overlay">
      <button id="export-button">Export Project</button>
      <PlayerControls />
    </div>
  );
}

export default ButtonOverlay;
