import volume from "../assets/VolumeIcon.svg";

export default function VolumeControls() {
  return (
    <div className="flex w-full items-center gap-2">
      <span>
        <img src={volume} alt="volume" />
      </span>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        className="accent-supapink h-[15px] w-full max-w-[374px] cursor-pointer bg-[#D5D7D8] shadow-2xl"
      />
    </div>
  );
}
