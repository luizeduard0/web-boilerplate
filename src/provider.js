import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store from './store';
import history from './history'
import routes from './routes';

const provider = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

export default provider;
