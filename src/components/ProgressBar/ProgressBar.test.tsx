import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import ProgressBar from "../ProgressBar/ProgressBar";

describe("ProgressBar component", () => {
  it("renders with correct width", () => {
    const { getByTestId } = render(<ProgressBar percentGameComplete={50} />);
    const progressBar = getByTestId("progress_bar");

    expect(progressBar).toHaveStyle("width: 50%");
  });

  it("renders with green color when percentGameComplete >= 70", () => {
    const { getByTestId } = render(<ProgressBar percentGameComplete={80} />);
    const progressBar = getByTestId("progress_bar");

    expect(progressBar.className).toContain("_green");
  });

  it("renders with orange color when percentGameComplete >= 40", () => {
    const { getByTestId } = render(<ProgressBar percentGameComplete={50} />);
    const progressBar = getByTestId("progress_bar");

    expect(progressBar.className).toContain("_orange");
  });

  it("renders with yellow color when percentGameComplete >= 20", () => {
    const { getByTestId } = render(<ProgressBar percentGameComplete={30} />);
    const progressBar = getByTestId("progress_bar");

    expect(progressBar.className).toContain("_yellow");
  });

  it("renders with red color when percentGameComplete < 20", () => {
    const { getByTestId } = render(<ProgressBar percentGameComplete={10} />);
    const progressBar = getByTestId("progress_bar");

    expect(progressBar.className).toContain("_red");
  });
});
