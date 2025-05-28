import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import VolumeControls from "../components/VolumeControls";

describe("VolumeControls", () => {
  it("renders full volume", () => {
    const { container } = render(
      <VolumeControls volume={1} setVolume={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders half volume", () => {
    const { container } = render(
      <VolumeControls volume={0.5} setVolume={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders mute volume", () => {
    const { container } = render(
      <VolumeControls volume={0} setVolume={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });
});
