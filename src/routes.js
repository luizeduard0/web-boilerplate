import App from './app/components/App'
import NotFound from './app/components/NotFound'

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
