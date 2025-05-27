import { useEffect, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export type Song = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  coverArtUrl: string;
  lyrics?: string;
};

export default function MusicPlayer() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(true);
  const [shuffleOn, setShuffleOn] = useState(false);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const res = await fetch("/api/v1/playlist");
        const data = await res.json();

        const songsWithDetails = await Promise.all(
          data.map(async (song: any) => {
            const [detailsRes, lyricsRes] = await Promise.all([
              fetch(`/api/v1/songs/${song.id}`),
              fetch(`/api/v1/lyrics/${song.id}`),
            ]);

            const details = await detailsRes.json();
            const lyricsData = await lyricsRes.json();

            return {
              ...song,
              coverArtUrl: details.cover,
              lyrics: lyricsData.lyrics,
            };
          }),
        );

        setSongs(songsWithDetails);
        setCurrentSong(songsWithDetails[0]);
      } catch (err) {
        console.error("Failed to fetch playlist or song data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  if (loading || !currentSong) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="m-6 mx-auto w-full max-w-[1100px] overflow-hidden rounded-xl shadow-2xl">
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full justify-center p-6 md:w-1/2 md:p-12">
          <CurrentlyPlaying
            song={currentSong}
            isFirst={songs.indexOf(currentSong) === 0}
            isLast={songs.indexOf(currentSong) === songs.length - 1}
            onBack={() => {
              const index = songs.indexOf(currentSong);
              if (index > 0) setCurrentSong(songs[index - 1]);
            }}
            onForward={() => {
              const index = songs.indexOf(currentSong);
              if (shuffleOn) {
                let randomIndex;
                do {
                  randomIndex = Math.floor(Math.random() * songs.length);
                } while (
                  songs[randomIndex] === currentSong &&
                  songs.length > 1
                );
                setCurrentSong(songs[randomIndex]);
              } else if (index < songs.length - 1) {
                setCurrentSong(songs[index + 1]);
              }
            }}
            onShuffle={() => setShuffleOn((prev) => !prev)}
            shuffleOn={shuffleOn}
          />
        </div>
        <div className="border-supablue dark:border-supapink w-full border-t p-6 md:w-1/2 md:border-t-0 md:border-l">
          <Playlist
            songs={songs}
            currentSong={currentSong}
            onSelect={setCurrentSong}
          />
        </div>
      </div>
    </div>
  );
}
