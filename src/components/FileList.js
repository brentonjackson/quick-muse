function FileList({ files }) {
  return (
    <div id="file-list">
      {files.map((track, i) => {
        return (
          <div id="instrument-track" key={i}>
            <span>{track.fileName}</span>
            <audio controls>
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
