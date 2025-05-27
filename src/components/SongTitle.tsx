type SongTitleProps = {
  title: string;
  artist: string;
};

export default function SongTitle({ title, artist }: SongTitleProps) {
  return (
    <div className="w-full text-left">
      <h1 className="text-supapink text-2xl font-bold">{title}</h1>
      <p className="text-base text-[#94A3B8]">{artist}</p>
    </div>
  );
}
