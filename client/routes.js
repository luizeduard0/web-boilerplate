import App from './modules/app/components/App'
import Posts from './modules/post/components/Posts'
import PostFormContainer from './modules/post/containers/PostFormContainer'
import NotFound from './modules/app/components/NotFound'

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      onEnter: (nextState, replace) => replace('/posts')
    },
    childRoutes: [
      {
        path: 'posts',
        component: Posts,
        indexRoute: {
          component: PostFormContainer
        },
        childRoutes: [
          {
            path: ':id/edit',
            component: PostFormContainer
          }
        ]
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
]

export default routes
