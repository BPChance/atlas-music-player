import CoverArt from "./CoverArt";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import SongTitle from "./SongTitle";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col items-center gap-6">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
