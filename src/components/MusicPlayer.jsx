import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="m-6 overflow-hidden rounded-xl shadow-2xl">
      <div className="flex w-screen flex-col md:flex-row">
        <div className="flex flex-none items-start justify-center">
          <div className="w-[500px] p-12">
            <CurrentlyPlaying />
          </div>
        </div>
        <div className="flex flex-1 flex-col border-l border-[#E2E8F0]">
          <Playlist />
        </div>
      </div>
    </div>
  );
}
