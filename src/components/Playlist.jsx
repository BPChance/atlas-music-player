import PlayListItem from "./PlayListItem";

const songs = [
  { title: "Painted in Blue", artist: "Soul Canvas", length: "5:55" },
  { title: "Tidal Drift", artist: "Echoes of the Sea", length: "8:02" },
  { title: "Fading Shadows", artist: "The Emberlight", length: "3:01" },
  { title: "Cosmic Drift", artist: "Solar Flare", length: "5:01" },
  { title: "Urban Serenade", artist: "Midnight Groove", length: "4:54" },
];

export default function Playlist() {
  const selectedTitle = "Tidal Drift";

  return (
    <div>
      <p className="mb-4 px-4 py-2 text-lg font-bold">Playlist</p>
      <div className="flex flex-col gap-2">
        {songs.map((song) => (
          <PlayListItem
            key={song.title}
            title={song.title}
            artist={song.artist}
            length={song.length}
            selected={song.title === selectedTitle}
          />
        ))}
      </div>
    </div>
  );
}
