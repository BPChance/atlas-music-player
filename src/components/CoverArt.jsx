import placeholder from "../assets/placeholder.svg";

export default function CoverArt() {
  return (
    <div className="w-full max-w-[400px] aspect-square overflow-hidden rounded-lg shadow-2xl">
  <img
    src={placeholder}
    alt="placeholder"
    className="h-full w-full object-cover"
  />
</div>

  );
}
