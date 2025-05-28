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
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  playbackSpeed: 0.5 | 1 | 2;
  setPlaybackSpeed: React.Dispatch<React.SetStateAction<0.5 | 1 | 2>>;
};

export default function PlayControls({
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
}: PlayControlsProps) {
  const cycleSpeed = () => {
    setPlaybackSpeed((prev) => (prev === 0.5 ? 1 : prev === 1 ? 2 : 0.5));
  };

  const togglePlay = () => {
    setPlaying((prev) => !prev);
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
          src={playing ? pause : play}
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
