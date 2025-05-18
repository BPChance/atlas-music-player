import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import CoverArt from "./CoverArt";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import SongTitle from "./SongTitle";

function App() {
  return (
    <div className="flex h-full min-h-screen flex-col justify-between p-8">
      <MusicPlayer />
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
      <Footer />
    </div>
  );
}

export default App;
