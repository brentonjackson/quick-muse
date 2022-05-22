import { useState } from "react";

function FileList({
  files,
  removeInstrument,
  selected,
  trackSelectionHandler,
  isPaused,
  setPause,
}) {
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const [deleteKey, setDeleteKey] = useState(null);

  function removeTrack(i) {
    let selectedElement = document.querySelector(`#soundbar-${i}`);
    selectedElement.pause();
    selectedElement.removeAttribute("src");
    selectedElement.load();
    removeInstrument((prevFiles) =>
      prevFiles.filter((val, index) => {
        return index !== i;
      })
    );
  }

  function showDelete(option, i) {
    if (option === 1) {
      setIsDeleteActive(true);
      setDeleteKey(i);
    } else {
      setIsDeleteActive(false);
    }
  }

  function selectionHandler(listIndex) {
    trackSelectionHandler(listIndex);
    let selectedElement = document.querySelector(`#soundbar-${listIndex}`);
    if (selectedElement.paused) {
      setPause(true);
    } else {
      setPause(false);
    }
  }

  return (
    <div id="file-list">
      {files.map((track, i) => {
        return (
          <div
            className={
              selected === i
                ? "instrument-track instrument-track-highlighted"
                : "instrument-track"
            }
            id={`instrument-track-${i}`}
            key={i}
            onMouseEnter={showDelete.bind(this, 1, i)}
            onMouseLeave={showDelete.bind(this, 2)}
            onClick={selectionHandler.bind(this, i)}
          >
            <span>{track.fileName}</span>
            <audio
              controls
              className="soundbar"
              id={`soundbar-${i}`}
              src={track.instrument}
            >
              <source src={track.instrument} />
            </audio>
            <br></br>
            {isDeleteActive && deleteKey === i && (
              <button id="delete-button" onClick={removeTrack.bind(this, i)}>
                Delete
              </button>
            )}
          </div>
        );
      })}
      <button id="import-button">
        <label htmlFor="files">Import File</label>
      </button>
    </div>
  );
}

export default FileList;
