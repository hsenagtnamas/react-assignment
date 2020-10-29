import React from 'react';
import store from './app/store';
import { Provider } from 'react-redux';
import App from './App';

function RootApp() {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}

export default RootApp;
