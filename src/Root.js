import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import App from './HomeScreen';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default Root;
