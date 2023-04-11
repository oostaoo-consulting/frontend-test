import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import store from '../../redux/store';
import Board from './Board';

describe('Board component', () => {
  test('renders reset button', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Board />
      </Provider>
    );
    const resetButton = getByTestId('reset-button');
    expect(resetButton).toBeInTheDocument();
  });

  test('resets game on click', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Board />
      </Provider>
    );
    const resetButton = getByTestId('reset-button');
    fireEvent.click(resetButton);
    const board = getByTestId('board');
    expect(board).toBeInTheDocument();
  });
});
