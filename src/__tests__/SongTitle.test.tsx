import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SongTitle from "../components/SongTitle";

describe("SongTitle", () => {
  it("renders a song title and artist", () => {
    const { container } = render(
      <SongTitle title="test title" artist="test artist" />,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with empty artist", () => {
    const { container } = render(<SongTitle title="what artist?" artist="" />);
    expect(container).toMatchSnapshot();
  });
});
