import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './redux/store';
import App from './components/App/App';


/**
 * Description
 * @param {any} document.getElementById('root'
 * @returns {any}
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* ? Provide the store as prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


