import ButtonOverlay from "./components/ButtonOverlay";
import FilePane from "./components/FilePane";
import MusicCanvas from "./components/MusicCanvas";
import TrackEditor from "./components/TrackEditor";
import { useState } from "react";

function App() {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div id="parent">
      <ButtonOverlay isLoaded={isLoaded} selectedTrack={selectedTrack} />
      <FilePane
        setIsLoaded={setIsLoaded}
        setSelected={setSelectedTrack}
        selected={selectedTrack}
      />
      <MusicCanvas selectedTrack={selectedTrack} />
      <TrackEditor />
    </div>
  );
}

export default App;
