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
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  playbackSpeed: 0.5 | 1 | 2;
  setPlaybackSpeed: React.Dispatch<React.SetStateAction<0.5 | 1 | 2>>;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
};

export default function CurrentlyPlaying({
  song,
  isFirst,
  isLast,
  onBack,
  onForward,
  onShuffle,
  shuffleOn,
  playing,
  setPlaying,
  playbackSpeed,
  setPlaybackSpeed,
  volume,
  setVolume,
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
        playing={playing}
        setPlaying={setPlaying}
        playbackSpeed={playbackSpeed}
        setPlaybackSpeed={setPlaybackSpeed}
      />
      <VolumeControls volume={volume} setVolume={setVolume} />
    </div>
  );
}
