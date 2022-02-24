import ButtonOverlay from "./components/ButtonOverlay";
import FilePane from "./components/FilePane";
import MusicCanvas from "./components/MusicCanvas";
import TrackEditor from "./components/TrackEditor";
import { useState } from "react";

function App() {
  // state to track which file is selected
  const [selectedTrack, setSelectedTrack] = useState(0);
  // state to control whether we render media buttons or not
  const [isLoaded, setIsLoaded] = useState(false);
  // state to control the id of the play button
  const [isPaused, setIsPaused] = useState(true);

  // used to log the current status of state for debugging purposes
  // useEffect(() => {
  //   console.log("updated track selection: ", selectedTrack);
  //   console.log("updated pause state: ", isPaused);
  // }, [selectedTrack, isPaused]);

  // used to update track selection so we don't update it in FileList component
  function selectionHandler(newState) {
    setSelectedTrack((prevState) => {
      return newState;
    });
  }

  return (
    <div id="parent">
      <ButtonOverlay
        isLoaded={isLoaded}
        selectedTrack={selectedTrack}
        isPaused={isPaused}
        pauseHandler={setIsPaused}
      />
      <FilePane
        setIsLoaded={setIsLoaded}
        trackSelectionHandler={selectionHandler}
        selected={selectedTrack}
        pauseSignal={isPaused}
        pauseHandler={setIsPaused}
      />
      <MusicCanvas selectedTrack={selectedTrack} />
      <TrackEditor />
    </div>
  );
}

export default App;
