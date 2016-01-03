import App from './app/components/App.js';
import Projects from './projects/containers/Projects.js';
import NotFound from './app/components/NotFound.js';

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Projects
    },
    childRoutes: [
      {
        path: 'projects',
        component: Projects
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
