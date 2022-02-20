import ButtonOverlay from "./components/ButtonOverlay";
import FilePane from "./components/FilePane";
import MusicCanvas from "./components/MusicCanvas";
import TrackEditor from "./components/TrackEditor";
import { useState, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

function App() {
  const [selectedTrack, setSelectedTrack] = useState("");

  const waveformRef = useRef();

  useEffect(() => {
    if (waveformRef.current) {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
      });
      console.log(wavesurfer);
    }
  }, []);

  return (
    <div id="parent">
      <ButtonOverlay />
      <FilePane />
      <MusicCanvas ref={waveformRef} />
      <TrackEditor />
    </div>
  );
}

export default App;
