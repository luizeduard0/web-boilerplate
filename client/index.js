import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { render } from 'react-dom'

const router = <Router history={browserHistory} routes={routes} />

render(router, document.getElementById('app'))
