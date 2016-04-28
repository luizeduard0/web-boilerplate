import App from './App'
import NotFound from './NotFound'

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: NotFound
    },
    childRoutes: [
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]

export default routes
