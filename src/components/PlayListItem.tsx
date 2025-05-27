type PlayListItemProps = {
  title: string;
  artist: string;
  duration: number;
  selected: boolean;
};

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

export default function PlayListItem({
  title,
  artist,
  duration,
  selected,
}: PlayListItemProps) {
  return (
    <div
      className={`flex w-full items-center justify-between rounded-lg px-4 py-1 ${
        selected ? "bg-supablue dark:bg-supapurp text-supapink shadow-2xl" : ""
      }`}
    >
      <div className="flex max-w-[75%] flex-col">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-[#94A3B8]">{artist}</p>
      </div>
      <p className="shrink-0 pl-4 text-sm whitespace-nowrap text-[#94A3B8]">
        {formatDuration(duration)}
      </p>
    </div>
  );
}
