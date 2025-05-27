import { useState } from "react";
import rewind from "../assets/rewind.svg";
import play from "../assets/play.png";
import pause from "../assets/pause.png";
import forward from "../assets/fast-forward.svg";
import shuffle from "../assets/shuffle.svg";

type PlayControlsProps = {
  isFirst: boolean;
  isLast: boolean;
  onBack: () => void;
  onForward: () => void;
  onShuffle: () => void;
  shuffleOn: boolean;
};

export default function PlayControls({
  isFirst,
  isLast,
  onBack,
  onForward,
  onShuffle,
  shuffleOn,
}: PlayControlsProps) {
  const [playbackSpeed, setPlaybackSpeed] = useState<0.5 | 1 | 2>(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const cycleSpeed = () => {
    setPlaybackSpeed((prev) => (prev === 0.5 ? 1 : prev === 1 ? 2 : 0.5));
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="flex w-full max-w-[400px] items-center justify-between">
      <button onClick={cycleSpeed} className="text-lg">
        {playbackSpeed}x
      </button>

      <button
        onClick={onBack}
        disabled={isFirst}
        className="border-none bg-transparent p-0 disabled:opacity-30"
      >
        <img src={rewind} alt="rewind" className="h-6 w-6" />
      </button>

      <button onClick={togglePlay} className="border-none bg-transparent p-0">
        <img
          src={isPlaying ? pause : play}
          alt="play / pause"
          className="h-12 w-12"
        />
      </button>

      <button
        onClick={onForward}
        disabled={isLast && !shuffleOn}
        className="border-none bg-transparent p-0 disabled:opacity-30"
      >
        <img src={forward} alt="forward" className="h-6 w-6" />
      </button>

      <button onClick={onShuffle} className="border-none bg-transparent p-0">
        <img
          src={shuffle}
          alt="shuffle"
          className={`h-6 w-6 ${shuffleOn ? "opacity-100" : "opacity-30"}`}
        />
      </button>
    </div>
  );
}
