type CoverArtProps = {
  coverArtUrl: string;
};

export default function CoverArt({ coverArtUrl }: CoverArtProps) {
  return (
    <div className="aspect-square w-full max-w-[400px] overflow-hidden rounded-lg shadow-2xl">
      <img
        src={coverArtUrl}
        alt="placeholder"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
