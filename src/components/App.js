import React from 'react';
import { MainRoute } from '../routes';
import store from '../config/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <MainRoute />
    </Provider>
  );
}

export default App;
