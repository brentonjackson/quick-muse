import ButtonOverlay from "./components/ButtonOverlay";
import FilePane from "./components/FilePane";
import MusicCanvas from "./components/MusicCanvas";
import TrackEditor from "./components/TrackEditor";

function App() {
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
