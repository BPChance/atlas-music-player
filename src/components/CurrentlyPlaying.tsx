import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { Song } from "./MusicPlayer";
type CurrentlyPlayingProps = {
  song: Song;
  isFirst: boolean;
  isLast: boolean;
  onBack: () => void;
  onForward: () => void;
  onShuffle: () => void;
  shuffleOn: boolean;
};

export default function CurrentlyPlaying({
  song,
  isFirst,
  isLast,
  onBack,
  onForward,
  onShuffle,
  shuffleOn,
}: CurrentlyPlayingProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[400px]">
      <CoverArt coverArtUrl={song.coverArtUrl} />
      <SongTitle title={song.title} artist={song.artist} />
      <PlayControls
        isFirst={isFirst}
        isLast={isLast}
        onBack={onBack}
        onForward={onForward}
        onShuffle={onShuffle}
        shuffleOn={shuffleOn}
      />
      <VolumeControls />
    </div>
  );
}
