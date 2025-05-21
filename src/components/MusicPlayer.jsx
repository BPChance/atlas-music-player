import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex h-screen w-screen flex-col md:flex-row">
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-[500px] p-12">
          <CurrentlyPlaying />
        </div>
      </div>
      <div className="flex flex-1 flex-col border-l border-[#E2E8F0] p-6 shadow-md">
        <Playlist />
      </div>
    </div>
  );
}
