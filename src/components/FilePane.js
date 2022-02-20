import FileList from "./FileList";
import { useState } from "react";

function FilePane() {
  const [instrumentList, setInstrumentList] = useState([]);

  function fileSelectHandler(e) {
    let files = e.target.files;
    let fileArr = Array.from(files);
    console.log(fileArr);
    for (let i = 0; i < fileArr.length; i++) {
      // Only process image files.
      if (!fileArr[i].type.match("audio.*")) {
        console.log("not right file type");
        return;
      }

      let reader = new FileReader();
      reader.onloadend = (function (file) {
        return function (e) {
          setInstrumentList([
            ...instrumentList,
            {
              fileName: fileArr[i].name,
              instrument: e.target.result,
            },
          ]);
        };
      })(fileArr);

      reader.readAsDataURL(fileArr[i]);
    }
  }

  return (
    <div id="file-pane">
      <input
        type="file"
        id="files"
        name="file"
        className="hidden"
        onChange={fileSelectHandler}
      />
      <button id="import-button">
        <label htmlFor="files">Import File</label>
      </button>
      Files
      <br></br>
      <br></br>
      <FileList files={instrumentList} removeInstrument={setInstrumentList} />
    </div>
  );
}

export default FilePane;
