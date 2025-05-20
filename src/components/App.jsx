import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import PlayListItem from "./PlayListItem";

function App() {
  return (
    <div className="flex min-h-screen flex-row gap-8 p-8 font-sans">
      <div className="flex w-1/2 justify-center">
        <div className="flex w-[500px] flex-col items-center gap-6 rounded-xl p-6 shadow-md">
          <MusicPlayer />
        </div>
      </div>
      <div className="w-1/2">
        <PlayListItem />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
