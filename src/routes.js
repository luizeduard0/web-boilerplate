import App from './components/App'
import NotFound from './components/NotFound'

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
