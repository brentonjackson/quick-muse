import ButtonOverlay from "./components/ButtonOverlay";
import FilePane from "./components/FilePane";
import MusicCanvas from "./components/MusicCanvas";
import TrackEditor from "./components/TrackEditor";
import { useState } from "react";

function App() {
  const [selectedTrack, setSelectedTrack] = useState("");

  function playAudio() {
    let audioObjects = document.querySelectorAll(".soundbar");
    let playBtn = document.querySelector("#play-button");
  }

  return (
    <div id="parent">
      <ButtonOverlay />
      <FilePane />
      <MusicCanvas />
      <TrackEditor />
    </div>
  );
}

export default App;
