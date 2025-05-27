import rewind from "../assets/rewind.svg";
import forward from "../assets/fast-forward.svg";
import shuffle from "../assets/shuffle.svg";
import volume from "../assets/VolumeIcon.svg";
import play from "../assets/play.png";

export default function LoadingSkeleton() {
  return (
    <div className="flex w-full max-w-[1100px] animate-pulse flex-col overflow-hidden rounded-xl shadow-2xl md:flex-row">
      <div className="flex w-full flex-col items-start gap-2 p-6 md:w-1/2 md:p-12">
        <div className="aspect-square w-full rounded-lg bg-gray-200" />

        <div className="h-6 w-3/4 rounded bg-gray-200" />
        <div className="h-4 w-1/3 rounded bg-gray-200" />

        <div className="mt-4 flex w-full max-w-[400px] items-center justify-between opacity-40">
          <p className="h-[22px] w-[19px] text-lg">1x</p>
          <img src={rewind} alt="rewind" className="h-6 w-6" />
          <img src={play} alt="play/pause" className="h-12 w-12" />
          <img src={forward} alt="forward" className="h-6 w-6" />
          <img src={shuffle} alt="shuffle" className="h-6 w-6" />
        </div>

        <div className="mt-4 flex w-full max-w-[400px] items-center gap-2 opacity-40">
          <img src={volume} alt="volume" className="h-6 w-6" />
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="h-[15px] w-full cursor-pointer accent-gray-300"
            disabled
          />
        </div>
      </div>

      <div className="dark:border-supapink border-supablue mt-6 w-full border-t p-6 md:w-1/2 md:border-t-0 md:border-l">
        <p className="text-supapink mb-8 text-lg font-bold">Playlist</p>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between py-1">
              <div className="flex flex-col space-y-1 text-left">
                <div className="h-4 w-40 rounded bg-gray-200" />
                <div className="h-3 w-24 rounded bg-gray-200" />
              </div>
              <div className="h-4 w-6 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
