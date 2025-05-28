import { render } from "@testing-library/react";
import PlayListItem from "../components/PlayListItem";
import { describe, expect, it } from "vitest";

describe("PlayListItem", () => {
  it("renders correctly", () => {
    const { container } = render(
      <PlayListItem
        title="test song"
        artist="test artist"
        duration={120}
        selected={true}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders unselected item", () => {
    const { container } = render(
      <PlayListItem
        title="Another Song"
        artist="Another Artist"
        duration={95}
        selected={false}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
