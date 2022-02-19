function FileList({ files }) {
  return (
    <div id="file-list">
      {files.map((file, i) => {
        return (
          <div key={i}>
            <span>{file}</span>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default FileList;
