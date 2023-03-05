import React from 'react';
import { hydrateRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import store from './redux/store';
import App from './App';


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


