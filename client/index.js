import bootstrap from 'reax-commons/lib/utils/bootstrap'
import reducers from './reducers'
import middlewares from './middlewares'
import routes from './routes'

bootstrap(reducers, middlewares, routes)
