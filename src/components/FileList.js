import { useState } from "react";

function FileList({ files, removeInstrument, setSelected, selected }) {
  const [isDeleteActive, setIsDeleteActive] = useState(false);
  const [deleteKey, setDeleteKey] = useState(null);

  function removeTrack(i) {
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

  return (
    <div id="file-list">
      {files.map((track, i) => {
        return (
          <div
            className="instrument-track"
            id={`instrument-track-${i}`}
            key={i}
            onMouseEnter={showDelete.bind(this, 1, i)}
            onMouseLeave={showDelete.bind(this, 2)}
            onClick={setSelected.bind(this, i)}
          >
            <span>{track.fileName}</span>
            <audio
              controls
              loop
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
    </div>
  );
}

export default FileList;
