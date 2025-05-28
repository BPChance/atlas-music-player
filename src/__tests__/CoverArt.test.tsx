import { render } from "@testing-library/react";
import CoverArt from "../components/CoverArt";
import { describe, expect, it } from "vitest";

describe("CoverArt", () => {
  it("renders a coverarturl", () => {
    const { container } = render(<CoverArt coverArtUrl="example" />);
    expect(container).toMatchSnapshot();
  });

  it("renders nothing when there is no coverarturl", () => {
    const { container } = render(<CoverArt coverArtUrl="" />);
    expect(container).toMatchSnapshot();
  });
});
