import { describe, it } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  const onCloseMock = vi.fn();

  afterEach(() => {
    onCloseMock.mockClear();
  });

  it("should render with the correct message and win style", () => {
    const { getByText, getByTestId } = render(
      <Modal message="You Win! Congratulations!" onClose={onCloseMock} />
    );
    const message = getByText("You Win! Congratulations!");
    expect(message).toBeInTheDocument();
    const modal = getByTestId("modal");
    expect(modal.className).toContain("_win");
  });

  it("should render with the correct message and lose style", () => {
    const { getByText, getByTestId } = render(
      <Modal message="You Lose! Try again." onClose={onCloseMock} />
    );
    const message = getByText("You Lose! Try again.");
    expect(message).toBeInTheDocument();
    const modal = getByTestId("modal");
    expect(modal.className).toContain("_lose");
  });

  it("should call onClose when the Close button is clicked", () => {
    const { getByText } = render(
      <Modal message="You Win! Congratulations!" onClose={onCloseMock} />
    );
    const closeButton = getByText("Close");
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });
});
