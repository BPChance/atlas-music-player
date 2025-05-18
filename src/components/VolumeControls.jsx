import volume from "../assets/volume-2.svg";

export default function VolumeControls() {
  return (
    <div className="flex items-center">
      <span>
        <img src={volume} alt="volume" />
      </span>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        className="accent-grey h-[15px] w-[374px] cursor-pointer appearance-none rounded-lg bg-gray-300"
      />
    </div>
  );
}
