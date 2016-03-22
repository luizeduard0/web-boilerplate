import bootstrap from 'reax-commons/client/utils/bootstrap'
import reducers from './reducers'
import middlewares from './middlewares'
import routes from './routes'

bootstrap({ reducers, middlewares, routes })
