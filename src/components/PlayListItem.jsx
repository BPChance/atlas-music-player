export default function PlayListItem({ title, artist, length, selected }) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg px-4 ${
        selected ? "bg-[#F1F5F9]" : ""
      }`}
    >
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-[#94A3B8]">{artist}</p>
      </div>
      <p className="text-sm text-[#94A3B8]">{length}</p>
    </div>
  );
}
