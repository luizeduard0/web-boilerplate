import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js';

const router = <Router history={browserHistory} routes={routes} />;

export default router;
