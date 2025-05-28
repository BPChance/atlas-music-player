import volumeIcon from "../assets/VolumeIcon.svg";

type VolumeControlsProps = {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
};

export default function VolumeControls({
  volume,
  setVolume,
}: VolumeControlsProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <span>
        <img src={volumeIcon} alt="volume" />
      </span>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="accent-supapink h-[15px] w-full max-w-[374px] cursor-pointer bg-[#D5D7D8] shadow-2xl"
      />
    </div>
  );
}
