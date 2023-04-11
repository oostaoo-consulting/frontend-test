import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import App from './App';

/**
 * checks that the game title displayed on the interface is correctly rendered
 * @param {any} 'App'
 * @param {any} (
 * @returns {any}
 */
describe('App', () => {
  test('renders board title', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const boardTitle = screen.getByTestId('board-title');
    expect(boardTitle).toHaveTextContent('Test Memory');
  });
});
