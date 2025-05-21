import placeholder from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <div className="h-[400px] w-[400px] overflow-hidden rounded-lg">
      <img
        src={placeholder}
        alt="placeholder"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
