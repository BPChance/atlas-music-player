import rewind from "../assets/rewind.svg";
import play from "../assets/square-play.svg";
import forward from "../assets/fast-forward.svg";
import shuffle from "../assets/shuffle.svg";

export default function PlayControls() {
  return (
    <div className="flex w-[400px] items-center justify-between">
      <p className="h-[22px] w-[19px] text-lg">1x</p>
      <button className="border-none bg-transparent p-0">
        <img src={rewind} alt="rewind" className="h-[24px] w-[24px]" />
      </button>
      <button className="border-none bg-transparent p-0">
        <img src={play} alt="play / pause" className="h-[48px] w-[48px]" />
      </button>
      <button className="border-none bg-transparent p-0">
        <img src={forward} alt="forward" className="h-[24px] w-[24px]" />
      </button>
      <button className="border-none bg-transparent p-0">
        <img src={shuffle} alt="shuffle" className="h-[24px] w-[24px]" />
      </button>
    </div>
  );
}
