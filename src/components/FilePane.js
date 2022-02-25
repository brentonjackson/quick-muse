import FileList from "./FileList";
import { useState } from "react";

function FilePane({
  setIsLoaded,
  trackSelectionHandler,
  selected,
  pauseSignal,
  pauseHandler,
}) {
  const [instrumentList, setInstrumentList] = useState([]);

  function fileSelectHandler(e) {
    let files = e.target.files;
    let fileArr = Array.from(files);
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
          setIsLoaded(true);
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
      <FileList
        files={instrumentList}
        removeInstrument={setInstrumentList}
        trackSelectionHandler={trackSelectionHandler}
        selected={selected}
        isPaused={pauseSignal}
        setPause={pauseHandler}
      />
    </div>
  );
}

export default FilePane;
