import { useEffect, useRef } from "react";

type AudioPlayerProps = {
  src: string;
  playing: boolean;
  volume: number;
  playbackSpeed: number;
  onEnd: () => void;
};

export default function AudioPlayer({
  src,
  playing,
  volume,
  playbackSpeed,
  onEnd,
}: AudioPlayerProps) {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;

    audio.src = src;

    if (playing) {
      audio
        .play()
        .catch((err) => console.error("Play error after src change", err));
    } else {
      audio.pause();
    }
  }, [src, playing]);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (ref.current) {
      ref.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;

    const handleEnded = () => {
      onEnd();
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [onEnd]);

  return <audio ref={ref} />;
}
