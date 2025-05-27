import PlayListItem from "./PlayListItem";
import { Song } from "./MusicPlayer";

type PlaylistProps = {
  songs: Song[];
  currentSong: Song;
  onSelect: (song: Song) => void;
};

export default function Playlist({ songs, currentSong, onSelect }: PlaylistProps) {
  return (
    <div className="text-supapink mt-6">
      <p className="mt-4 mb-8 px-4 text-lg font-bold">Playlist</p>
      <div className="flex flex-col">
        {songs.map((song) => (
          <button key={song.id} onClick={() => onSelect(song)} className="text-left">
            <PlayListItem
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              selected={song.id === currentSong.id}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
