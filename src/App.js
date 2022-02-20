import ButtonOverlay from "./components/ButtonOverlay";
import FilePane from "./components/FilePane";
import MusicCanvas from "./components/MusicCanvas";
import TrackEditor from "./components/TrackEditor";
import { useState, useRef, useEffect } from "react";
import { AviatoAudio } from "aviatojs";

function App() {
  const [selectedTrack, setSelectedTrack] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const audioRef = useRef(null);
  let audio1;

  function sendControl() {
    if (isLoaded) {
      return new AviatoAudio(audioRef.current);
    } else {
      console.log("nothing is loaded bub");
    }
  }

  const handlePlayAudio1 = () => {
    console.log(audio1);
    setIsPaused(false);
    audio1.play();
  };
  const handlePauseAudio1 = () => {
    console.log(audio1);
    setIsPaused(true);
    audio1.pause();
  };

  useEffect(() => {
    if (audioRef.current && audio1 == null) {
      audio1 = new AviatoAudio(audioRef.current);
    }
  });

  return (
    <div id="parent">
      <ButtonOverlay
        playButton1={handlePlayAudio1}
        pauseButton1={handlePauseAudio1}
        isPaused={isPaused}
        isLoaded={isLoaded}
      />
      <FilePane pass={audioRef} setIsLoaded={setIsLoaded} />
      <MusicCanvas />
      <TrackEditor />
    </div>
  );
}

export default App;
