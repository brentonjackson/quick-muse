function FileList({ files, removeInstrument }) {
  function removeTrack(i) {
    removeInstrument((prevFiles) =>
      prevFiles.filter((val, index) => {
        return index !== i;
      })
    );
    console.log(files[i]);
    console.log(files);
    // delete e.targ
  }
  return (
    <div id="file-list">
      {files.map((track, i) => {
        console.log(files);
        return (
          <div
            className="instrument-track"
            id={`instrument-track-${i}`}
            key={i}
            onClick={removeTrack.bind(this, i)}
          >
            <span>{track.fileName}</span>
            <audio controls loop id={"soundbar"}>
              <source src={track.instrument} />
            </audio>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default FileList;
