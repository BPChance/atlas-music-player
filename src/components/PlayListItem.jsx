export default function PlayListItem({ title, artist, length, selected }) {
  return (
    <div
  className={`flex w-full items-center justify-between rounded-lg px-4 py-1 ${
    selected ? "bg-[#052659] text-white" : ""
  }`}
>
  <div className="flex flex-col">
    <p className="font-semibold">{title}</p>
    <p className="text-sm text-[#94A3B8]">{artist}</p>
  </div>
  <div className="text-sm text-[#94A3B8] whitespace-nowrap pl-4 shrink-0">
    {length}
  </div>
</div>
  );
}
