import FileList from "./FileList";
import { useState } from "react";

function FilePane() {
  const [instruments, setInstruments] = useState([]);

  function fileSelectHandler(e) {
    console.log("loading file");
    let files = e.target.files;
    let fileArr = Array.from(files);
    console.log(fileArr);
    for (let i = 0; i < fileArr.length; i++) {
      console.log(fileArr[i].type);

      // Only process image files.
      if (!fileArr[i].type.match("audio.*")) {
        console.log("not right file type");
        return;
      }

      let reader = new FileReader();

      reader.onload = (function (file) {
        return function () {
          setInstruments([...instruments, fileArr[i].name]);
          console.log("added to list");

          console.log(instruments);
        };
      })(fileArr);

      reader.readAsText(fileArr[i]);
    }
  }

  return (
    <div id="file-pane">
      <input
        type="file"
        id="files"
        name="file"
        className="hidden"
        multiple
        onChange={fileSelectHandler}
      />
      <button id="import-button">
        <label htmlFor="files">Import File</label>
      </button>
      Files
      <br></br>
      <br></br>
      <FileList files={instruments} />
    </div>
  );
}

export default FilePane;
