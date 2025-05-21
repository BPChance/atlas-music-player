import volume from "../assets/VolumeIcon.svg";

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
        className="h-[15px] w-[374px] cursor-pointer bg-[#D5D7D8] accent-[#64748B]"
      />
    </div>
  );
}
