import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Timer from "./Timer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Timer", () => {
  const initialState = {
    cards: {
      chronoTimer: 60,
      isStartedGame: true,
    },
  };
  const mockStore = configureStore();
  let store: any;

  beforeEach(() => {
    store = mockStore(initialState);
  });


  test("should display the remaining time", () => {
    render(
      <Provider store={store}>
        <Timer />
      </Provider>
    );
    const timeElement = screen.getByText(/Remaining time :/i);
    expect(timeElement).toBeInTheDocument();

    const chronoTimer = initialState.cards.chronoTimer;
    const remainingTimeElement = screen.getByText(`${chronoTimer} s`);
    expect(remainingTimeElement).toBeInTheDocument();
  });

});
